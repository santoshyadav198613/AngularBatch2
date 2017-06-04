angular.module('myApp').controller('signupcontroller', ['$scope', function ($scope) {

    $scope.addUser = function (user) {
        console.log(user);
        $scope.user= {};
        $scope.signupForm.$setPristine();
        $scope.message="User Registration Successful";
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


}]);