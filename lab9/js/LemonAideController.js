angular.module('LemonAide').controller('LemonAideController', ['$rootScope', '$scope', 'ProductService', function($rootScope, $scope, ProductService) {

    $scope.page = {heading: "Sell"};

    $scope.la_values = {
        largeGlass: ProductService.getLargeGlass(),
        mediumGlass: ProductService.getMediumGlass(),
        healthySnack: ProductService.getHealthySnack(),
        treat: ProductService.getTreat(),
        totalQuantity: ProductService.getProductQuantity(),
        totalCost: ProductService.getTotalProductCost()
    };

    $scope.clearClick = function() {
        ProductService.clearProducts();
        $scope.la_values = {
            largeGlass: ProductService.getLargeGlass(),
            mediumGlass: ProductService.getMediumGlass(),
            healthySnack: ProductService.getHealthySnack(),
            treat: ProductService.getTreat(),
            totalQuantity: ProductService.getProductQuantity(),
            totalCost: ProductService.getTotalProductCost()
        };
    };
}]);