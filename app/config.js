// angular.module('myApp').provider('myInterceptor', function () {
//     return {
//         request: function (config) {
//             if (config.url === 'https://jsonplaceholder.typicode.com/posts') {
//                 console.log(config)
//             }
//         },
//         response: function (config) {
//             if (config.url === 'https://jsonplaceholder.typicode.com/posts') {
//                 console.log(config)
//             }
//         }
//     }
// });

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider,
    $anchorScrollProvider, $logProvider, $rootScopeProvider,
    $qProvider, $locationProvider, $httpProvider) {

    //$httpProvider.interceptors.push(myInterceptor);
    // $httpProvider.interceptors.push(function () {
    //     return {
    //         request: function (config) {
    //             if (config.url === 'https://jsonplaceholder.typicode.com/posts') {
    //                 console.log(config)
    //             }
    //         },
    //         response: function (config) {
    //             if (config.url === 'https://jsonplaceholder.typicode.com/posts') {
    //                 console.log(config)
    //             }
    //         }
    //     }
    // });

    $rootScopeProvider.digestTtl(5);
    $logProvider.debugEnabled(false);
    $qProvider.errorOnUnhandledRejections(true);
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

    // var defaultstate = {
    //     name: 'default',
    //     url: '',
    //     templateUrl: './app/views/home.html',
    //     controller: 'startupcontroller'
    // };


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
        // name: 'employee',
        // url: '/employee',
        // templateUrl: './app/views/employee.html',
        // controller: 'myEmployeeController'

        name: 'employee',
        url: '/employee',
        component: 'employeeComponent'
    };

    var orderstate = {
        name: 'order',
        url: '/order',
        component: 'orderComponent',
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
        templateUrl: './app/views/product-details.html',
        controller: 'productdetailcontroller'
    };

    var poststate = {
        name: 'post',
        url: '/post',
        component: 'postComponent',
        resolve: {
            posts: function (postresourceservice) {
                return postresourceservice.query().$promise;
            }
        }
    };

    var postdetailsstate = {
        name: 'postdetails',
        url: '/post/:id',
        templateUrl: './app/views/postdetail.html',
        controller: 'postdetailcontroller',
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
    $stateProvider.state(poststate);
    $stateProvider.state(postdetailsstate);
    //$stateProvider.state(defaultstate);
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

    $anchorScrollProvider.disableAutoScrolling();
    //$locationProvider.html5Mode(true);


  //  $httpProvider.defaults.headers.common.id = "test"; //add custom headers 
});


angular.module('myApp').run(function ($location, $rootScope, loginservice, $state) {

    $rootScope.$on('$locationChangeStart', function (event, to, from) {
        loginservice.checkLogin().then(function (res) {
            console.log(res)
        }, function (err) {
            console.log(err);
        });
        // if (!isLoggedIn) {
        //     // event.preventDefault();
        //     // $state.go('login');
        // }

    });

})