angular.module("myApp").service('empServices', function () {
    var empList = [{
                name: 'Vikram',
                age: 20,
                address:'Jath'
            }, {
                name: 'Kiran',
                age: 21,
                address: 'Jath'
            }
        ];
    var service = {
        getEmployee: fetchEmployee,
        saveEmployee: saveEmployee
    }
    return service;

    function fetchEmployee() {
        return empList;
    }
    function saveEmployee(emp) {
       empList.push(emp);
    }
});