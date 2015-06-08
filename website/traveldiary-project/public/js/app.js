(function(){
    var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter']);

    App.factory('Keyword', ['DS',function(DS){
        return DS.defineResource('keyword');
    }]);

    App.factory('Vacation', ['DS',function(DS){
        return DS.defineResource('vacation');
    }]);

    App.config(['$stateProvider', 'DSProvider',function($stateProvider, DSProvider){

        DSProvider.defaults.basePath = '/api';

        var index_config = {
            url: '',
            views: {
                'navigation': {
                    templateUrl: 'assets/templates/navigation.html',
                    resolve: {
                        keywords: ['Keyword',function (Keyword) {
                            return Keyword.findAll();
                        }]
                    },
                    controller: 'navigationController'
                },
                'content': {
                    templateUrl: 'assets/templates/index.html',
                    controller: [ '$scope', function ($scope) {} ] // Empty controller
                }
            }
        };

        var search_vacation_config = {
            url: '/search_vacations/{keyString}',
            views: {
                'navigation': {
                    templateUrl: 'assets/templates/navigation.html',
                    resolve: {
                        keywords: ['Keyword',function (Keyword) {
                            return Keyword.findAll();
                        }]
                    },
                    controller: 'navigationController'
                },
                'content': {
                    templateUrl: 'assets/templates/search_vacation.html',
                    resolve : {
                        vacations: [ 'Vacation', '$stateParams', function (Vacation,  $stateParams) {
                            return Vacation.find($stateParams.keyString); }]
                    },
                    controller: 'vacationSearchController'
                }
            }
        }

        // Adds the config as a state.
        $stateProvider.state('default', index_config);
        $stateProvider.state('search_vacation_config', search_vacation_config);
    }]);

    App.controller('vacationSearchController', [ '$scope', 'vacations', function($scope, vacations) {
        // Add vacations to scope for displaying the content in search_vacation.html
        $scope.vacations = vacations;
    }]);

    App.controller('navigationController', ['$scope','$state', 'keywords' , function($scope, $state, keywords){
        // Adds keywords to scope in variable keywordList for usage in navigation.html
        $scope.keywordList = keywords;
        $scope.currentKeyword = undefined;
        $scope.searchList = [];

        var keywordString = '';

        $scope.addKeyword = function(newKeyword){
            if(newKeyword != undefined) {
                console.log("keyword.id="+newKeyword.id);
                if(!containsKeyword($scope.searchList, newKeyword)){
                    $scope.searchList.push(newKeyword);
                }
                //$scope.keywordList.splice($scope.keywordList.indexOf(newKeyword), 1);
                // $scope.keywordList = $scope.keywordList.filter( function(el) { return el.id != newKeyword.id; });
                //$scope.keywordList.remove($scope.keywordList.indexOf(newKeyword).id);
                $scope.currentKeyword = undefined;

                keywordString = '';

                $scope.searchList.forEach(function (keyword) {
                    if(keywordString!=''){
                        keywordString += "+";
                    }
                    keywordString += keyword.keyword;
                });

                $state.go('search_vacation_config', {keyString: keywordString});
            }
        };

        $scope.removeKeyword = function(newKeyword){
            if(newKeyword != undefined) {
                if(containsKeyword($scope.searchList, newKeyword)){
                    var index = $scope.searchList.indexOf(newKeyword);
                    $scope.searchList.splice(index, 1);

                    console.log("keywordString:"+keywordString+" keyword:"+newKeyword.keyword);
                    var replacementIndex = keywordString.indexOf(newKeyword.keyword);

                    keywordString = keywordString.replace(newKeyword.keyword, "");

                    console.log("keywordString after:"+keywordString);
                    if(keywordString.trim() != "") {
                        if(replacementIndex == 0){
                            keywordString = keywordString.slice(1, keywordString.length);
                        } else {
                            keywordString = keywordString.substr(0, replacementIndex-1) + keywordString.substr(replacementIndex);
                        }
                        $state.go('search_vacation_config', {keyString: keywordString});
                    } else {
                        $state.go('default');
                    }
                }
            }
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

    App.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

})();
