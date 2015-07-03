(function () {

    var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter', 'ngMaterial', 'ngStorage', 'ngMessages']);

    App.config(['$stateProvider', 'DSProvider', '$mdThemingProvider', '$urlRouterProvider', function ($stateProvider, DSProvider, $mdThemingProvider, $urlRouterProvider) {
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
                vacations: ['Vacation', function (Vacation) {
                    return Vacation.findAll();
                }],
                maxBudget: ['vacations', 'Util', function (vacations, Util) {
                    return Util.getMaxBudget(vacations);
                }]
            },
            views: {
                'navigation': {
                    templateUrl: 'assets/templates/navigation.html',
                    controller: 'navigationControllerWithoutSelection'
                }
            }
        };


        var index_config = {
            url: '/index',
            views: {
                'content@': {
                    templateUrl: 'assets/templates/index.html',
                    controller: (function () {
                    })
                }
            }
        };

        var vacation_config = {
            url: '/vacation',
            views: {
                'content@': {
                    templateUrl: 'assets/templates/search_vacation.html',
                    controller: 'vacationSearchController',
                    controllerAs: 'vacCtrl'
                }
            }
        };

        var vacation_search_config = {
            url: '/search/{keywordStrings}',
            resolve: {
                selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                    var keywordsWithoutId = $stateParams.keywordStrings.split("+");

                    return Keyword.filter({
                        where: {
                            keyword: {
                                'in': keywordsWithoutId
                            }
                        }
                    });
                }]
            },
            views: {
                'navigation@': {
                    templateUrl: 'assets/templates/navigation.html',
                    controller: 'navigationControllerWithSelection'
                }
            }
        };


        var vacation_details_config = {
            url: '/details/{id}',
            resolve: {
                vacationWithoutUser: ['$stateParams', 'Vacation', function ($stateParams, Vacation) {
                    return Vacation.find($stateParams.id);
                }],
                vacation: ['vacationWithoutUser', 'Vacation', function (vacationWithoutUser, Vacation) {
                    return Vacation.loadRelations(vacationWithoutUser, ['creator']);
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/vacation_details.html',
                    controller: 'vacationDetailsController'
                }
            }
        };

        var vacation_details_edit_config = {
            url: '/edit/{id}',
            resolve: {
                vacationWithoutUser: ['$stateParams', 'Vacation', function ($stateParams, Vacation) {
                    return Vacation.find($stateParams.id);
                }],
                vacation: ['vacationWithoutUser', 'Vacation', function (vacationWithoutUser, Vacation) {
                    return Vacation.loadRelations(vacationWithoutUser, ['creator']);
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/vacation_edit.html',
                    controller: 'VacationEditController'
                }
            }
        };

        var vacation_details_add_activity_config = {
            url: '/add/{id}',
            resolve: {
                vacationWithoutUser: ['$stateParams', 'Vacation', function ($stateParams, Vacation) {
                    return Vacation.find($stateParams.id);
                }],
                vacation: ['vacationWithoutUser', 'Vacation', function (vacationWithoutUser, Vacation) {
                    return Vacation.loadRelations(vacationWithoutUser, ['creator']);
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/vacation_edit.html',
                    controller: 'VacationEditController'
                }
            }
        };

        var activity_config = {
            url: '/activity',
            resolve: {
                activities: ['Activity', function (Activity) {
                    return Activity.findAll();
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/search_activity.html',
                    controller: 'activitySearchController',
                    controllerAs: 'actCtrl'
                }
            }
        };

        var activity_search_config = {
            url: '/search/{keywordStrings}',
            resolve: {
                selectedKeywords: ['Keyword', '$stateParams', function (Keyword, $stateParams) {
                    var keywordsWithoutId = $stateParams.keywordStrings.split("+");

                    return Keyword.filter({
                        where: {
                            keyword: {
                                'in': keywordsWithoutId
                            }
                        }
                    });
                }]
            },
            views: {
                'navigation@': {
                    templateUrl: 'assets/templates/navigation.html',
                    controller: 'navigationControllerWithSelection'
                }
            }
        };

        var activity_details_config = {
            url: '/details/{id}',
            resolve: {
                activityWithoutUser: [ '$stateParams', 'Activity', function ($stateParams,Activity) {
                    return Activity.find($stateParams.id);
                 }],
                activity: ['Activity', 'activityWithoutUser', function (Activity, activityWithoutUser) {
                    return Activity.loadRelations(activityWithoutUser, ['creator']);
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/activity_details.html',
                    controller: 'activityDetailsController'
                }
            }
        };

        var register_config = {
            url: '/register',
            resolve: {
                roles: ['Role', function (Role) {
                    return Role.findAll();
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/registerUser.html',
                    controller: 'registerController'
                }
            }
        };


        var login_config = {
            url: '/login',
            resolve: {
                roles: ['User', function (User) {
                    return User.findAll();
                }]
            },
            views: {
                'content@': {
                    templateUrl: 'assets/templates/login.html',
                    controller: 'loginController'
                }
            }
        };

        $stateProvider.state('main', main_config);
        $stateProvider.state('main.index', index_config);
        $stateProvider.state('main.vacation', vacation_config);
        $stateProvider.state('main.vacation.search', vacation_search_config);
        $stateProvider.state('main.vacation.details', vacation_details_config);
        $stateProvider.state('main.vacation.edit', vacation_details_edit_config);
        $stateProvider.state('main.vacation.details.activity', activity_config);
        $stateProvider.state('main.activity.search', activity_search_config);
        $stateProvider.state('main.activity.details', activity_details_config);
        $stateProvider.state('main.register', register_config);
        $stateProvider.state('main.login', login_config);


        // Move to index page in any other case
        $urlRouterProvider.otherwise('/index');
    }]).run(
        ['Activity', 'Vacation', 'User', 'Role', 'Location', 'ActivityReview', 'VacationReview', 'VacationImage',
            'ActivityImage', 'Keyword', 'ActivityKeywordJoinTableEntry', 'VacationKeywordJoinTableEntry',
            function (Activity, Vacation, User, Role, Location, ActivityReview, VacationReview, VacationImage, ActivityImage,
                      Keyword, ActivityKeywordJoinTableEntry, VacationKeywordJoinTableEntry) {
                // Just loading all factories because otherwise we get resource undefined errors because of the defined relations.
            }]);
}());
