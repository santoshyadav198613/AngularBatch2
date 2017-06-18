angular.module("myApp").service('customerservice', function ($http) {
    var customer = [];
    var service =
        {
            getCustomer: getCustomer,
            saveCustomer: saveCustomer
        };

    return service;

    function getCustomer() {
        return $http.get('https://jsonplaceholder.typicode.com/users');
    }

    function saveCustomer(cust) {
        customer.push(cust);
    }

});