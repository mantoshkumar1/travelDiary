/**
 * Created by albert on 23.06.15.
 */

App.directive('tdClick', function() {
    return {
        controller: function($scope) {}
    }
});

App.directive('vacationSrc', function() {
    return {
        controller: function($scope) {}
    }
});

App.directive('vacationsSrc', function() {
    return {
        controller: function($scope) {}
    }
});


App.directive('activitySrc', function() {
    return {
        controller: function($scope) {}
    }
});

App.directive('activitiesSrc', function() {
    return {
        controller: function($scope) {}
    }
});

/*
 * DOM Element vacation-grid-tile. Specify vacation-src as the vacation to display.
 *
 * Example: <vacation-grid-tile vacation-src="myVacation"></ vacation-grid-tile>
 * */
App.directive('vacationGridTile', function () {
    return  {
        restrict: 'E',
        require: '^vacationSrc',
        templateUrl: 'assets/templates/vacation_grid_tile.html',
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
    return  {
        restrict: 'E',
        require: ["^vacationsSrc"],
        templateUrl: 'assets/templates/vacation_grid_list.html',
        scope: {
            vacations: "=vacationsSrc",
            clickAction: "=tdClick"
        }
    };
});

/*
 * DOM Element activity-grid-tile. Specify activity-src as the source activitiy to display.
 *
 * Example: <activity-grid-tile activitiy-src="vacations"></activity-grid-tile>
 * */
App.directive('activityGridTile', function () {
    return  {
        restrict: 'E',
        require: "^activitySrc",
        templateUrl: 'assets/templates/activity_grid_tile.html',
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
    return  {
        restrict: 'E',
        require: "^activitiesSrc",
        templateUrl: 'assets/templates/activity_grid_list.html',
        scope: {
            activities: "=activitiesSrc",
            clickAction: "=tdClick"
        }
    };
});