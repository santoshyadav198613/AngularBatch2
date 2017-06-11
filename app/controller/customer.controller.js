angular.module('myApp').controller('customercontroller', ['$scope', 'customerservice',
    function ($scope, customerservice) {

        $scope.saveCustomer = function (cust) {
            customerservice.saveCustomer(cust);
            $scope.customer = {};
            $scope.customerForm.$setPristine()
        };

    }]);