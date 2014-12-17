angular.module('LemonAide').controller('LemonAideProductController',['$scope', 'ProductService', function($scope, ProductService) {

    $scope.largeGlassClick = function() {
        ProductService.incrementLargeGlass();
        $scope.la_values.largeGlass = ProductService.getLargeGlass();
        $scope.la_values.totalQuantity = ProductService.getProductQuantity();
        $scope.la_values.totalCost = ProductService.getTotalProductCost();

    };

    $scope.mediumGlassClick = function() {
        ProductService.incrementMediumGlass();
        $scope.la_values.mediumGlass = ProductService.getMediumGlass();
        $scope.la_values.totalQuantity = ProductService.getProductQuantity();
        $scope.la_values.totalCost = ProductService.getTotalProductCost();
    };

    $scope.healthySnackClick = function() {
        ProductService.incrementHealthySnack();
        $scope.la_values.healthySnack = ProductService.getHealthySnack();
        $scope.la_values.totalQuantity = ProductService.getProductQuantity();
        $scope.la_values.totalCost = ProductService.getTotalProductCost();
    };

    $scope.treatClick = function() {
        ProductService.incrementTreat();
        $scope.la_values.treat = ProductService.getTreat();
        $scope.la_values.totalQuantity = ProductService.getProductQuantity();
        $scope.la_values.totalCost = ProductService.getTotalProductCost();
    };


}]);