
//Sample for Component directive
angular.module('myApp').directive('postDirective', function () {
    return {
        restrict: 'EA',
        controller: 'postcontroller',
        templateUrl: 'app/views/post.html',
        scope : {
            post : '='
        }, //isolated scope
        link: function (scope, element, attr) {
            console.log(scope);
            console.log(element);
           // element[0].style.backgroundColor ='blue';
        }
    }
});
