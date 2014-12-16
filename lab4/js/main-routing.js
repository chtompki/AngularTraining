angular.module('LemonAide').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
            url: '/',
            templateUrl: 'templates/main-page.html',
            controller: 'HomeController'
        });
    $stateProvider.state('lemonaide', {
            url: '/lemonaide',
            templateUrl: 'templates/lemon-aide.html',
            controller: 'LemonAideController'
        });
    $stateProvider.state('orderInfo', {
        url: '/orderInfo',
        templateUrl: 'templates/order-info.html',
        controller: 'OrderInfoController'
    });
    $stateProvider.state('lemonaide.lemonade', {
        url: '/lemonade',
        templateUrl: 'templates/sell-lemonade.html',
        controller: 'LemonadeController'
    });
    $stateProvider.state('lemonaide.healthySnacks', {
        url: '/healthySnacks',
        templateUrl: 'templates/sell-healthy-snacks.html',
        controller: 'HealthySnacksController'
    });
    $stateProvider.state('lemonaide.treats', {
        url: '/treats',
        templateUrl: 'templates/sell-treats.html',
        controller: 'TreatsController'
    });
}]);