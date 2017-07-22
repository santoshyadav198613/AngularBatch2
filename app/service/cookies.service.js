angular.module("myApp").service('cookiesService', function ($cookies) {
    var service;

    service = {
        getCookie: getCookie,
        saveCookie: saveCookie,
        removeCookie: removeCookie,
        saveCookieObject: saveCookieObject,
        getCookieObject: getCookieObject
    }

    return service;

    function getCookie(key) {
        return $cookies.get(key);
    }

    function getCookieObject(key) {
        return $cookies.getObject(key);
    }

    function saveCookie(key, value) {
        return $cookies.put(key, value)
    }

    function saveCookieObject(key, value, options) {
        return $cookies.putObject(key, value, options)
    }

    function removeCookie(key) {
        return $cookies.remove(key);
    }

});