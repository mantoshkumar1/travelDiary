/**
 * Created by albert on 24.06.15.
 */


App.controller('vacationSearchController', ['Vacation', '$state', '$scope', 'vacations', function (Vacation, $state, $scope, vacations) {
    $scope.budget = 10000000;

    // Add vacations to scope for displaying the content in search_vacation.html
    $scope.vacations = vacations;

    $scope.hasAllSelectedKeywords = function (vacation) {

        // Take all selected keywords that are in the vacation keywords
        var actualMatches = $.grep($scope.selectedKeywords, function (selectedKeyword) {
            return $.grep(vacation.keywords, function (vacationKeyword) {
                return vacationKeyword == selectedKeyword;
            })
        }).length;

        var neededMatches = $scope.selectedKeywords.length;

        return actualMatches == neededMatches;
    };

    $scope.loadVacation = function (vacation) {
        console.log('changing to details view');

        $state.go('main.vacation.details');
    };
}]);