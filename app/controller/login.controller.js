angular.module('myApp').controller('logincontroller', ['$scope', '$state',
 '$rootScope', 'loginservice', function ($scope, $state, $rootScope, loginservice) {

        $scope.login = function (user) {
            console.log(user);
            loginservice.login(user);
            $rootScope.isLoggedin = true;
            $state.go('default');
        }

    }]);