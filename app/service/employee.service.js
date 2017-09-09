angular.module("myApp").service('empServices', ['$http', 'apiEndPoint', function ($http, apiEndPoint) {

    var apiEndPoint = apiEndPoint;
    // var empList = [{
    //             name: 'Vikram',
    //             age: 20,
    //             address:'Jath'
    //         }, {
    //             name: 'Kiran',
    //             age: 21,
    //             address: 'Jath'
    //         }
    //     ];
    var service = {
        getEmployee: fetchEmployee,
        saveEmployee: saveEmployee
        // getEmployeeById: fetchEmployeeById
    }
    return service;

    // function fetchEmployee() {
    //     return empList;
    // }
    // function saveEmployee(emp) {
    //    empList.push(emp);
    // }

    function fetchEmployee() {
        return $http.get(apiEndPoint + 'api/employee');
    }

    // function fetchEmployeeById(id) {
    //     return $http.get(apiEndPoint + 'api/employee/' + id);
    // }

    function saveEmployee(emp) {
        return $http.post(apiEndPoint + 'api/employee', emp);
    }
}]);