angular.module('myApp').controller('ordercontroller', ['$scope', '$state', 'customerservice', 'productservice',
    function ($scope, $state, customerservice, productservice) {
        $scope.customers = customerservice.getCustomer();
        $scope.products = productservice.getProduct();

        $scope.saveOrder = function (order) {
            console.log(order);
        }
    }]);