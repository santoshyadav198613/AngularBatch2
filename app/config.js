angular.module('myApp').config(function ($stateProvider) {

    var productstate = {
        name: 'product',
        url: '/product',
        templateUrl: './app/views/product.html',
        controller: 'productcontroller'
    };

    var homestate = {
        name: 'home',
        url: '/home',
        templateUrl: './app/views/home.html',
        controller: 'mainController'
    };

    var signupstate = {
        name: 'signup',
        url: '/signup',
        templateUrl: './app/views/signup.html',
        controller: 'signupcontroller'
    };

    var loginstate = {
        name: 'login',
        url: '/login',
        templateUrl: './app/views/login.html',
        controller: 'logincontroller'
    }

    $stateProvider.state(productstate);
    $stateProvider.state(homestate);
    $stateProvider.state(signupstate);
    $stateProvider.state(loginstate);

});