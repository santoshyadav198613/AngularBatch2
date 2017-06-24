angular.module("myApp").service('employeeservice', function ($http) {
    var employee = [];
    var service =
        {
            getEmployee: getEmployee,
            saveEmployee: saveEmployee
        };

    return service;

    function getEmploye() {
        return $http.get('https://jsonplaceholder.typicode.com/users');
    }

    function saveEmployee(emp) {
        employee.push(emp);
    }

});