(function () {
    var App = angular.module("travelDiary");

    App.controller('activityDetailsController', ['$scope', '$location', 'activity', 'anchorSmoothScroll',
        function ($scope, $location, activity, anchorSmoothScroll) {
            console.log(activity);
            $scope.activity = activity;
            $scope.creator = false;

            $scope.scrollToElement = function (eID) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash(eID);
                anchorSmoothScroll.scrollTo(eID);
            };

        }
    ]);

}());

