(function() {

var App = angular.module("travelDiary");

App.controller('vacationDetailsController', ['$scope', 'vacations', 'vacationId', function ($scope, vacations, vacationId) {
    $scope.vacations = vacations;
    $scope.vacation = vacations[vacationId-1];
    imagePath = "assets/images/1.jpg";
    imagePath2 = "assets/images/2.jpg";
    $scope.images = [imagePath, imagePath2];
    console.log($scope.vacation);


    $scope.createVacation = function(){
        //TODO add user
        //$scope.vacation.user = user;
        var newVac = {
          name: $scope.vacation.name,
          description: $scope.vacation.description,
          creator: $scope.vacation.creator,
          activities: $scope.vacation.activities,
          budget: $scope.vacation.budget,
          location: $scope.vacation.location
        };
        $scope.vacation.DSCreate().then(function(){
            $scope.vacation = Vacation.createInstance(newVac);
            console.log("created Vacation");
            console.log($scope.vacation);
        })
    };

    //TODO
    $scope.isCreator = function(){
        return true;
    };
}]);

App.filter('range', function() {
    return function(val, range) {
        range = parseInt(range);
        for (var i=0; i<range; i++)
            val.push(i);
        return val;
    };
});

}());