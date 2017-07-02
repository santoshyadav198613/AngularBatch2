angular.module("myApp").service('loginservice', function ($q) {
    var isLoggedIn = false;
    var service = {
        login: login,
        checkLogin: checkLogin
    }
    return service;

    function checkLogin() {
        var deferred = $q.defer();
        console.log(deferred);
        if (isLoggedIn) {
            deferred.resolve('UserLoggedIn');
        }
        else {
            deferred.reject('Invlid User');
        }
        return deferred.promise;
    }
    function login(user) {
        isLoggedIn = true;
    }
});