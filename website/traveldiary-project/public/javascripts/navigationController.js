App.controller('navigationController', ['$scope','$state', 'keywords', 'selectedKeywords', function($scope, $state, keywords, selectedKeywords){
    // Adds keywords to scope in variable keywordList for usage in navigation.html

    $scope.isDisabled = false;
    $scope.noCache = false;
    $scope.autofocus = true;
    $scope.autoselect = true;
    $scope.searchText = undefined;
    $scope.selectedKeyword = undefined;


    self.keywords = keywords;

    $scope.selectedKeywords = selectedKeywords.filter(function (keyword) {
            return $.inArray(self.keywords,keyword);
        }
    );

    $scope.suggestedKeywords = self.keywords;

    $scope.$watch(selectedKeywords, function () { console.log('selected keywords changed'); });

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

    $scope.addKeyword = function(keyword) {

        var newKeyword = keyword;

        console.log(newKeyword);

        if (keyword !== undefined && self.keywords.indexOf(newKeyword) >= 0) {
            if ($scope.selectedKeywords.indexOf(newKeyword) >= 0) {
                // TODO: show toast
            } else {
                $scope.selectedKeywords.push(keyword);
                $scope.selectedKeyword = undefined;
                $state.go('search_vacation_config', {keyString: getKeywordString($scope.selectedKeywords)});
            }
        }
    }

    $scope.removeKeyword = function(removedKeyword) {

        console.log(removedKeyword);

        if(removedKeyword != undefined) {
            if($.inArray($scope.selectedKeywords,removedKeyword)){

                $scope.selectedKeywords = $.grep($scope.selectedKeywords,function(keyword) {return keyword !== removedKeyword});

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