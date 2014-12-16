angular.module('LemonAide', ['ui.router']);

(function (){
    angular.module('LemonAide').controller('HeaderController', function($scope){
        $scope.la_date = {
            now: Date.now()
        };
    });

    angular.module('LemonAide').controller('HomeController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.page = {heading: "Home"};
    }]);

    angular.module('LemonAide').controller('LemonadeController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.page = {heading: "Lemonade"};
    }]);

    angular.module('LemonAide').controller('HealthySnacksController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.page = {heading: "Healthy Snacks"};
    }]);

    angular.module('LemonAide').controller('TreatsController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.page = {heading: "Treats"};
    }]);

    //angular.module('LemonAide').controller('FooterController', function($scope) {
    //    $scope.areaStatus = false;
    //});

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

    function calculateTotalProducts(largeGlass, meduimGlass, healthySnack, treat) {
        return largeGlass + meduimGlass + healthySnack + treat;
    }

    function calculateCost(largeGlass, mediumGlass, healthySnack, treat) {
        return largeGlass*2 + mediumGlass + healthySnack*2 + treat*0.5;
    }
})();