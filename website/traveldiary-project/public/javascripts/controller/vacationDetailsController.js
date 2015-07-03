(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation', 'ReviewDialogService', 'VacationReview',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation, ReviewDialogService, VacationReview) {

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

                $scope.currentUserReview =
                    ReviewDialogService
                        .getReviewForUser($scope.vacation.reviews, $scope.currentUser);

               /* Reviews */
                $scope.showReviewCreateDialog = function () {
                    ReviewDialogService
                        .showVacationReviewCreateDialog($scope.currentUser, $scope.vacation)
                        .then( function (review) {
                            console.log("Created Review");
                            console.log(review);

                        }, function (error) {
                            console.log("Could not create Dialog");
                            console.log(error);
                        }
                    );
                }

                $scope.showReviewEditDialog = function () {
                    ReviewDialogService
                        .showVacationReviewEditDialog($scope.currentUser, $scope.vacation, $scope.currentUserReview)
                        .then( function (review) {
                            console.log("Created Review");
                            console.log(review);

                        }, function (error) {
                            console.log("Could not create Dialog");
                            console.log(error);
                        }
                    );
                };

                $scope.deleteReview = function (review) {
                    VacationReview.destroy(review.id);
                };

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