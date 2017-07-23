angular.module('myApp').component('postComponent', {
    templateUrl: 'app/component/post.component.html',
    controller: function () {
        this.title = "This is my first component";
        this.post;
        this.name;

        this.$onInit = function () {
            this.name = 'hello from init method';
        };
    },
    bindings: {
        post: '=',
        title: '@'
    }
});


