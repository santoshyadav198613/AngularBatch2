angular.module('myApp').component('postComponent', {
    templateUrl: 'app/component/post.component.html',
    controller: function () {
        this.title = "This is my first component";
        this.post;
        this.name;

        this.$onChanges = function(changesObj)
        {
            console.log(changesObj);
        }

        this.$onInit = function () {
            this.post = this.posts;
            this.name = 'hello from init method';
        };

        this.$doCheck = function()
        {
            console.log(this.name);
        }

    },
    bindings: {
        posts: '<',
        post: '=',
        title: '@'
    }
});


