/**
 * Created by albert on 02.07.15.
 */

(function () {

    angular
        .module('travelDiary')
        .service('ReviewDialogService', ['$mdDialog','VacationReview','ActivityReview', ReviewDialogService])

    function ReviewDialogService ($mdDialog, VacationReview, ActivityReview) {

        this.getReviewForUser = getReviewForUser;
        this.showActivityReviewCreateDialog = showActivityReviewCreateDialog;
        this.showActivityReviewEditDialog = showActivityReviewEditDialog;
        this.showVacationReviewCreateDialog = showVacationReviewCreateDialog;
        this.showVacationReviewEditDialog =  showVacationReviewEditDialog;

        function getReviewForUser(reviews, user) {
            if (reviews && user) {
                for (i = 0; i < reviews.length; i++) {
                    if (reviews[i].userId === user.id) {
                        return reviews[i];
                    }
                }
            }

            return null;
        }

        function showActivityReviewCreateDialog(user, activity) {
            var newReview = ActivityReview.createInstance();

            return showDialog(newReview).then(function (review) {
                review.userId = user.id;
                review.activityId = activity.id;

                return review.DSCreate().then(function (reviewWithoutUser) {
                    return ActivityReview.loadRelations(reviewWithoutUser, ['user']);
                });
            });
        }

        function showActivityReviewEditDialog(user, activity, review) {
            var reviewEditCopy = angular.copy(review);

            return showDialog(reviewEditCopy).then(function (review) {
                review.userId = user.id;
                review.activityId = activity.id;

                return ActivityReview.update(review.id, review);
            });
        }

        function showVacationReviewCreateDialog (user, vacation) {
            var newReview = VacationReview.createInstance();

            return showDialog(newReview).then(function (review) {
                review.userId = user.id;
                review.vacationId = vacation.id;

                return review.DSCreate().then( function (reviewWithoutUser) {
                    return VacationReview.loadRelations(reviewWithoutUser, ['user']);
                });
            });
        }

        function showVacationReviewEditDialog (user, vacation, review) {
            var reviewEditCopy = angular.copy(review);

            return showDialog(reviewEditCopy).then(function (review) {
                review.userId = user.id;
                review.vacationId = vacation.id;

                return VacationReview.update(review.id, review);
            });
        }

        function showDialog(review) {
            return $mdDialog.show({
                parent: angular.element(document.body),
                locals: {
                    review: review
                },
                templateUrl: 'assets/templates/dialogs/review_dialog.html',
                controller: 'ReviewDialogController',
                controllerAs: 'revCtrl'
            });
        }
    }
}());