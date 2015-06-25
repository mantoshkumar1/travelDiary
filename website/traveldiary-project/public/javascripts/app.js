var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter', 'ngMaterial']);

App.factory('Keyword', ['DS', function (DS) {
    return DS.defineResource('keyword');
}]);

App.factory('Vacation', ['DS', function (DS) {
    return DS.defineResource('vacation');
}]);

App.factory('User', ['DS',function(DS){
    return DS.defineResource('user');
}]);

App.config(['$stateProvider', 'DSProvider','$mdThemingProvider', '$urlRouterProvider',function($stateProvider, DSProvider,$mdThemingProvider,$urlRouterProvider){
    DSProvider.defaults.basePath = '/api';

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('deep-orange');

    var main_config = {
        abstract: true,
        resolve: {
            keywords: ['Keyword', function (Keyword) {
                return Keyword.findAll();
            }],
            selectedKeywords: (function () {
                return [];
            })
        },
        views: {
            'navigation': {
                templateUrl: 'assets/templates/navigation.html',
                controller: 'globalController'
            }
        }
    };


    var index_config = {
        url: '/index',
        resolve: {
            vacations: ['Vacation', function (Vacation) {
                return Vacation.findAll();
            }]
        },
        views: {
            'content': {
                templateUrl: 'assets/templates/index.html',
                controller: 'vacationSearchController'
            }
        }
    };

    var vacation_config = {
        url: '/vacation',
        resolve: {
            vacations: ['Vacation', function (Vacation) {
                return Vacation.findAll();
            }],
            selectedKeywords: (function () {
                return [];
            })
        },
        views: {
            'navigation@': {
                templateUrl: 'assets/templates/navigation.html',
                controller: 'globalController'
            },
            'content': {
                templateUrl: 'assets/templates/search_vacation.html',
                controller: 'vacationSearchController'
            }
        }
    };

    var vacation_search_config = {
        url: '/search/{keywordStrings}',
        resolve: {
            selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                if ($stateParams.keywordStrings === '') {
                    return [];
                } else {
                    return Keyword.find($stateParams.keywordStrings);
                }
            }]
        },
        views: {
            'navigation@': {
                templateUrl: 'assets/templates/navigation.html',
                controller: 'globalController'
            },
            'content@main': {
                templateUrl: 'assets/templates/search_vacation.html',
                controller: 'vacationSearchController'
            }
        }
    };


    var vacation_details_config = {
        url: '/details',
        views: {
            'content@main': {
                templateUrl: 'assets/templates/vacation_details.html',
                controller: ['$scope', 'vacations', function ($scope, vacations) {
                    $scope.vacations = vacations;
                    $scope.vacation = vacations[0];
                    $scope.imagePath = "assets/images/1.jpg";
                    console.log($scope.vacation);
                }] // Empty controller
            }
        }
    };

    var register_config = {
        url: '/register',
        resolve : {
            users: [ 'User', function (User) {
                return User.findAll(); }]
        },
        views: {
            'content': {
                templateUrl: 'assets/templates/registerUser.html',
                controller: 'registerController'
            }
        }
    };

    $stateProvider.state('main', main_config);
    $stateProvider.state('main.index', index_config);
    $stateProvider.state('main.vacation', vacation_config);
    $stateProvider.state('main.vacation.search', vacation_search_config);
    $stateProvider.state('main.vacation.details', vacation_details_config);
    $stateProvider.state('main.register',register_config);


    // Move to index page in any other case
    $urlRouterProvider.otherwise('/index');
}]);
