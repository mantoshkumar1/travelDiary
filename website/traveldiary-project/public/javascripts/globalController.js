/**
 * Created by albert on 24.06.15.
 */


App.controller('globalController', [ 'Util', '$scope', '$state', '$log', 'keywords', 'selectedKeywords', function (Util, $scope,$state,$log,keywords,selectedKeywords) {

    self.keywords = keywords;

    console.log(selectedKeywords);

    function filterKeywords(keywordsToFilter, filterList) {

        if (keywordsToFilter == undefined || filterList == undefined) {
            $log.error('Can\'t use undefined arguments:' + keywordsToFilter + ", " + filterList);
        }

        return $.grep(keywordsToFilter, function (keyword) {
            return $.grep(filterList, function (filterKeyword) {
                return keyword.id === filterKeyword.id;
            }).length === 0;
        });
    }

    function containsKeyword(theKeyword, keywords) {
        if (theKeyword === undefined || keywords === undefined) {
            $log.error('Can\'t use undefined arguments:' + theKeyword + ", " + keywords);

            return false;
        }

        return $.grep(keywords, function (keyword) {
            return keyword.id === theKeyword.id;
        }).length > 0;
    }

    $scope.setSuggestedKeywords = function (newSuggestedKeywords) {
        if (newSuggestedKeywords === undefined) {
            $log.error('Can\'t set new keyword Suggestion' + newSuggestedKeywords);
        }

        // Filter out all already selected keywords
        if ($scope.selectedKeywords === undefined) {
            $log.error('Selected keywords undefined');
        } else {
            $scope.suggestedKeywords = filterKeywords(newSuggestedKeywords, $scope.selectedKeywords);
        }
    };

    $scope.setSelectedKeyWords = function (newSelectedKeywords) {

        console.log('Setting selected keywords' + newSelectedKeywords);

        $scope.selectedKeywords = newSelectedKeywords;

        // Filter out all already selected keywords from suggestions
        if ($scope.suggestedKeywords !== undefined) {
            $scope.suggestedKeywords = filterKeywords($scope.suggestedKeywords, $scope.selectedKeywords);
        }
    };

    $scope.setSelectedKeyWords(selectedKeywords);
    $scope.setSuggestedKeywords(keywords);

    $scope.$watch('selectedKeywords', function () {
        console.log('Selected keywords changed.');
        console.log($scope.selectedKeywords);
    });

    $scope.$watch('suggestedKeywords', function () {
        console.log('Suggested keywords changed.');
        console.log($scope.suggestedKeywords);
    });


    $scope.addKeywordToSelection = function (newKeyword) {

        console.log('Adding keyword ' + newKeyword);

        if (newKeyword != undefined) {
            if (!containsKeyword(newKeyword, $scope.selectedKeywords)) {
                $scope.selectedKeywords.push(newKeyword);

                // Filter out all already selected keywords
                $scope.suggestedKeywords = filterKeywords($scope.suggestedKeywords, $scope.selectedKeywords)
            } else {
                console.log('Keyword' + newKeyword + "already contained in selection.")
            }

        } else {
            $log.error('Can\'t add keyword ' + newKeyword);
        }

        $scope.searchText = '';

        loadResultPage();
    };

    $scope.removeKeywordFromSelection = function (removedKeyword) {

        console.log('Removing keyword ' + removedKeyword);

        if (removedKeyword !== undefined) {
            var result = filterKeywords($scope.selectedKeywords, [removedKeyword]);

            console.log('Removing resulted in');

            console.log(result);

            if (result.length === $scope.selectedKeywords.length) {
                console.log('Keyword (' + removedKeyword + ') to remove from selected keywords is not in current selection.');
            } else {
                $scope.selectedKeywords = result;

                // Add it back to the suggestions TODO: Make this based on previous suggestions
                $scope.suggestedKeywords.push(removedKeyword);

                loadResultPage();
            }
        } else {
            $log.error('Can\'t remove keyword ' + removedKeyword);
        }
    };

    $scope.clickRegister = function($event) {
        $state.go('main.register', {keyString: $scope.keywordString});
    };

    $scope.handleKeywordAppend = function (keyword) {

        $scope.addKeywordToSelection(keyword);

        return keyword;
    };

    function loadResultPage() {
        console.log('Loading page with keywords');
        console.log($scope.selectedKeywords);

        var keyStrings = Util.getKeywordString($scope.selectedKeywords);

        if (keyStrings.trim() !== '') {
            $state.go
            ('main.vacation.search', {keywordStrings: keyStrings});
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