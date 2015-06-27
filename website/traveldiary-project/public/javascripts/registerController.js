App.controller('registerController', ['$scope', '$state', 'User', 'Location', 'roles', function($scope, $state, User, Location, roles){
    // Form submit handler.

    var role = roles[0];

    $scope.success = false;

    $scope.save = function () {

        $scope.user = User.createInstance();

        $scope.user.role = role;

        $scope.user.username = "hello";
        $scope.user.firstName = "hello";
        $scope.user.lastName = "hello";
        $scope.user.email = "test@test.com";
        $scope.user.passwordHash = "asdfadfasdfasdfasdf";

        $scope.user.location = Location.createInstance();
        $scope.user.location.name = "Testplace";
        $scope.user.location.description = "Description";
        $scope.user.location.longitude = 12.0;
        $scope.user.location.latitude = 12.0;
        $scope.user.location.address = "SomeAddress";
        $scope.user.location.googleMapsLink = "www.googlemaps.de";

        $scope.save = function () {
            $scope.user.location.DSCreate().then( function () {
                $scope.user = User.createInstance();

                $scope.succes = true;
            });

        //$scope.save = function () {
        //    $scope.user.DSCreate().then(function () {
        //        $scope.user = User.createInstance();
        //        // Trigger validation flag.
        //        $scope.success = true;
        //    });
            //$state.go('main.vacation');
        }
    };
}]);

