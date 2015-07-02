/**
 * Created by albert on 02.07.15.
 */
(function() {

angular.module("travelDiary")
    .controller('activityDetailsController', ['$scope', '$state', 'SearchService', 'activity','SearchService',
        function ($scope, $state, SearchService, activity, SearchService) {
            console.log(activity);

        }
    ]);

}());

