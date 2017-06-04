angular.module("myApp").factory('productfactory', function () {
    var products = "2";
    return {
        getProduct: fetchProduct,
        saveProduct: saveProduct,
        products
    }

    function fetchProduct() {
        return "1"
    }

    function saveProduct(product) {
        return "1";
    }

});