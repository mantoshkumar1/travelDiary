/**
 * Created by albert on 02.07.15.
 */
(function() {

angular.module("travelDiary")
    .controller('activitySearchController', ['$scope', '$state', 'SearchService', 'activites','SearchService',
        function ($scope, $state, SearchService, vacations, SearchService) {

        var thisCtrl = this;

        var searchService = SearchService;

        thisCtrl.budgetContainer = searchService.budgetContainer;

        var selectedKeywords = searchService.selectedKeywords;

        // Add vacations to scope for displaying the content in search_vacation.html
        thisCtrl.activites = activites;

        thisCtrl.hasAllSelectedKeywords = function (activity) {

            var matches = searchService.findMatchingKeywords(selectedKeywords, activity.keywords);

            // Take all selected keywords that are in the vacation keywords
            var actualMatches = matches.length;

            var neededMatches = selectedKeywords.length;

            return actualMatches === neededMatches && activity.budget <= searchService.budgetContainer.currentBudget;
        };

        thisCtrl.loadVacation = function (vacation) {
            console.log('changing to details view');

            $state.go('main.activity.details', {id: vacation.id});
        };
    }]);

}());