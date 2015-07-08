(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation',
            'ReviewDialogService', 'VacationReview','VacationService','$stateParams',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation,
                      ReviewDialogService, VacationReview, VacationService, $stateParams) {

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

                function refreshState() {
                    Vacation.refresh($scope.vacation.id).then(function (vacation) {
                        Vacation.compute($scope.vacation.id);

                        $state.go($state.current, $stateParams, { reload: true, inherit: true, notify: true });
                    });
                }

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

                            $scope.currentUserReview = review;
                            refreshState();
                        }, function (error) {
                            console.log("Could not create Review");
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

                            $scope.currentUserReview = review;
                            refreshState();
                        }, function (error) {
                            console.log("Could not create Review");
                            console.log(error);
                        }
                    );
                };



                $scope.deleteReview = function (review) {
                    VacationReview.destroy(review.id).then( function () {
                        $scope.currentUserReview = false;
                        refreshState();
                    });
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