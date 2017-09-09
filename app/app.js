angular.module("myApp",['commonmodule','ui.router',
'ngCookies','ngResource','toastr']);

angular.module('commonmodule',[]);

angular.module('commonmodule').value('testdata','124');
// angular.module().filter();
// angular.module().config();
// angular.module().service();
// angular.module().factory();
// angular.module().constant();
// angular.module().run();
// angular.module().directive();