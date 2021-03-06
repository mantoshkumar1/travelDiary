/**
 * Created by albert on 01.07.15.
 */

(function() {
angular.module('travelDiary')
    .controller('SessionController', [ '$scope', 'AuthService','$sessionStorage',
        function($scope, AuthService, $sessionStorage,SearchService) {

            $scope.currentUser = $sessionStorage.currentUser || null;
            $scope.isAuthorized = AuthService.isAuthorized;

            $scope.toogleSearchDetails = function () {
                $scope.showSearchDetails = !$scope.showSearchDetails;
            };

            $scope.setCurrentUser = function (user) {
                console.log("Setting user");
                console.log(user);
                $sessionStorage.currentUser = user;
                $scope.currentUser = user;
            };

            $scope.wipeSession = function () {
                $scope.currentUser = null;
            };
    }]);
})();
