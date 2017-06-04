angular.module("myApp").controller("mainController", ["$scope", "testdata", "commonValue","commonConstant",
    function ($scope, testdata, commonValue,commonConstant) {
        var commonValue = commonValue;
        $scope.message = "Hello World!";
        $scope.state = "Hide";
        $scope.testdata = testdata;
        $scope.isTableVisible = true;
        $scope.employeeInfo = {
            name: 'Test',
            address: 'Pune',
            age: 30
        };

        $scope.toggleTable = function (evt, toggle) {
            // $scope.isTableVisible = !toggle;
            $scope.state = $scope.isTableVisible === true ? "Hide" : "Show";
            $scope.$broadcast('toChild', toggle); //Send event to child controllers
        };

        $scope.$on('message', function (data) {
            console.log(data);
        }); //To capture the event
    }]);