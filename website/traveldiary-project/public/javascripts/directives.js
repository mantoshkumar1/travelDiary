/**
 * Created by albert on 23.06.15.
 */


App.directive('vacationGridTile', function () {
    return  {
        restrict: 'E',
        templateUrl: 'assets/templates/vacation_grid_tile.html'
    };
});

App.directive('vacationGridList', function () {
    return  {
        restrict: 'E',
        templateUrl: 'assets/templates/vacation_grid_list.html'
    };
});

App.directive('activityGridTile', function () {
    return  {
        restrict: 'E',
        templateUrl: 'assets/templates/activity_grid_tile.html'
    };
});

App.directive('activityGridList', function () {
    return  {
        restrict: 'E',
        templateUrl: 'assets/templates/activity_grid_list.html'
    };
});