angular.module("myApp").service('productservice', function () {
    var products =  [{
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
    var service =
        {
            getProduct: fetchProduct,
            saveProduct: saveProduct,
            add : addNumber
        };

    return service;
    function addNumber(num1,num2)
    { 
        return num1 + num2;
    }
    function fetchProduct() {
        return products;
    }

    function saveProduct(product) {
        products.push(product);
    }

});