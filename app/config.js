angular.module('myApp').config(function ($stateProvider,$urlRouterProvider) {

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
    };

    var customerstate = {
        name: 'customer',
        url: '/customer',
        templateUrl: './app/views/customer.html',
        controller: 'customercontroller'
    };

  var orderstate = {
        name: 'order',
        url: '/order',
        templateUrl: './app/views/order.html',
        controller: 'ordercontroller'
    };

    $stateProvider.state(productstate);
    $stateProvider.state(homestate);
    $stateProvider.state(signupstate);
    $stateProvider.state(loginstate);
    $stateProvider.state(customerstate);
    $stateProvider.state(orderstate);
    
    $urlRouterProvider.otherwise('/login');

});