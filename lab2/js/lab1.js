angular.module('LemonAide1', []);

(function (){
    angular.module('LemonAide1').controller('LemonAideController1', function ($scope) {
        $scope.la_date = {
            now: Date.now()
        }

        var largeGlass = 0;
        var mediumGlass = 0;
        var healthySnack = 0;
        var treat = 0;

        var transactionQuantity = largeGlass + mediumGlass + healthySnack + treat;

        var transactionCost = calculateCost(largeGlass, mediumGlass, healthySnack, treat);

        $scope.la_values = {
            largeGlass: largeGlass,
            mediumGlass: mediumGlass,
            healthySnack: healthySnack,
            treat: treat,
            totalQuantity: transactionQuantity,
            totalCost: transactionCost
        }

        $scope.largeGlassClick = function() {
            largeGlass++;
            $scope.la_values = {
                largeGlass: largeGlass,
                mediumGlass: mediumGlass,
                healthySnack: healthySnack,
                treat: treat,
                totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
                totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
            }
        }

        $scope.mediumGlassClick = function() {
            mediumGlass++;
            $scope.la_values = {
                largeGlass: largeGlass,
                mediumGlass: mediumGlass,
                healthySnack: healthySnack,
                treat: treat,
                totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
                totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
            }
        }

        $scope.healthySnackClick = function() {
            healthySnack++;
            $scope.la_values = {
                largeGlass: largeGlass,
                mediumGlass: mediumGlass,
                healthySnack: healthySnack,
                treat: treat,
                totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
                totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
            }
        }

        $scope.treatClick = function() {
            treat++;
            $scope.la_values = {
                largeGlass: largeGlass,
                mediumGlass: mediumGlass,
                healthySnack: healthySnack,
                treat: treat,
                totalQuantity: calculateTotalProducts(largeGlass, mediumGlass, healthySnack, treat),
                totalCost: calculateCost(largeGlass, mediumGlass, healthySnack, treat)
            }
        }

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
        }

    });

    function calculateTotalProducts(largeGlass, meduimGlass, healthySnack, treat) {
        return largeGlass + meduimGlass + healthySnack + treat;
    }

    function calculateCost(largeGlass, mediumGlass, healthySnack, treat) {
        return largeGlass*2 + mediumGlass*1 + healthySnack*2 + treat*0.5;
    }
})();