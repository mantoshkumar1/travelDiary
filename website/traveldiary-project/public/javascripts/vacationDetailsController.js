(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation', 'VacationReview', '$mdDialog',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation, VacationReview, $mdDialog) {
                $scope.vacation = vacation;
                $scope.currentUser = $sessionStorage.currentUser;
                console.log("currentUser");
                console.log( $scope.currentUser);

                $scope.isCreator = function(){
                    console.log("is creator");
                    if ($sessionStorage.currentUser.username == $scope.vacation.creator.username){
                        console.log("user is creator");
                        return true;
                    }
                    console.log("user is not creator");
                    return false;
                };

                $scope.creator = $scope.isCreator();

                imagePath = "assets/images/1.jpg";
                imagePath2 = "assets/images/2.jpg";
                $scope.images = [imagePath, imagePath2];
                console.log($scope.vacation);


                $scope.createVacation = function () {
                    //TODO identify current User
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
                    $scope.newVacation.reviews = $scope.vacation.reviews;

                    $scope.newVacation.DSCreate().then(function () {
                        $scope.vacation = $scope.newVacation;
                        $scope.success = true;
                    });
                    console.log("created Vacation");
                    console.log($scope.vacation);
                    $scope.creator = $scope.isCreator();

                };

                $scope.deleteVacation = function () {
                    // TODO
                };

                $scope.scrollToElement = function (eID) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(eID);
                    anchorSmoothScroll.scrollTo(eID);
                };


                $scope.openEnd = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.openedEnd = true;
                };

                $scope.openStart = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.openedStart = true;
                };

                $scope.budgetList = [];
                $scope.budget = "";
                $scope.budgetTitle = "";
                $scope.addBudget = function () {
                    $scope.budgetList.push({'budget': $scope.budget, 'title': $scope.budgetTitle});
                    $scope.budget = "";
                    $scope.budgetTitle = "";
                };

                $scope.removeBudget = function (index) {
                    console.log(index);
                    $scope.budgetList.splice(index, 1);
                };


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

                        console.log(newReview)


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

            }]);

    App.filter('range', function () {
        return function (val, range) {
            range = parseInt(range);
            for (var i = 0; i < range; i++)
                val.push(i);
            return val;
        };

    });


}());