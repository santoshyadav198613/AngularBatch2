angular.module("myApp").service('productservice', ['$http', 'apiEndPoint', function ($http, apiEndPoint) {

    var apiEndPoint = apiEndPoint;

    var service =
        {
            getProduct: fetchProduct,
            saveProduct: saveProduct,
            add: addNumber,
            getProductById: fetchProductById
        };

    return service;
    function addNumber(num1, num2) {
        return num1 + num2;
    }
    function fetchProduct() {
        return $http.get(apiEndPoint + 'api/product');
    }

    function fetchProductById(id) {
        return $http.get(apiEndPoint + 'api/product/' + id);
    }

    function saveProduct(product) {
        return $http.post(apiEndPoint + 'api/product', product);
    }

}]);