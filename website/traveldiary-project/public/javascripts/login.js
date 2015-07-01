/**
 * Created by mk on 29.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.controller('loginController', ['$scope', '$state', 'User', '$http', function($scope, $state, User, $http){

    $scope.login = function () {
        $http.post('api/login', {email:$scope.email,pass: $scope.pass}).success(function(data){
            //take care of promise
        });
        //after login successful go here
        $state.go('main.index');
    }
}]);

}());