angular.module('myApp').controller('customercontroller', ['$scope', 'customerservice',
    function ($scope, customerservice) {

        customerservice.getCustomer().then(function (res) {
            $scope.customers = res.data;
        });

        $scope.saveCustomer = function (cust) {
            customerservice.saveCustomer(cust);
            $scope.customer = {};
            $scope.customerForm.$setPristine()
        };

    }]);