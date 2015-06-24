App.controller('registerController', ['$scope', function($scope){

    // Form submit handler.
    $scope.submit = function(form) {
        // Trigger validation flag.
        $scope.submitted = true;

        // If form is invalid, return and let AngularJS show validation errors.
        if (form.$invalid) {
            return;
        }

        // Default values for the request.
        var config = {
            params : {
                'callback' : 'JSON_CALLBACK',
                'username' : $scope.username,
                'email' : $scope.email,
                'firstName' : $scope.firstName,
                'lastName' : $scope.lastName,
                'passwordHash' : $scope.passwordHash
            },
        };
    };
}]);

