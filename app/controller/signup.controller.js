angular.module('myApp').controller('signupcontroller', ['$scope', '$state', function ($scope, $state) {

    $scope.addUser = function (user) {
        console.log(user);
        $scope.user = {};
        $scope.signupForm.$setPristine();
        $scope.message = "User Registration Successful";
    }

    $scope.isPasswordValid = function () {
        if ($scope.user === undefined) {
            return true;
        }
        else if ($scope.user.password !== $scope.user.confirmpassword) {
            return true;
        }
        else {
            return false;
        }
    }

    $scope.gotoLogin = function () {
        $state.go('productdescription', { id: 1 }); //with params
       // $state.go('login'); // without params
    }


}]);