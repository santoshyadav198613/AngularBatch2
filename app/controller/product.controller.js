angular.module("myApp").controller("productcontroller",
    ["$scope", "$state", "$anchorScroll", "$location", "$filter",
        "productfactory", "productservice", "loginservice", "$rootScope", "$log", "$window",
        function ($scope, $state, $anchorScroll, $location, $filter,
            productfactory, productservice, loginservice, $rootScope, $log, $window) {

            // $scope.$on('toChild',function(data){
            //         console.log(data);
            // }); //To capture the event
            loginservice.checkLogin().then(function (res) {
                console.log(res)
            }, function (err) {
                console.log(err);
            }).catch(function(err){
                console.log(error);
            });
            $log.info($scope.isLoggedIn);
            $log.warn($scope.isLoggedIn);
            $log.debug($scope.isLoggedIn);
            $log.error($scope.isLoggedIn);
            //$window.alert($scope.isLoggedIn);
            $scope.rootData = $rootScope.isLoggedin;
            var data = $state.current.data.pageSize;
            $scope.pageSize = [1, 5, 10];

            $scope.products = productservice.getProduct();
            angular.forEach($scope.products, function (product) {
                product.selected = false;
            });
            $scope.addProduct = function (prod) {
                var product = prod;
                product.qty = 1;
                product.imagePath = 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg';
                productservice.saveProduct(product);
                $scope.product = {};
                $scope.productform.$setPristine()
                //$scope.$emit('message',prod); //Send event to parent controllers
            };

            $scope.placeOrder = function (product) {
                var data = $filter('filter')(product, { selected: true });
            }

            $scope.goTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
        }]);