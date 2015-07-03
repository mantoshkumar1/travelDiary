(function () {

    var App = angular.module("travelDiary");

    App.controller('VacationEditController',
        ['$scope', '$state', '$location', 'anchorSmoothScroll', 'SearchService', 'vacation','keywords',
            function ($scope, $state, $location, anchorSmoothScroll, SearchService, vacation, keywords) {


                $scope.vacation = vacation;
                $scope.keywords = keywords;

                $scope.totalBudget =  function(){
                    var total = $scope.vacation.budget;
                    for(var i = 0; i < $scope.vacation.activities.length; i++){
                        total += $scope.vacation.activities[i].budget;
                    }
                    return total;
                };

                $scope.addActivity = function(index){


                };

                $scope.removeActivity = function(index){
                    $scope.vacation.activities.splice(index, 1);
                };

                $scope.searchText = '';
                $scope.selectedKeyword = undefined;
                $scope.addKeyword = function (keyword) {
                    $scope.vacation.keywords.push(keyword);
                    $scope.searchText = '';

                };

                createKeywordFilter = function(searchText) {
                    var lowerCaseSearchText = angular.lowercase(searchText);
                    return function (keyword) {
                        var lowerCaseKeyword = angular.lowercase(keyword.keyword);
                        return (lowerCaseKeyword.indexOf(lowerCaseSearchText) === 0);
                    }
                };

                $scope.getFilteredKeywords = function (searchText) {
                    var results = searchText ? keywords.filter(createKeywordFilter(searchText)) : keywords;
                    return results;
                };

                $scope.deleteVacation = function (vacation) {
                    console.log(vacation);
                };

                $scope.saveVacation = function (vacation) {
                    console.log(vacation);
                };

                /*---------------- UI -------------------------*/
                /* Scroll */
                $scope.scrollToElement = function (eID) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(eID);
                    anchorSmoothScroll.scrollTo(eID);
                };

                /* Calendar */
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

                /*
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
                 */


            }]);
}());