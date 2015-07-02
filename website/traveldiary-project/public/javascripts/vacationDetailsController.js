(function () {

    var App = angular.module("travelDiary");

    App.controller('vacationDetailsController',
        ['$scope', '$state', '$location', 'anchorSmoothScroll', 'vacation', 'Vacation', 'VacationReview','$mdDialog',
        function ($scope, $state, $location, anchorSmoothScroll, vacation, Vacation, VacationReview,$mdDialog) {
        $scope.vacation = vacation;
        $scope.creator = false;

        imagePath = "assets/images/1.jpg";
        imagePath2 = "assets/images/2.jpg";
        $scope.images = [imagePath, imagePath2];
        console.log($scope.vacation);


        $scope.createVacation = function () {
            //TODO identify current User
            console.log("create Vacation");
            $scope.creator = true;
            //$scope.vacation.user = user;

            $scope.newVacation = Vacation.createInstance();
            $scope.newVacation.name = "Test";
            $scope.newVacation.description = $scope.vacation.description;
            $scope.newVacation.creator = $scope.vacation.creator;
            $scope.newVacation.activities = [];
            $scope.newVacation.budget = $scope.vacation.budget;
            $scope.newVacation.location = $scope.vacation.location;
            $scope.newVacation.startDate = $scope.vacation.startDate;
            $scope.newVacation.endDate = $scope.vacation.endDate;
            $scope.newVacation.keywords = $scope.vacation.keywords;
            $scope.newVacation.reviews = $scope.vacation.reviews;

            $scope.newVacation.DSCreate().then(function () {
                $scope.vacation = $scope.newVacation;
                $scope.success = true;
            });
            console.log("created Vacation");
            console.log($scope.vacation);

        };

        $scope.deleteVacation = function () {
            $scope.creator = false;
        };

        $scope.scrollToElement = function (eID) {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash(eID);
            anchorSmoothScroll.scrollTo(eID);
        };


        $scope.openEnd = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedEnd = true;
        };

        $scope.openStart = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedStart = true;
        };

        $scope.budgetList = [];
        $scope.budget = "";
        $scope.budgetTitle = "";
        $scope.addBudget = function(){
            $scope.budgetList.push({'budget': $scope.budget, 'title': $scope.budgetTitle});
            $scope.budget = "";
            $scope.budgetTitle = "";
        };

        $scope.removeBudget = function(index) {
            console.log(index);
            $scope.budgetList.splice(index, 1);
        };


        $scope.currentUserReview = getReviewForUser($scope.vacation.reviews, $scope.currentUser)



        $scope.showReviewDialog = function (user, review, vacation) {

            var hasReview = review !== null;


            $mdDialog.show( {
                parent: angular.element(document.body),
                locals: {
                    review: {
                        title: hasReview ? review.title : '',
                        description: hasReview ? review.description : '',
                        rating: hasReview ? review.rating : ''
                    }
                },
                templateUrl: 'assets/templates/dialogs/review_dialog.html',
                controller: 'VacationReviewController'
            }).then( function (newReview) {

                console.log(newReview)



                if (hasReview) {
                    newReview.userId = user.id;
                    newReview.vacationId = vacation.id;
                    VacationReview.update(review.id, newReview);

                } else {
                    var reviewToInsert = VacationReview.createInstance();

                    reviewToInsert.title = newReview.title;
                    reviewToInsert.description = newReview.description;
                    reviewToInsert.rating = newReview.rating;
                    reviewToInsert.date = newReview.date;
                    reviewToInsert.userId = user.id;
                    reviewToInsert.vacationId = vacation.id;
                    reviewToInsert.DSCreate().then(function (review) {

                        $state.reload();
                    });

                }
            });


        };

        $scope.deleteReview = function (review) {
            VacationReview.destroy(review.id);

            $state.reload();
        };

        function getReviewForUser (reviews,user) {
                if (reviews && user) {
                    for (i = 0; i < reviews.length; i++) {
                        if (reviews[i].userId === user.id) {
                            return reviews[i];
                        }
                    }
                }

                return null;
            }

    }]);

    App.filter('range', function () {
        return function (val, range) {
            range = parseInt(range);
            for (var i = 0; i < range; i++)
                val.push(i);
            return val;
        };

    });

    App.service('anchorSmoothScroll', function () {
        this.scrollTo = function (eID) {

            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            stopY = stopY - 52;

            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                console.log("scroll");
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            leapY = leapY - 52;
            var timer = 0;
            if (stopY > startY) {
                for (var i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (var i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }

        };

    });

}());