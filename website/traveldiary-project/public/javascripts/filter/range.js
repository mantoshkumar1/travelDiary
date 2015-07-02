(function () {

    var App = angular.module("travelDiary");

// return Array to iterate over a given number
    App.filter('range', function () {
        return function (val, range) {
            range = parseInt(range);
            for (var i = 0; i < range; i++)
                val.push(i);
            return val;
        };
    });

}());