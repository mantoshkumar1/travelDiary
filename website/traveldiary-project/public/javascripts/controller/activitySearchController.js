/**
 * Created by albert on 02.07.15.
 */
(function() {

angular.module("travelDiary")
    .controller('activitySearchController', ['$scope', '$state', 'SearchService', 'activities','SearchService',
        function ($scope, $state, SearchService, activities, SearchService) {

        var thisCtrl = this;

        var searchService = SearchService;

        thisCtrl.budgetContainer = searchService.budgetContainer;

        var selectedKeywords = searchService.selectedKeywords;

        // Add vacations to scope for displaying the content in search_vacation.html
        thisCtrl.activities = activities;

        thisCtrl.hasAllSelectedKeywords = function (activity) {

            var matches = searchService.findMatchingKeywords(selectedKeywords, activity.keywords);

            // Take all selected keywords that are in the vacation keywords
            var actualMatches = matches.length;

            var neededMatches = selectedKeywords.length;

            return actualMatches === neededMatches;
        };

        thisCtrl.loadActivity = function (activity) {
            console.log('changing to details view');

            $state.go('main.activity.details', {id: activity.id});
        };
    }]);

}());