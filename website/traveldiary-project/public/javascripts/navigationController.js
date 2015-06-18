App.controller('navigationController', ['$scope','$state', 'keywords', 'selectedKeywords', function($scope, $state, keywords, selectedKeywords){
    // Adds keywords to scope in variable keywordList for usage in navigation.html
    $scope.keywordList = keywords;
    $scope.searchList = selectedKeywords;

    $scope.currentKeyword = undefined;

    var getKeywordString = function (kws) {
        var result = '';

        kws.forEach( function (k) {
                if (result != '') {
                    result += '+';
                }

                result += k.keyword;
            }
        );

        return result;
    };

    var containsKeyword = function(list, keyword){
        var found = false;
        for(var i = 0; i < list.length; i++) {
            if (list[i].id == keyword.id) {
                found = true;
                break;
            }
        }
        return found;
    };

    $scope.addKeyword = function(newKeyword){
        if(newKeyword != undefined && containsKeyword($scope.keywordList, newKeyword)) {
            if(!containsKeyword($scope.searchList, newKeyword)){
                $scope.searchList.push(newKeyword);
            }

            $scope.currentKeyword = undefined;

            $state.go('search_vacation_config', {keyString: getKeywordString($scope.searchList)});
        }
    };

    $scope.removeKeyword = function(newKeyword){
        if(newKeyword != undefined) {
            if(containsKeyword($scope.searchList, newKeyword)){
                var index = $scope.searchList.indexOf(newKeyword);
                $scope.searchList.splice(index, 1);
                $scope.keywordString = getKeywordString($scope.searchList);

                if($scope.keywordString.trim() != "") {
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