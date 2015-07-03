/**
 * Created by albert on 23.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.directive('tdClick', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('tdFilter', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('vacationSrc', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('vacationsSrc', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});


App.directive('activitySrc', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('keywordSrc', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('tdOnClick', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('tdButtonIcon', function () {
    return {
        restrict: 'C',
        controller: function ($scope) {
        }
    }
});

App.directive('keywordChip', function () {
    return {
        restrict: 'E',
        require: '^keywordSrc',
        templateUrl: 'assets/templates/elements/chip_template.html',
        scope: {
            keyword: "=keywordSrc",
            onClick: "=tdOnClick"
        },
        controller: ['$scope', '$attrs', function ($scope, $attrs) {
            if ($attrs.tdOnClick === undefined) {
                $scope.hasOnClick = false;
            } else {
                $scope.hasOnClick = true;
            }

            if ($attrs.tdButtonIcon === undefined) {
                $scope.hasIcon = false;
                $scope.icon = undefined;
            } else {
                $scope.hasIcon = true;
                $scope.icon = $attrs.tdButtonIcon;
            }
        }]
    };
});

/*
 * DOM Element vacation-grid-tile. Specify vacation-src as the vacation to display.
 *
 * Example: <vacation-grid-tile vacation-src="myVacation"></ vacation-grid-tile>
 * */
App.directive('vacationGridTile', function () {
    return {
        restrict: 'E',
        require: '^vacationSrc',
        templateUrl: 'assets/templates/elements/vacation_grid_tile.html',
        scope: {
            vacation: "=vacationSrc"
        }
    };
});

/*
 * DOM Element vacation-grid-list. Specify vacations-src as the list of source vacations to display.
 *
 * Example: <vacation-grid-list vacations-src="myVacations"></vacation-grid-list>
 * */
App.directive('vacationGridList', function () {
    return {
        restrict: 'E',
        require: ["^vacationsSrc"],
        templateUrl: 'assets/templates/elements/vacation_grid_list.html',
        scope: {
            vacations: "=vacationsSrc",
            clickAction: "=tdClick",
            tdFilter: '=tdFilter'
        }
    };
});

/*
 * DOM Element activity-grid-tile. Specify activity-src as the source activitiy to display.
 *
 * Example: <activity-grid-tile activitiy-src="vacations"></activity-grid-tile>
 * */
App.directive('activityGridTile', function () {
    return {
        restrict: 'E',
        require: "^activitySrc",
        templateUrl: 'assets/templates/elements/activity_grid_tile.html',
        scope: {
            activity: "=activitySrc"
        }
    };
});

/*
 * DOM Element activity-grid-list. Specify activities-src as the list of source activities to display.
 * To specify the click behavior pass a function to td-click which takes one activity as an argument.
 *
 * Example: <activity-grid-list activities-src="myActivities"></activity-grid-list>
 * */
App.directive('activityGridList', function () {
    return {
        restrict: 'E',
        require: "^activitiesSrc",
        templateUrl: 'assets/templates/elements/activity_grid_list.html',
        scope: {
            activities: "=activitiesSrc",
            clickAction: "=tdClick",
            tdFilter: '=tdFilter'
        }
    };
});

App.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

App.directive('fixedNav', function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function (event) {
            var window_top = $(window).scrollTop();
            var div_top = document.getElementById('sticky').offsetTop;
            if (window_top > div_top) {
                element.addClass('stick');
            } else {
                element.removeClass('stick');
            }
        })
    };
});

App.directive('searchBarFix', function () {
        return {
            restrict: 'C',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    post: function compile(tElement, tAttrs, transclude) {
                        var searchInput = angular.element('[input]');
                        var controller = searchInput.controller();

                        console.log(searchInput);

                    }
                }
            }
        }
    }
);
}());
