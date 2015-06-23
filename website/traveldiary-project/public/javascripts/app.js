var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter','ngMaterial']);

App.factory('Keyword', ['DS',function(DS){
    return DS.defineResource('keyword');
}]);

App.factory('Vacation', ['DS',function(DS){
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

    var navigation_view_no_selection = {
        templateUrl: 'assets/templates/navigation.html',
        resolve: {
            keywords: ['Keyword',function (Keyword) {
                return Keyword.findAll();
            }],
            selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                return []; // Injects zero keywords
            }]
        },
        controller: 'navigationController'
    };

    var index_config = {
        url: '/index',
        views: {
            'navigation': navigation_view_no_selection,
            'content': {
                templateUrl: 'assets/templates/index.html',
                resolve: {
                    vacations: ['Vacation', function (Vacation) {
                        return Vacation.findAll();
                    }]
                },
                controller: 'vacationSearchController'
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

    var vacation_details_config = {
        url: '/vacation_details',
        views: {
            'navigation': navigation_view_no_selection,
            'content': {
                templateUrl: 'assets/templates/vacation_details.html',
                resolve : {
                    vacations: [ 'Vacation', function (Vacation) {
                        return Vacation.findAll(); }]
                },
                controller: [ '$scope', 'vacations' , function ($scope, vacations) {
                    $scope.vacations = vacations;
                    $scope.vacation = vacations[0];
                    $scope.imagePath = "assets/images/1.jpg"
                    console.log($scope.vacation);
                }] // Empty controller
            }
        }
    };

    var registration_config = {
        url: '/register',
        views: {
            'navigation': {
                templateUrl: 'assets/templates/navigation.html',
                resolve: {
                    keywords: ['Keyword',function (Keyword) {
                        return Keyword.findAll();
                    }],
                    selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                        return []; // Injects zero keywords
                    }]
                },
                controller: 'navigationController'
            },
            'content': {
                templateUrl: 'assets/templates/registerUser.html',
                resolve : {
                    users: [ 'User', function (User) {
                        return User.findAll(); }]
                },
                controller: 'registerController'
            }
        }
    };

    // Adds the config as a state.
    $stateProvider.state('default', index_config);
    $stateProvider.state('search_vacation_config', search_vacation_config);
    $stateProvider.state('vacation_details_config', vacation_details_config);
    $stateProvider.state('registration_config', registration_config);

    // Move to index page in any other case
    $urlRouterProvider.otherwise('/index');
}]);

App.controller('vacationSearchController', [ '$state', '$scope', 'vacations', function($state,$scope, vacations) {
    // Add vacations to scope for displaying the content in search_vacation.html
    $scope.vacations = vacations;

    $scope.loadVacation = function (vacation) {
        console.log('changing to details view');

        $state.go('vacation_details_config');
    };


}]);
