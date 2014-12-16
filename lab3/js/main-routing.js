angular.module('LemonAide').config(function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: 'templates/main-page.html',
            controller: 'HomeController'
        }).
        when('/lemonaide', {
            templateUrl: 'templates/lemon-aide.html',
            controller: 'LemonAideController'
        }).
        otherwise({
            redirectTo: '/home'
        });
});