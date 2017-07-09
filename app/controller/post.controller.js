angular.module('myApp').controller('postcontroller', ['$scope', 'postservice',
    function ($scope, postservice) {

        function loadPosts() {
            postservice.getPosts().then(function (res) {
                if (res.status === 200) {
                    $scope.posts = res.data;
                }
            }).catch(function (err) {
                $scope.error = "There is some problem while loading data";
            });
        }

        function init() {
            loadPosts();
        }

        init();

        $scope.addPost = function (post) {
            postservice.savePost(post).then(function (res) {
                $scope.newPost = res.status === 201 ? res : undefined;
                loadPosts();
            }).catch(function (err) {
                $scope.error = "There is some problem while saving data";
            })
        }

    }]);