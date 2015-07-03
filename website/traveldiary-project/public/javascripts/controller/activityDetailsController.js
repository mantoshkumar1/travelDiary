(function () {
    var App = angular.module("travelDiary");

    App.controller('activityDetailsController', ['$scope', '$location', 'activity', 'anchorSmoothScroll','ReviewDialogService','ActivityReview',
        function ($scope, $location, activity, anchorSmoothScroll,ReviewDialogService,ActivityReview) {
            console.log(activity);
            $scope.activity = activity;
            $scope.creator = false;
            $scope.currentUserReview =
                ReviewDialogService
                    .getReviewForUser($scope.activity.reviews, $scope.currentUser);

            $scope.scrollToElement = function (eID) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash(eID);
                anchorSmoothScroll.scrollTo(eID);
            };

            $scope.showReviewCreateDialog = function () {
                ReviewDialogService
                    .showActivityReviewCreateDialog($scope.currentUser, $scope.activity)
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
                    .showActivityReviewEditDialog($scope.currentUser, $scope.activity, $scope.currentUserReview)
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
                ActivityReview.destroy(review.id);
            };

        }
    ]);

}());

