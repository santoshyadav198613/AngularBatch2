angular.module("myApp").controller("productcontroller", ["$scope", function ($scope) {
    
    // $scope.$on('toChild',function(data){
    //         console.log(data);
    // }); //To capture the event
    
    $scope.pageSize = [1,5,10];

    $scope.products = [{
        name: 'LED TV',
        description: '32 inch HD diaplay',
        price: 2000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }, {
        name: 'Refigerator',
        description: 'Refigerator double door',
        price: 4000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    },
     {
        name: 'Air Condition',
        description: '1.5 ton',
        price: 5000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }];

    $scope.addProduct = function (prod) {
        var product = prod;
        product.qty = 1;
        product.imagePath = 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg';
        $scope.products.push(product);
        $scope.product ={};
        $scope.productform.$setPristine()
        //$scope.$emit('message',prod); //Send event to parent controllers
    };
}]);