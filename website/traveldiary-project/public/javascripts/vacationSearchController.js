/**
 * Created by albert on 24.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.controller('vacationSearchController', ['$scope', '$state', 'KeywordService', 'vacations', function ($scope, $state, KeywordService, vacations) {

    var thisCtrl = this;

    var keywordService = KeywordService;

    var selectedKeywords = keywordService.selectedKeywords;

    // Add vacations to scope for displaying the content in search_vacation.html
    thisCtrl.vacations = vacations;

    thisCtrl.hasAllSelectedKeywords = function (vacation) {

        var matches = keywordService.findMatchingKeywords(selectedKeywords, vacation.keywords);

        // Take all selected keywords that are in the vacation keywords
        var actualMatches = matches.length;

        var neededMatches = selectedKeywords.length;

        return actualMatches === neededMatches;
    };

    thisCtrl.loadVacation = function (vacation) {
        console.log('changing to details view');

        $state.go('main.vacation.details', {id: vacation.id});
    };
}]);

}());