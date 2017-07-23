angular.module('myApp').component('postComponent', {
    templateUrl: 'app/component/post.component.html',
    controller: function () {
        this.title = "This is my first component";
        this.post;
    },
    bindings: {
        post: '=',
        title : '@',

    }
});


