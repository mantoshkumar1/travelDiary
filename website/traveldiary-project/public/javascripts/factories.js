/**
 * Created by albert on 02.07.15.
 */
(function () {

var App = angular.module('travelDiary');

App.factory('Keyword', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'keyword'
        });
}]);

App.factory('ActivityImage', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'activityimage'
        });
}]);

App.factory('VacationImage', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'vacationimage'
        });
}]);

App.factory('Location', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'location'
        });
}]);

App.factory('ActivityReview', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'activityreview',
            relations: {
                belongsTo: {
                    user: {
                        localField: "user",
                        localKey: "userId"
                    },
                    activity: {
                        localField: "activity",
                        localKey: "activityId"
                    }
                }
            }
        });
}]);

App.factory('VacationReview', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'vacationreview',
            relations: {
                belongsTo: {
                    user: {
                        localField: "user",
                        localKey: "userId"
                    },
                    vacation: {
                        localField: "vacation",
                        localKey: "vacationId"
                    }
                }
            }
        });
}]);

App.factory('Role', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'role'
        });
}]);


App.factory('User', ['DS', function (DS) {
    return DS.defineResource(
        {
            name: 'user',
            relations: {
                belongsTo: {
                    role: {
                        localField: "role",
                        localKey: "roleId"
                    }
                    ,
                    location: {
                        localField: "location",
                        localKey: "locationId"
                    }
                },
                hasMany: {
                    vacation: {
                        localField: "createdVacations",
                        foreignKey: "creatorId"
                    },
                    activity: {
                        localField: "createdActivities",
                        foreignKey: "creatorId"
                    }
                }
            }
        });
}]);

App.factory('Vacation', ['DS', function (DS) {
    return DS.defineResource({
        name: 'vacation',
        relations: {
            belongsTo: {
                user: {
                    localField: "creator",
                    localKey: "creatorId"
                },
                location: {
                    localField: "location",
                    localKey: "locationId"
                }
            },
            hasMany: {
                vacationreview: {
                    localField: "reviews",
                    foreignKey: "vacationId"
                },
                vacationimage: {
                    localField: "images",
                    foreignKey: "vacationId"
                }
            }
        },
        computed: {
            rating: ['reviews', function (reviews) {
                var rating = 0.0;
                if (reviews != undefined && reviews.length > 0) {
                    reviews.forEach(function (review) {
                        rating += review.rating;
                    });

                    rating = rating / reviews.length;
                }

                return Math.round(rating);
            }]
        }
    });
}]);

App.factory('Activity', ['DS', function (DS) {
    return DS.defineResource({
        name: 'activity',
        relations: {
            belongsTo: {
                user: {
                    localField: "creator",
                    localKey: "creatorId"
                },
                location: {
                    localField: "location",
                    localKey: "locationId"
                }
            },
            hasMany: {
                activityreview: {
                    localField: "reviews",
                    foreignKey: "activityId"
                }
                ,
                activityimage: {
                    localField: "images",
                    foreignKey: "vacationId"
                }
            }
        },
        computed: {
            rating: ['reviews', function (reviews) {
                var rating = 0.0;

                if (reviews.length > 0) {
                    reviews.forEach(function (review) {
                        rating += review.rating.value;
                    });

                    rating = rating / reviews.length;
                }

                return rating;
            }]
        }
    });
}]);

}());