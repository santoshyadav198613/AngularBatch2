angular.module("myApp").service('postresourceservice', ['$resource',
    function ($resource) {

        return $resource('https://jsonplaceholder.typicode.com/posts/:id', { id: '@id' });

    }]);