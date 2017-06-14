angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {

    var productstate = {
        name: 'product',
        url: '/product',
        templateUrl: './app/views/product.html',
        controller: 'productcontroller'
    };

    // var teststate = {
    //     name: 'test',
    //     url: '/test',
    //     templateUrl: './app/views/test.html',
    //     views: {
    //         'orders': {
    //             templateUrl: './app/views/order.html'
    //         },
    //         'customer': {
    //             templateUrl: './app/views/customer.html'
    //         }
    //     }
    // };

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
        controller: 'ordercontroller',
        data:
        {
            pageSiz: 10,
            pagingOptions: [10, 20, 30, 40]
        }
    };

    var orderdetails = {
        name: 'product.details',
        url: '/:id',
        template: '<h1>This is Details page {{productName}}</h1>',
        controller: function ($scope, $stateParams) {
            $scope.productName = $stateParams.id;
        }
    };



    $stateProvider.state(productstate);
    $stateProvider.state(homestate);
    $stateProvider.state(signupstate);
    $stateProvider.state(loginstate);
    $stateProvider.state(customerstate);
    $stateProvider.state(orderstate);
    $stateProvider.state(orderdetails);
    $stateProvider.state('product.test', {
        views: {
            'orders': {
                templateUrl: './app/views/order.html'
            },
            'customer': {
                templateUrl: './app/views/customer.html'
            }
        }

    });

    $urlRouterProvider.otherwise('/login');

});