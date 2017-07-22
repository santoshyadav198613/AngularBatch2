angular.module('myApp').controller('logincontroller', ['$scope', '$state',
    '$rootScope', 'loginservice', 'cacheService', 'cookiesService',
    function ($scope, $state, $rootScope, loginservice, cacheService, cookiesService) {
        var cache;
        function init() {
            cache = cacheService.createCache('login');
        }
        init();

        $scope.login = function (user) {
            console.log(user);
            loginservice.login(user);
            if (angular.isUndefined(cacheService.getCache('user'))) {
                cacheService.saveCache('user', user);
            }
            var data = cacheService.getCache('user');
            var d1 = new Date(),
                d2 = new Date(d1);
            d2.setMinutes(d1.getMinutes() + 30);
            //alert(d2);

            var option = {
                expires: d2
            }
            cookiesService.saveCookieObject('userInfo', user, option);
            $rootScope.isLoggedin = true;
            var userObj = cookiesService.getCookieObject('userInfo');
            $state.go('default');
        }

    }]);