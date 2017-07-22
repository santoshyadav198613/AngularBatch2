angular.module('myApp').controller('postcontroller', ['$scope', 'postservice', 'postresourceservice',
    function ($scope, postservice, postresourceservice) {

        // function loadPosts() {
        //     postservice.getPosts().then(function (res) {
        //         if (res.status === 200) {
        //             $scope.posts = res.data;
        //         }
        //     }).catch(function (err) {
        //         $scope.error = "There is some problem while loading data";
        //     });
        // }

        function getPostFromResource() {
            var data = postresourceservice.query().$promise.then(function (res) {
                $scope.posts = res;
            });
        }
        function init() {
            // loadPosts();
            getPostFromResource();
            // postresourceservice.get(1).
            // $promise.then(function(res){
            //     console.log(res);
            // });
        }

        init();

        $scope.addPost = function (post) {
            var result = postresourceservice.save(post);
            // postservice.savePost(post).then(function (res) {
            //     $scope.newPost = res.status === 201 ? res : undefined;
            //     loadPosts();
            // }).catch(function (err) {
            //     $scope.error = "There is some problem while saving data";
            // })
        }

    }]);