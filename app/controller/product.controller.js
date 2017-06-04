angular.module("myApp").controller("productcontroller", ["$scope","productfactory","productservice",
 function ($scope,productfactory,productservice) {
    
    // $scope.$on('toChild',function(data){
    //         console.log(data);
    // }); //To capture the event
    
    $scope.pageSize = [1,5,10];

    $scope.products = productservice.getProduct();
    $scope.addProduct = function (prod) {
        var product = prod;
        product.qty = 1;
        product.imagePath = 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg';
        productservice.saveProduct(product);
        $scope.product ={};
        $scope.productform.$setPristine()
        //$scope.$emit('message',prod); //Send event to parent controllers
    };
}]);