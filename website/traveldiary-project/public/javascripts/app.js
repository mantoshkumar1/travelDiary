var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter', 'ngMaterial']);

App.factory('Keyword', ['DS', function (DS) {
    return DS.defineResource('keyword');
}]);

App.factory('Vacation', ['DS', function (DS) {
    return DS.defineResource('vacation');
}]);

App.config(['$stateProvider', 'DSProvider', '$mdThemingProvider', '$urlRouterProvider', function ($stateProvider, DSProvider, $mdThemingProvider, $urlRouterProvider) {
    DSProvider.defaults.basePath = '/api';

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('deep-orange');

    var main_config = {
        abstract: true,
        views: {
            'navigation': {
                templateUrl: 'assets/templates/navigation.html',
                resolve: {
                    keywords: ['Keyword', function (Keyword) {
                        return Keyword.findAll();
                    }]
                },
                controller: 'navigationController'
            }
        }
    };


    var index_config = {
        url: '/index',
        views: {
            'content@': {
                templateUrl: 'assets/templates/index.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }],
                    selectedKeywords: (function () {
                        return [];
                    })
                },
                controller: 'vacationSearchController'
            }
        }
    };

    var vacation_config = {
        url: '/vacation',
        views: {
            'content@': {
                templateUrl: 'assets/templates/search_vacation.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }],
                    selectedKeywords: (function () {
                        return [];
                    })
                },
                controller: 'vacationSearchController'
            }
        }
    };

    var vacation_search_config = {
        url: '/search/{keywordStrings}',
        views: {
            'content@': {
                templateUrl: 'assets/templates/search_vacation.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }],
                    selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                        return Keyword.find($stateParams.keywordStrings);
                    }]
                },
                controller: 'vacationSearchController'
            }
        }
    };


    var vacation_details_config = {
        url: '/details',
        views: {
            'content@': {
                templateUrl: 'assets/templates/vacation_details.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }]
                },
                controller: ['$scope', 'vacations', function ($scope, vacations) {
                    $scope.vacations = vacations;
                    $scope.vacation = vacations[0];
                    $scope.imagePath = "assets/images/1.jpg"
                    console.log($scope.vacation);
                }] // Empty controller
            }
        }
    };

    // Adds the config as a state.
    $stateProvider.state('main', main_config);
    $stateProvider.state('main.index', index_config);
    $stateProvider.state('main.vacation', vacation_config);
    $stateProvider.state('main.vacation.search', vacation_search_config)
    $stateProvider.state('main.vacation.details', vacation_details_config);

    // Move to index page in any other case
    $urlRouterProvider.otherwise('/index');
}]);

App.service('SelectedKeywordsChangeNotifier',function () {

    var keywords = [];
    var callbacks = []

    return {
        registerCallback: (function (callback) {
            callbacks.push(callback);
        }),
        updateSelectedKeywords: (function (newSelectedKeywords) {
            keywords = newSelectedKeywords;

            callbacks.forEach(function (callback) {
                callback(keywords);
            });
        })
    }
});

App.controller('vacationSearchController', ['SelectedKeywordsChangeNotifier', 'Vacation', '$state', '$scope', 'selectedKeywords', 'vacations', function (SelectedKeywordsChangeNotifier, Vacation, $state, $scope, selectedKeywords, vacations) {
    // Add vacations to scope for displaying the content in search_vacation.html

    $scope.budget = 10000000;

    SelectedKeywordsChangeNotifier.registerCallback( function (newSelectedKeywords) {
        $scope.selectedKeywords = newSelectedKeywords;
    });

    // When this controller is loaded the injected selectedKeywords are the current value of keywords
    SelectedKeywordsChangeNotifier.updateSelectedKeywords(selectedKeywords);

    $scope.vacations = vacations;

    $scope.hasAllSelectedKeywords = function (vacation) {
        var lena = $.grep(vacation.keywords, function (keyword) {
            console.log(keyword);
            return $.grep($scope.selectedKeywords, function (selectedKeyword) {
                    keyword.id === selectedKeyword.id;
                }).length >= 0;
        }).length;

        var lenb = $scope.selectedKeywords.length;

        console.log(lena);
        console.log(lenb);

        return lena == lenb;
    };

    $scope.loadVacation = function (vacation) {
        console.log('changing to details view');

        $state.go('main.vacation.details');
    };


}]);
