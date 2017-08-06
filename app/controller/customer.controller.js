angular.module('myApp').controller('customercontroller', ['$scope', 'customerservice',
    function ($scope, customerservice) {
    $scope.total= 1;
    $scope.isEdit = true;
        $scope.parentData = {};
        $scope.masterData = {};
        customerservice.getCustomer().then(function (res) {
            $scope.customers = res.data;
        });

        $scope.saveCustomer = function (cust) {
            customerservice.saveCustomer(cust);
            angular.copy($scope.customer, $scope.parentData);
            var isArray = angular.isArray($scope.customer);
            angular.extend($scope.masterData, $scope.parentData);
            var data = angular.toJson($scope.masterData);
            console.log(data);
            var newData = angular.fromJson(data);
            $scope.customer = {};

            $scope.customerForm.$setPristine()
        };

        $scope.checkName = function (name) {
            console.log(name);
        }

        $scope.copyEvent = function () {
            console.log('copy event is fired');
        }

        $scope.addNumber = function()
        {
            $scope.total += $scope.total;
        }

    }]);