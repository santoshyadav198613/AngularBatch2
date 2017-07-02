angular.module('myApp').controller('startupcontroller', ['$scope', '$state', '$rootScope',
    'loginservice',
    function ($scope, $state, $rootScope, loginservice) {
        $scope.isLoggedIn = $rootScope.isLoggedin;
    }]);