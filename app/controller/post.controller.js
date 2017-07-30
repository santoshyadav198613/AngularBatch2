angular.module('myApp').controller('postcontroller', ['postservice', 'postresourceservice',
    function (postservice, postresourceservice) {

        var vm = this;
        vm.posts = [];
        vm.newPost = false;
        vm.addPost = addPost;
        // function loadPosts() {
        //     postservice.getPosts().then(function (res) {
        //         if (res.status === 200) {
        //             $scope.posts = res.data;
        //         }
        //     }).catch(function (err) {
        //         $scope.error = "There is some problem while loading data";
        //     });
        // }

        // function getPostFromResource() {
        //     var data = postresourceservice.query().$promise.then(function (res) {
        //         vm.posts = res;
        //     }).catch(function (err) {
        //         vm.error = "There is some problem while loading data";
        //     });
        // }
        function init() {
             
        }

        init();

        function addPost(post) {
            var result = postresourceservice.save(post).$promise.then(function (res) {
                vm.newPost = true;
            }).catch(function (err) {
                vm.error = "There is some problem while saving data";
            });
            // postservice.savePost(post).then(function (res) {
            //     $scope.newPost = res.status === 201 ? res : undefined;
            //     loadPosts();
            // }).catch(function (err) {
            //     $scope.error = "There is some problem while saving data";
            // })
        }

    }]);