angular.module('myApp').controller('postdetailcontroller', ['$scope', '$state', '$stateParams', 'postservice',
    function ($scope, $state, $stateParams, postservice) {

        $scope.postid =  $stateParams.id;

        function init() {
            postservice.getPostbyId($scope.postid).then(function (res) {
                if (res.status === 200) {
                    $scope.post = res.data;
                }
            }).catch(function (err) {
                $scope.error = "There is some problem while loading data";
            });
        }

        init();

    }]);