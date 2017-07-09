angular.module("myApp").service('postservice', ['$http', function ($http) {
   var service =
        {
            getPosts: getPosts,
            savePost: savePost,
            getPostbyId: getPostbyId
        };

    return service;
    
    function getPosts() {
       return $http.get('https://jsonplaceholder.typicode.com/posts')
    }

    function getPostbyId(id) {
        return $http.get('https://jsonplaceholder.typicode.com/posts/' + id);    
    }

    function savePost(post) {
       return $http.post('https://jsonplaceholder.typicode.com/posts', post);
    }

}]);