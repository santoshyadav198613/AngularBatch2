angular.module('myApp').controller('logincontoller', ['$scope', function ($scope) {

    $scope.login = function (user) {
            console.log(user);
    }

}]);