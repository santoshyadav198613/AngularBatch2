angular.module("myApp").controller("myEmployeeController", ["$scope", "empServices", "toastr",

    function ($scope, empServices, toastr) {

        var isSuccess = false;
        var isError = false;

        function init() {
            empServices.getEmployee().then(function (res) {
                console.log(res);
                $scope.empList = res.data;
            }).catch(function (err) {
                console.log(err);
            });
        }

        init();

        $scope.addEmployee = function (emp) {
            empServices.saveEmployee(emp).then(function (res) {
                toastr.success('Employee Added Successfuly!');
                init();
            }).catch(function (err) {
                $scope.isError = true;
            });
            // $scope.employeen = {};
            // $scope.employeeform.$setPristine()
        };

        // $scope.empList = empServices.getEmployee();

        // $scope.addEmployee = function (emp) {
        //     var employee = emp;

        //     empServices.saveEmployee(employee)
        // };
    }
]);