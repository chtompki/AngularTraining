angular.module('LemonAide').controller('LemonAideProductController', function($scope) {
    var largeGlass = $scope.la_values.largeGlass;
    var mediumGlass = $scope.la_values.mediumGlass;
    var healthySnack = $scope.la_values.healthySnack;
    var treat = $scope.la_values.treat;

    $scope.largeGlassClick = function() {
        largeGlass++;
        $scope.la_values.largeGlass = largeGlass;
        $scope.la_values.totalQuantity = calculateTotalProducts(largeGlass, $scope.la_values.mediumGlass, $scope.la_values.healthySnack, $scope.la_values.treat);
        $scope.la_values.totalCost = calculateCost(largeGlass, $scope.la_values.mediumGlass, $scope.la_values.healthySnack, $scope.la_values.treat);

    };

    $scope.mediumGlassClick = function() {
        mediumGlass++;
        $scope.la_values.mediumGlass = mediumGlass;
        $scope.la_values.totalQuantity = calculateTotalProducts($scope.la_values.largeGlass, mediumGlass, $scope.la_values.healthySnack, $scope.la_values.treat);
        $scope.la_values.totalCost = calculateCost($scope.la_values.largeGlass, mediumGlass, $scope.la_values.healthySnack, $scope.la_values.treat);
    };

    $scope.healthySnackClick = function() {
        healthySnack++;
        $scope.la_values.healthySnack = healthySnack;
        $scope.la_values.totalQuantity = calculateTotalProducts($scope.la_values.largeGlass, $scope.la_values.mediumGlass, healthySnack, $scope.la_values.treat);
        $scope.la_values.totalCost = calculateCost($scope.la_values.largeGlass, $scope.la_values.mediumGlass, healthySnack, $scope.la_values.treat);
    };

    $scope.treatClick = function() {
        treat++;
        $scope.la_values.treat = treat;
        $scope.la_values.totalQuantity = calculateTotalProducts($scope.la_values.largeGlass, $scope.la_values.mediumGlass, $scope.la_values.healthySnack, treat);
        $scope.la_values.totalCost = calculateCost($scope.la_values.largeGlass, $scope.la_values.mediumGlass, $scope.la_values.healthySnack, treat);
    };


});