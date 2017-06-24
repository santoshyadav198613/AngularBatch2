angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {

    var productstate = {
        name: 'product',
        url: '/product',
        templateUrl: './app/views/product.html',
        controller: 'productcontroller',
        data: {
            pageSize: 10,
            pagingOptions: [5, 10, 15, 20]
        }
        //,abstract : true
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

    var employeestate = {
        name: 'employee',
        url: '/employee',
        templateUrl: './app/views/employee.html',
        controller: 'myEmployeeController'
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

    // var orderdetails = {
    //     name: 'product.details',
    //     url: '/:id',
    //     template: '<h1>This is Details page {{productName}}</h1>',
    //     controller: function ($scope, $stateParams) {
    //         $scope.productName = $stateParams.id;
    //     }
    // };

    //Dynamic Url
    var productdescriptionstate = {
        name: 'productdescription',
        url: '/description/:id',
        template: 'This is description view',
        controller: function ($stateParams) {
            console.log('Id is ' + $stateParams.id);
        }
    };

    //Dynamic URL with child state
    //while calling from parent use .statename
    //while calling from other state user complete state name
    var productdetailsstate = {
        name: 'product.details', //parent.child state naming convention
        url: '/details/:id',
        template: 'This is product details view'
    };

    $stateProvider.state(productstate);
    $stateProvider.state(homestate);
    $stateProvider.state(signupstate);
    $stateProvider.state(loginstate);
    $stateProvider.state(customerstate);
    $stateProvider.state(employeestate);
    $stateProvider.state(orderstate);
    $stateProvider.state(productdescriptionstate);
    $stateProvider.state(productdetailsstate);

    //named views
    $stateProvider.state("product.order",
        {
            url: '/productstate',
            views: {
                "order": {
                    templateUrl: './app/views/customer.html',
                    controller: 'customercontroller'
                },
                "customer":
                {
                    templateUrl: './app/views/order.html',
                    controller: 'ordercontroller'
                }

            }
        });
    // $stateProvider.state(orderdetails);
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