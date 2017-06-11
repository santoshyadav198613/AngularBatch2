angular.module('myApp').controller('ordercontroller', ['$scope', 'customerservice', 'productservice',
    function ($scope, customerservice, productservice) {
        $scope.customers = customerservice.getCustomer();
        $scope.products = productservice.getProduct();

        $scope.saveOrder = function (order) {
            console.log(order);
        }
    }]);