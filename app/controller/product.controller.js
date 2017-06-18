angular.module("myApp").controller("productcontroller", ["$scope", "$state", "productfactory", "productservice",
    function ($scope, $state, productfactory, productservice) {

        // $scope.$on('toChild',function(data){
        //         console.log(data);
        // }); //To capture the event
        var data = $state.current.data.pageSize;
        $scope.pageSize = [1, 5, 10];

        $scope.products = productservice.getProduct();
        $scope.addProduct = function (prod) {
            var product = prod;
            product.qty = 1;
            product.imagePath = 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg';
            productservice.saveProduct(product);
            $scope.product = {};
            $scope.productform.$setPristine()
            //$scope.$emit('message',prod); //Send event to parent controllers
        };
    }]);