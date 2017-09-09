angular.module("myApp").controller("productcontroller",
    ["$scope", "$state", "$anchorScroll", "$location", "$filter", "productservice","toastr",
        function ($scope, $state, $anchorScroll, $location, $filter, productservice,toastr ) {

            var isSuccess = false;
            var isError = false;

            function init() {
                productservice.getProduct().then(function (res) {
                    console.log(res);
                    $scope.products = res.data;
                }).catch(function (err) {
                    console.log(err);
                });
                angular.forEach($scope.products, function (product) {
                    product.selected = false;
                });
            }

            init();

            $scope.addProduct = function (prod) {
                productservice.saveProduct(prod).then(function (res) {
                    toastr.success('Product Added Successfuly!');
                }).catch(function (err) {
                    $scope.isError = true;
                });
                $scope.product = {};
                $scope.productform.$setPristine()
            };

            $scope.placeOrder = function (product) {
                var data = $filter('filter')(product, { selected: true });
            }

            $scope.goTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
        }]);