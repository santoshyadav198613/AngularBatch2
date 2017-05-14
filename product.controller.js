angular.module("myApp").controller("productcontroller",["$scope",function($scope){
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