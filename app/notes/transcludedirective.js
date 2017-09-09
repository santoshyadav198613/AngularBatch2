angular.module('myApp').directive('myTransclue',function(){
return{

    restrict: 'A',
    trasnclude : 'element',
    link : function(scope,elem,attrs, controller, transclude){
        transclude (scope,function(clone){
            elem.after(clone);
    })
}
}});