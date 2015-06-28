(function() {

var App = angular.module('travelDiary', ['ui.router', 'js-data', 'ui.bootstrap', 'angular.filter', 'ngMaterial']);

App.factory('VacationKeywordJoinTableEntry', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'vacationkeyword'
        });
}]);

App.factory('ActivityKeywordJoinTableEntry', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'activitykeyword'
        });
}]);


App.factory('Keyword', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'keyword'
        });
}]);

App.factory('ActivityImage', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'activityimage'
        });
}]);

App.factory('VacationImage', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'vacationimage'
        });
}]);

App.factory('Location', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'location'
        });
}]);

App.factory('ActivityReview', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'activityreview'
        });
}]);

App.factory('VacationReview', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'vacationreview'
        });
}]);

App.factory('Role', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'role'
        });
}]);


App.factory('User', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'user',
            relations: {
                hasOne: [{
                    role: {
                        localField: "role",
                        foreignKey: "roleId"
                    }
                }, {
                    location: {
                        localField: "location",
                        foreignKey: "locationId"
                    }
                }],
                hasMany: [{
                    vacation: {
                        localField: "createdVacations",
                        foreignKey: "creatorId"
                    }
                }, {
                    activity: {
                        localField: "createdActivities",
                        foreignKey: "creatorId"
                    }
                }]
            }
        });
}]);

App.factory('Vacation', ['DS', function (DS) {
    return DS.defineResource({
        name: 'vacation',
        relations: {
            hasOne: [{
                user: {
                    localField: "creator",
                    foreignKey: "creatorId"
                }
            }, {
                location: {
                    localField: "location",
                    foreignKey: "locationId"
                }
            }],
            hasMany: [{
                vacationreview: {
                    localField: "reviews",
                    foreignKey: "vacationId"
                }
            }, {
                images: {
                    localField: "images",
                    foreignKey: "vacationId"
                }
            }]
        },
        computed: {
            rating: ['reviews', function (reviews) {
                var rating = 0.0;

                reviews.forEach(function (review) {
                    rating += review.rating.value;
                });

                if (reviews.length > 0) {
                    rating = rating / reviews.length;
                }

                return rating;
            }]
        }
    });
}]);

App.factory('Activity', ['DS', function (DS) {
    return DS.defineResource({
        name: 'activity',
        relations: {
            hasOne: {
                user: {
                    localField: "creator",
                    foreignKey: "creatorId"
                }
            },
            hasMany: [{
                activityreview: {
                    localField: "reviews",
                    foreignKey: "activityId"
                }
            }, {
                images: {
                    localField: "images",
                    foreignKey: "vacationId"
                }
            }]
        },
        computed: {
            rating: ['reviews', function (reviews) {
                var rating = 0.0;

                reviews.forEach(function (review) {
                    rating += review.rating.value;
                });

                if (reviews.length > 0) {
                    rating = rating / reviews.length;
                }

                return rating;
            }]
        }
    });
}]);

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
        resolve: {
            vacations: ['Vacation', function (Vacation) {
                return Vacation.findAll();
            }]
        },
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

                console.log(keywordsWithoutId);

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
        url: '/details',
        views: {
            'content@': {
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

    $stateProvider.state('main', main_config);
    $stateProvider.state('main.index', index_config);
    $stateProvider.state('main.vacation', vacation_config);
    $stateProvider.state('main.vacation.search', vacation_search_config);
    $stateProvider.state('main.vacation.details', vacation_details_config);
    $stateProvider.state('main.register', register_config);


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
