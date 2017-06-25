angular.module("myApp").service('loginservice', function () {
    var isLoggedIn = false;
    var service = {
        login: login,
        checkLogin: checkLogin
    }
    return service;

    function checkLogin() {
        return isLoggedIn;
    }
    function login(user) {
            isLoggedIn =true;
    }
});