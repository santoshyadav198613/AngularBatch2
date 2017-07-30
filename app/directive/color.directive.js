
//sample attribute based directive
angular.module('myApp').directive('colorDirective', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            console.log(element);
            console.log(attr);
            element[0].style.backgroundColor =attr.color;
        }
    }
});
