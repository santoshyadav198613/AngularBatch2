angular.module('myApp').controller('productdetailcontroller', ['$scope', '$state', '$stateParams', 'productservice',
function ($scope, $state, $stateParams, productservice) {

    $scope.productId =  $stateParams.id;

    function init() {
        productservice.getProductById($scope.productId).then(function (res) {
            if (res.status === 200) {
                $scope.productData = res.data;
            }
        }).catch(function (err) {
            $scope.error = "There is some problem while loading data";
        });
    }

    init();

}]);