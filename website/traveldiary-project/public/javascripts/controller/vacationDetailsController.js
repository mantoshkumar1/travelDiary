(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation', 'VacationReview', '$mdDialog',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation, VacationReview, $mdDialog) {

                $scope.vacation = vacation;
                $scope.currentUser = $sessionStorage.currentUser;

                $scope.isCreator = function(){
                    if ($sessionStorage.currentUser.username == $scope.vacation.creator.username){
                        return true;
                    }
                    return false;
                };

                $scope.totalBudget =  function(){
                    var total = $scope.vacation.budget;
                    for(var i = 0; i < $scope.vacation.activities.length; i++){
                        total += $scope.vacation.activities[i].budget;
                    }
                    return total;
                };



                $scope.createVacation = function () {
                    console.log("create Vacation");

                    $scope.newVacation = Vacation.createInstance();
                    $scope.newVacation.creator = $scope.currentUser;
                    $scope.newVacation.name = "Test";
                    $scope.newVacation.description = $scope.vacation.description;
                    $scope.newVacation.activities = [];
                    $scope.newVacation.budget = $scope.vacation.budget;
                    $scope.newVacation.location = $scope.vacation.location;
                    $scope.newVacation.startDate = $scope.vacation.startDate;
                    $scope.newVacation.endDate = $scope.vacation.endDate;
                    $scope.newVacation.keywords = $scope.vacation.keywords;
                    $scope.newVacation.reviews = [];


                    $scope.newVacation.DSCreate().then(function (vacation) {
                        console.log("created Vacation");
                        //vacation.activities.push($scope.vacation.activities[0]);
                        //vacation.DSSave().then(function(vacation){
                            $state.go("main.vacation.edit",{id: vacation.id});
                        //S});
                    });


                };

                $scope.deleteVacation = function () {
                    // TODO
                };


               /* Reviews */
                $scope.currentUserReview = getReviewForUser($scope.vacation.reviews, $scope.currentUser);

                $scope.showReviewDialog = function (user, review, vacation) {

                    var hasReview = review !== null;


                    $mdDialog.show({
                        parent: angular.element(document.body),
                        locals: {
                            review: {
                                title: hasReview ? review.title : '',
                                description: hasReview ? review.description : '',
                                rating: hasReview ? review.rating : ''
                            }
                        },
                        templateUrl: 'assets/templates/dialogs/review_dialog.html',
                        controller: 'VacationReviewController'
                    }).then(function (newReview) {

                        console.log(newReview);


                        if (hasReview) {
                            newReview.userId = user.id;
                            newReview.vacationId = vacation.id;
                            VacationReview.update(review.id, newReview);

                        } else {
                            var reviewToInsert = VacationReview.createInstance();

                            reviewToInsert.title = newReview.title;
                            reviewToInsert.description = newReview.description;
                            reviewToInsert.rating = newReview.rating;
                            reviewToInsert.date = newReview.date;
                            reviewToInsert.userId = user.id;
                            reviewToInsert.vacationId = vacation.id;
                            reviewToInsert.DSCreate().then(function (review) {

                                $state.reload();
                            });

                        }
                    });


                };

                $scope.deleteReview = function (review) {
                    VacationReview.destroy(review.id);
                    $state.reload();
                };

                function getReviewForUser(reviews, user) {
                    if (reviews && user) {
                        for (i = 0; i < reviews.length; i++) {
                            if (reviews[i].userId === user.id) {
                                return reviews[i];
                            }
                        }
                    }

                    return null;
                }


                /*---------------- UI -------------------------*/
                /* Scroll */
                $scope.scrollToElement = function (eID) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(eID);
                    anchorSmoothScroll.scrollTo(eID);
                };

            }]);
}());