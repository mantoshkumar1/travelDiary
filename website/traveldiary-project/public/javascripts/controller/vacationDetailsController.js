(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation',
            'ReviewDialogService', 'VacationReview','VacationService',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation,
                      ReviewDialogService, VacationReview, VacationService) {

                $scope.vacation = vacation;
                $scope.currentUser = $sessionStorage.currentUser;

                $scope.isCreator = function(){
                    if ($sessionStorage.currentUser && $sessionStorage.currentUser.username == $scope.vacation.creator.username){
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
                    $scope.newVacation.activities = $scope.vacation.activities;
                    $scope.newVacation.budget = $scope.vacation.budget;
                    $scope.newVacation.location = $scope.vacation.location;
                    $scope.newVacation.startDate = $scope.vacation.startDate;
                    $scope.newVacation.endDate = $scope.vacation.endDate;
                    $scope.newVacation.keywords = $scope.vacation.keywords;
                    $scope.newVacation.reviews = [];


                    VacationService.createVacation($scope.newVacation).then(function (vacation) {
                        console.log('Created vacation:');
                        console.log(vacation);
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