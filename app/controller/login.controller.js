angular.module('myApp').controller('logincontroller', ['$scope', '$state',
    '$rootScope', 'loginservice', 'cacheService',
    function ($scope, $state, $rootScope, loginservice, cacheService) {
        var cache;
       function init()
        {
            cache = cacheService.createCache('login');
        }
        init();

        $scope.login = function (user) {
            console.log(user);
            loginservice.login(user);
            if(angular.isUndefined(cacheService.getCache('user')))
            {   
                cacheService.saveCache('user',user);
            }
            var data = cacheService.getCache('user');
            $rootScope.isLoggedin = true;

            $state.go('default');
        }

    }]);