(function(){
    var App = angular.module('travelDiary', ['ui.router', 'js-data']);

    App.factory('Vacation', ['DS',function(DS){
        return DS.defineResource('vacation');
    }])

    App.config(['$stateProvider', 'DSProvider',function($stateProvider, DSProvider){

        DSProvider.defaults.basePath = '/api';

        var show_all_vacations_config = {
            url: '/show_all_vacations',
            templateUrl: 'assets/templates/search.html',
            resolve: {
                vacations: ['Vacation', function(Vacation){ return Vacation.findAll();}]
            }
            //controller: ['$scope', 'movies', '$state', function($scope, movies,$state){
            //    $scope.movies = movies;
            //
            //    $scope.showDetails = function(movie) {
            //        $state.go('show_all.details', {movieId : movie.id})
            //    }
            //}]
        };

        $stateProvider.state('show_all_vacations', add_new_config);
    }]);

    //App.filter('boolHuman', function(){
    //    return function(input) {
    //        return input ? 'Yes':'No';
    //    }
    //});

    //App.directive('editText', function(){
    //
    //    return {
    //        restrict: 'E',
    //        scope: {
    //            value : '='
    //        },
    //        require: 'value',
    //        controller: ['$scope', function($scope){
    //            $scope.editing = false;
    //            $scope.toggleEdit = function(save) {
    //                if (!$scope.editing) {
    //                    $scope.editing = true;
    //                } else {
    //                    if (save) {
    //                        $scope.$parent.update();
    //                    }
    //                    $scope.editing = false;
    //                }
    //            }
    //        }],
    //        templateUrl: 'assets/templates/edit_text.html'
    //    };
    //});
    //App.directive('editBool', function() {
    //    return {
    //        restrict: 'E',
    //        scope: {
    //            value: '='
    //        },
    //        require:'value',
    //        controller: ['$scope', function($scope){
    //            $scope.toggleValue = function(){
    //                $scope.value = !($scope.value);
    //                //seems to be a bug on js-data, needs a new run loop apparently
    //                window.setTimeout(function() { $scope.$parent.update();}, 1);
    //
    //            }
    //        }],
    //        templateUrl: 'assets/templates/edit_bool.html'
    //    };
    //});
})()