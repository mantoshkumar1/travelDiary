/**
 * Created by albert on 24.06.15.
 */


App.controller('globalController', [ 'Util', '$scope', '$state', '$log', 'keywords', 'selectedKeywords', function (Util, $scope,$state,$log,keywords,selectedKeywords) {

    self.keywords = keywords;

    $scope.setSuggestedKeywords = function (newSuggestedKeywords) {
        if (newSuggestedKeywords == undefined) {
            $log.error('Can\'t set new keyword Suggestion' + newSuggestedKeywords);
        }

        // Filter out all already selected keywords
        $scope.suggestedKeywords = $.grep(newSuggestedKeywords, function (keyword) {
            return $.inArray(keyword, $scope.selectedKeywords) < 0;
        });
    };

    $scope.setSelectedKeyWords = function (newSelectedKeywords) {

        console.log('Setting selected keywords' + newSelectedKeywords);

        $scope.selectedKeywords = newSelectedKeywords;

        // Filter out all already selected keywords
        $scope.suggestedKeywords = $.grep($scope.selectedKeywords, function (keyword) {
            return $.inArray(keyword, $scope.selectedKeywords) < 0;
        });

        loadResultPage();
    };

    $scope.setSelectedKeyWords(selectedKeywords);
    $scope.setSuggestedKeywords(keywords);

    $scope.addKeywordToSelection = function () {

        var newKeyword = $scope.selectedKeyword;

        console.log('Adding keyword ' + newKeyword);

        if (newKeyword != undefined) {
            $scope.selectedKeywords.push(newKeyword);

            // Filter out all already selected keywords
            $scope.suggestedKeywords = $.grep($scope.suggestedKeywords, function (keyword) {
                return $.inArray(keyword, $scope.selectedKeywords) < 0;
            });
        } else {
            $log.error('Can\'t add keyword ' + newKeyword);
        }

        loadResultPage();
    };

    $scope.removeKeywordFromSelection = function (removedKeyword) {

        console.log('Removing keyword ' + removedKeyword.keyword);

        var result = $.grep($scope.selectedKeywords, function (keyword) {
            return keyword != removedKeyword;
        });

        if (result.length === $scope.selectedKeywords.length) {
            console.log('Keyword (' + removedKeyword + ') to remove from selected keywords is not in current selection.');
        } else {
            $scope.selectedKeywords = result;
        }

        // Add it back to the suggestions TODO: Make this based on previous suggestions
        $scope.suggestedKeywords.push(removedKeyword);

        loadResultPage();
    };



    $scope.handleKeywordAppend = function (keyword) {

        $scope.addKeywordToSelection(keyword);

        return keyword;
    };

    function loadResultPage() {
        var keyStrings = Util.getKeywordString($scope.selectedKeywords);

        if (keyStrings !== '') {
            $state.go('main.vacation.search', {keywordStrings: keyStrings});
        } else {
            $state.go('main.vacation');
        }
    }


    // Navigation from here on
    $scope.isDisabled = false;
    $scope.noCache = true;
    $scope.autofocus = true;
    $scope.autoselect = true;
    $scope.budget = 125;
    $scope.showSuggestions = true;
    $scope.searchText = undefined;
    $scope.selectedKeyword = undefined;

    console.log(selectedKeywords);

    $scope.searchBarOnFocus = function() {
        console.log('focus');

        $scope.showSuggestions = true;
    };

    function searchBarOnBlur () {
        console.log('blur');

        $scope.showSuggestions = false;
    };

    function createKeywordFilter(searchText) {
        var lowerCaseSearchText = angular.lowercase(searchText);
        return function(keyword) {
            var lowerCaseKeyword = angular.lowercase(keyword.keyword);
            return (lowerCaseKeyword.indexOf(lowerCaseSearchText) === 0);
        }
    };

    $scope.getFilteredKeywords = function (searchText) {
        var results = searchText ? self.keywords.filter( createKeywordFilter(searchText) ) : self.keywords;

        return results;
    };


    function getKeywordFor(searchText) {
        var possiblities = $.grep(self.keywords,function(keyword) {return keyword.keyword === searchText});

        return possiblities[0];
    }
}]);