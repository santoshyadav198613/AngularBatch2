angular.module("myApp").service('productservice', ['$http', function ($http) {
    var products = [{
        name: 'LED TV',
        description: '32 inch HD diaplay',
        price: 2000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }, {
        name: 'Refigerator',
        description: 'Refigerator double door',
        price: 4000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    },
    {
        name: 'Air Condition',
        description: '1.5 ton',
        price: 5000,
        qty: 1,
        imagePath: 'http://ecx.images-amazon.com/images/I/91BGB%2BOixwL._UX395_.jpg'
    }];

    var tempData = {};
    var service =
        {
            getProduct: fetchProduct,
            saveProduct: saveProduct,
            add: addNumber
        };

    return service;
    function addNumber(num1, num2) {
        return num1 + num2;
    }
    function fetchProduct() {
        $http.get('http://localhost:3000/api/user').then(
            function(res){
                var data = res;
            });
        return products;
    }

    function fetchProductById(id) {
        $http.get('http://localhost:3000/api/user/' + id);
        return products;
    }

    function saveProduct(product) {
        products.push(product);
        $http.post('http://localhost:3000/api/user', product).then(function (res) {
            tempData = res;
        });
    }

}]);