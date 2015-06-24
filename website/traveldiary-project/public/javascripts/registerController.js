App.controller('registerController', ['$scope', 'User', function($scope, User){

    // Form submit handler.
    $scope.save = function() {

        $scope.user = User.createInstance();

        $scope.success = false;

        $scope.save = function() {
            $scope.user.DSCreate().then(function(){
                $scope.user = User.createInstance();
                // Trigger validation flag.
                $scope.success = true;
            })
        }
    };
}]);

