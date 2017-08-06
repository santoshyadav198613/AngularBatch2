angular.module('myApp').directive('spacebarSupport',function(){
    return{
      restrict: 'A',
      link: function(scope,elem,attrs){
            $('body').on('keypress',function(evt){
                var vidEl = elem[0];
                if(evt.keyCode === 32){
                    if(vidEl.paused){
                        vidEl.play();
                    }
                    else{
                        vidEl.pause();
                    }
                }
            })
      }
    }
});


angular.module('shoppingApp').directive('eventPause',function($parse){
    return{
      restrict: 'A',
      link : function(scope,elem,attrs){
          var fn= $parse(attrs['eventPause']);
          elem.on('pause',function(event){
          scope.$apply(function(){
            //   scope.eventPause();
            fn(scope, {evt: event});
          })
          })
      }
    }
});



angular.module('shoppingApp').directive('myClick',function($parse){
    return{
      link : function(scope,elem,attrs){
          var fn= $parse(attrs['myClick']);
          elem.on('click',function(event){
          scope.$apply(function(){
            //   scope.eventPause();
            fn(scope);
          })
          })
      }
    }
});




angular.module('shoppingApp').directive('displayBox',function($parse){
    return{
        restrict: 'E',
        templateUrl : 'app/views/displayBox.html',
        controller: function($scope){
                $scope.hidden = false;
                $scope.close = function(){
                    $scope.hidden = true;
                }
        },
        transclude : true
    }
});
