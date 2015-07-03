/**
 * Created by albert on 02.07.15.
 */
(function () {

angular.module("travelDiary")
    .controller('ReviewDialogController', [ 'review','$mdDialog', ReviewController ]);

    function ReviewController(review, $mdDialog) {

        var vm = this;

        console.log(review);

        vm.review = review;
        vm.ratings = [
            {value: 1, rating: "One Star"},
            {value: 2, rating: "Two Stars"},
            {value: 3, rating: "Three Stars"},
            {value: 4, rating: "Four Stars"},
            {value: 5, rating: "Five Stars"}
        ];

        vm.cancel = cancel;
        vm.submit = submit;

        function cancel() {
            $mdDialog.cancel("Dialog Canceld");
        };

        function submit(review) {
            review.date = Date.now();

            $mdDialog.hide(review);
        };

    }
})()