angular.module('LemonAide', ['ui.router']);

angular.module('LemonAide').directive('lemonAideHeader', function() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {},
        transclude: true,
        template: '<h2 class="page_header" ng-transclude></h2>'
    };
});

function calculateTotalProducts(largeGlass, meduimGlass, healthySnack, treat) {
    return largeGlass + meduimGlass + healthySnack + treat;
}

function calculateCost(largeGlass, mediumGlass, healthySnack, treat) {
    return largeGlass * 2 + mediumGlass + healthySnack * 2 + treat * 0.5;
}