/**
 * Created by albert on 04.07.15.
 */


(function() {

    angular.module("travelDiary")
        .service('VacationService', [ 'Vacation', VacationService ]);

    function VacationService(Vacation) {

        this.createVacation = createVacation;

        /*
        * @param Expects a vacation created with Vacation.createInstance()
        * @return Promise for the inserted vacation
        * */
        function createVacation(vacation) {
            // Store activites field. Will be needed later but for creation of vacations we need the
            // vacation.activites field to be empty
            var savedActivities = vacation.activities;

            vacation.activities = [];

            return vacation.DSCreate().then( function (vacation) {
                vacation.activities = savedActivities;

                return Vacation.update(vacation.id, vacation);
            });
        }
    }

})()