angular.module("myApp").service('customerservice', function () {
    var customer = [];
    var service =
        {
            getCustomer: getCustomer,
            saveCustomer: saveCustomer
        };

    return service;

    function getCustomer() {
        return customer;
    }

    function saveCustomer(cust) {
        customer.push(cust);
    }

});