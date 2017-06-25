angular.module('myApp').controller('logincontroller', ['$scope', '$state', 'loginservice', function ($scope, $state, loginservice) {

    $scope.login = function (user) {
        console.log(user);
        loginservice.login(user);
        $state.go('product');
    }

}]);