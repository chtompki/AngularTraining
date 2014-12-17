angular.module('LemonAide').controller('LemonAideController', ['$rootScope', '$scope', function($rootScope, $scope) {

    $scope.page = {heading: "Sell"};

    var largeGlass = 0;
    var mediumGlass = 0;
    var healthySnack = 0;
    var treat = 0;

    $scope.la_values = {
        largeGlass: largeGlass,
        mediumGlass: mediumGlass,
        healthySnack: healthySnack,
        treat: treat,
        totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
        totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
    };

    $scope.clearClick = function() {
        largeGlass = 0;
        mediumGlass = 0;
        healthySnack = 0;
        treat = 0;
        $scope.la_values = {
            largeGlass: largeGlass,
            mediumGlass: mediumGlass,
            healthySnack: healthySnack,
            treat: treat,
            totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
            totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
        }
    };
}]);