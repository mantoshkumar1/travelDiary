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
                    }],
                    selectedKeywords: (function () {
                        return [];
                    })                },
                controller: 'globalController'
            }
        }
    };


    var index_config = {
        url: '/index',
        views: {
            'content': {
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
            'content': {
                templateUrl: 'assets/templates/search_vacation.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }]
                },
                controller: 'vacationSearchController'
            }
        }
    };

    var vacation_search_config = {
        url: '/search/{keywordStrings}',
        views: {
            'navigation@': {
                templateUrl: 'assets/templates/navigation.html',
                resolve: {
                    keywords: ['Keyword', function (Keyword) {
                        return Keyword.findAll();
                    }],
                    selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                            if ($stateParams.keywordStrings === '') {
                                return [];
                            } else {
                                return Keyword.find($stateParams.keywordStrings);
                            }
                        }]
                },
                controller: 'globalController'
            },
            'content': {
                templateUrl: 'assets/templates/search_vacation.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }]
                },
                controller: 'vacationSearchController'
            }
        }
    };


    var vacation_details_config = {
        url: '/details',
        views: {
            'content': {
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
    $urlRouterProvider.when('/vacation','/vacation/search');
    $urlRouterProvider.when('/vacation','/vacation/search/');
    $urlRouterProvider.otherwise('/index');

}]);
