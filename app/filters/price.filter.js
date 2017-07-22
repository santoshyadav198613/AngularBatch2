angular.module('myApp').filter('price', function () {
    return function (products, param1, param2) {
        var newProducts = [];
        products.forEach(function (product) {
            if (product.price >= param1 && product.price <= param2) {
                newProducts.push(product)
            }
        });
        return newProducts;
    }
});