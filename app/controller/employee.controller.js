angular.module("myApp").controller("myEmployeeController", ["$scope","empServices", function ($scope,empServices) {

    $scope.empList = empServices.getEmployee();

    $scope.addEmployee= function(emp){
        var employee=emp;
        
       empServices.saveEmployee(employee)
    };
}]);