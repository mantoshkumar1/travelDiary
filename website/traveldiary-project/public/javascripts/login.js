/**
 * Created by mk on 29.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.controller('loginController', ['$scope', '$state', 'User', '$http', function($scope, $state, User, $http){

    $scope.login = function () {
        $http.post('api/login', {email:$scope.email,passwordHash: $scope.passwordHash}).success(function(data){
            //take care of promise
        });
        //after login successful go here
        //$state.go('main.index');
    }

    $scope.logout = function () {
        $http.post('api/logout', {}).success(function(data){
            //take care of promise
        });
        //after logout successful go here
        $state.go('main.index');
    }
}]);

}());