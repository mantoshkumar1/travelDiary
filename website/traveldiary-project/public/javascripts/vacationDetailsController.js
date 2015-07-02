(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', '$sessionStorage', 'anchorSmoothScroll', 'vacation', 'Vacation', 'ReviewDialogService', 'VacationReview',
            function ($scope, $state, $location, $sessionStorage, anchorSmoothScroll, vacation, Vacation, ReviewDialogService, VacationReview) {
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


                $scope.currentUserReview =
                    ReviewDialogService
                        .getReviewForUser($scope.vacation.reviews, $scope.currentUser);

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