angular.module('myApp').filter('inr', function () {
    return function (value, param1, param2) {
        return "Rs." + value;
    }
});