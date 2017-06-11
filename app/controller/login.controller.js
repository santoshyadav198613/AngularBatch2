angular.module('myApp').controller('logincontroller', ['$scope', function ($scope) {

    $scope.login = function (user) {
            console.log(user);
    }

}]);