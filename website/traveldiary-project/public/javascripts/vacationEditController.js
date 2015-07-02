/**
 * Created by albert on 02.07.15.
 */
(function () {

    var App = angular.module("travelDiary");

    App.controller('VacationEditController',
        ['$scope', '$state', '$location', 'anchorSmoothScroll', 'vacation','keywords',
            function ($scope, $state, $location, anchorSmoothScroll, vacation, keywords) {


                $scope.vacation = vacation;
                $scope.keywords = keywords;

                $scope.deleteVacation = function (vacation) {
                    console.log(vacation);
                };

                $scope.saveVacation = function (vacation) {
                    console.log(vacation);
                };

                $scope.scrollToElement = function (eID) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(eID);
                    anchorSmoothScroll.scrollTo(eID);
                };


                $scope.openEnd = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.openedEnd = true;
                };

                $scope.openStart = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.openedStart = true;
                };

            }]);
}());