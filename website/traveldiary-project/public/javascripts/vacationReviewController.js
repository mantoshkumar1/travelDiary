/**
 * Created by albert on 02.07.15.
 */
(function () {

angular.module("travelDiary")
    .controller('VacationReviewController', [ '$scope','review','$mdDialog', function ($scope, review, $mdDialog) {

        $scope.review = review;

        $scope.ratings = [
            { value: 1, rating: "One Star"},
            { value: 2, rating: "Two Stars"},
            { value: 3, rating: "Three Stars"},
            { value: 4, rating: "Four Stars"},
            { value: 5, rating: "Five Stars"}
        ]

        console.log(review);

        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.submit = function(review) {
            review.date = Date.now();

            $mdDialog.hide(review);
        };

    }]);


})()