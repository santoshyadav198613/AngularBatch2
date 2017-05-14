angular.module("myApp").controller("mainController", ["$scope", function ($scope) {
    $scope.message = "Hello World!";
    $scope.state = "Hide";
    $scope.isTableVisible = true;
    $scope.employeeInfo = {
        name: 'Test',
        address: 'Pune',
        age: 30
    };

    $scope.toggleTable = function (evt, toggle) {
        $scope.isTableVisible = !toggle;
        $scope.state = $scope.isTableVisible === true ? "Hide" : "Show";
    };

}]);