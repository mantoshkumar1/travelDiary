/**
 * Created by mk on 29.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

App.service('Session', function () {
    this.create = function (user) {
        this.user = user;
    };
    this.destroy = function () {
        this.user = null;
    };
});

App.factory('AuthService', [ '$http', 'Session', function ($http, Session) {

    var authService = {
        login: login,
        isAuthenticated: isAuthenticated,
    };

    return authService;

    function login(credentials) {
        console.log(credentials);

        return $http
            .post('/api/login', credentials)
            .then(function (data) {
                var user = data.data;
                console.log("User logged in.");
                console.log(user);

                Session.create(user);
                return user;
            });
    };

    function isAuthenticated() {
        return !!Session.user;
    };
}]);

App.controller('loginController', ['$scope', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS', function($scope, $state, $rootScope, AuthService,AUTH_EVENTS){

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.userLogin = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            // Function defined in SessionController
            $scope.setCurrentUser(user);
            $state.go("main");
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.logout = function () {
        $http.post('api/logout', {}).success(function(data){
            $scope.wipeSession();

            $state.go('main.index');
        });
    }
}]);

}());