App.controller('navigationController', ['$scope','$state', 'keywords', 'selectedKeywords', function($scope, $state, keywords, selectedKeywords){
    // Adds keywords to scope in variable keywordList for usage in navigation.html

    $scope.isDisabled = false;
    $scope.noCache = false;
    $scope.autofocus = true;
    $scope.autoselect = true;
    $scope.budget = 125;
    $scope.showSuggestions = true;
    $scope.searchText = undefined;
    $scope.selectedKeyword = undefined;


    self.keywords = keywords;

    // Filter invalid keywords from URL TODO: Maybe go to different URL
    $scope.selectedKeywords = $.grep(selectedKeywords, function (keyword) {
            return $.inArray(keyword,self.keywords < 0);
        }
    );

    // Filter suggestions by removing selected keywords
    $scope.suggestedKeywords = $.grep(self.keywords, function (keyword) {
            return $.inArray(keyword, $scope.selectedKeywords) < 0;
        }
    );

    $scope.searchBarOnFocus = function() {
        console.log('focus');

        $scope.showSuggestions = true;
    };

    function searchBarOnBlur () {
        console.log('blur');

        $scope.showSuggestions = false;
    };

    function getKeywordString (kws) {
        var result = '';

        kws.forEach( function (k) {
                if (result !== '') {
                    result += '+';
                }

                result += k.keyword;
            }
        );

        return result;
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

        console.log("getFilteredKeywords called");

        return results;
    };


    function getKeywordFor(searchText) {
        var possiblities = $.grep(self.keywords,function(keyword) {return keyword.keyword === searchText});

        return possiblities[0];
    }

    $scope.addKeyword = function(newKeyword) {
        console.log(newKeyword);

        if (newKeyword !== undefined && self.keywords.indexOf(newKeyword) >= 0) {
            if ($scope.selectedKeywords.indexOf(newKeyword) >= 0) {
                // Shouldn't happen since we remove the keyword here first.
            } else {
                // Add new keyword to selected keywords
                $scope.selectedKeywords.push(newKeyword);

                //Remove keyword from suggestions
                $scope.suggestedKeywords = $.grep($scope.suggestedKeywords,function(keyword) {return keyword !== newKeyword});

                // Reset selected Keyword
                $scope.selectedKeyword = undefined;

                // Switch to new search url
                $state.go('search_vacation_config', {keyString: getKeywordString($scope.selectedKeywords)});
            }
        }
    }

    $scope.clickHome = function($event) {
        $state.go('registration_config', {keyString: $scope.keywordString});
    }
    $scope.removeKeyword = function(removedKeyword) {

        if(removedKeyword != undefined) {

            if($.inArray(removedKeyword, $scope.selectedKeywords) >= 0){

                $scope.selectedKeywords = $.grep($scope.selectedKeywords,function(keyword) {return keyword !== removedKeyword});

                $scope.suggestedKeywords.push(removedKeyword);

                $scope.keywordString = getKeywordString($scope.selectedKeywords);

                if($scope.keywordString.trim() !== "") {
                    $state.go('search_vacation_config', {keyString: $scope.keywordString});
                } else {
                    $state.go('default');
                }
            }
        }
    };

    $scope.getSearchFilter = function($viewValue) {
        console.log("entered searchFilter");
        var matching = [];
        console.log($scope.keywordList);
        console.log($scope.keywordList.length);
        for (var i=0; i < $scope.keywordList.length; i++) {
            console.log($scope.keywordList[i].keyword);
            if ($scope.keywordList[i].keyword.toLowerCase().indexOf($viewValue.toLowerCase()) != -1){
                matching.push($scope.stuffs[i]);
            }
        }
        console.log(matching);
        return matching;
    };
}]);