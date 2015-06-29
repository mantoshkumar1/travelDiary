App.controller('registerController', ['$scope', '$state', 'User', 'Location', 'roles', function($scope, $state, User, Location, roles){
    // Form submit handler.

    var role = roles[0];

    $scope.success = false;
    $scope.user = User.createInstance();

    $scope.save = function () {

        $scope.user.role = role;


        $scope.user.location = Location.createInstance();
        $scope.user.location.name = "Testplace";
        $scope.user.location.description = "Description";
        $scope.user.location.longitude = 12.0;
        $scope.user.location.latitude = 12.0;
        $scope.user.location.address = "SomeAddress";
        $scope.user.location.googleMapsLink = "www.googlemaps.de";


            $scope.user.location.DSCreate().then( function () {
                $scope.user.DSCreate().then(function() {
                    $scope.user = User.createInstance();
                    $scope.success = true;
                })
            });
    };
}]);

