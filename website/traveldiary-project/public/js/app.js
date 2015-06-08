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
                        }],
                        selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                            return [];
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
                        }],
                        selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                            return Keyword.find($stateParams.keyString);
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

    App.controller('navigationController', ['$scope','$state', 'keywords', 'selectedKeywords', function($scope, $state, keywords, selectedKeywords){
        // Adds keywords to scope in variable keywordList for usage in navigation.html
        $scope.keywordList = keywords;
        $scope.searchList = selectedKeywords;

        console.log(selectedKeywords);

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
            if(newKeyword != undefined) {
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
