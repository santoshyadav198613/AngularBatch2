angular.module("myApp").controller("mainController", ["$scope", function ($scope) {
    $scope.message = "Hello World!";
    $scope.state = "Show";
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

    $scope.products = [{
        name: 'LED TV',
        description: '32 inch HD diaplay',
        price: 2000,
        imagePath : 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }, {
        name: 'Refigerator',
        description: 'Refigerator double door',
        price: 4000,
        imagePath : 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }];
}]);