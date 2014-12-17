angular.module('LemonAide').controller('SuppliesController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
    $scope.page = {heading: "Supplies"};

    $http.get('http://localhost:8080/data/supplies.json').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.success = true;
            $scope.supplies = {
                lemonade: data.initial.lemonadeQuantity,
                lemonadeMax: 100,
                fruit: data.initial.fruitQuantity,
                fruitMax: 50,
                treat: data.initial.treatQuantity,
                treatMax: 50
            };
        }).
        error(function(data, status, headers, config) {
            $scope.success = false;
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    $scope.resetSupplies = function() {
        $http.get('http://localhost:8080/data/supplies.json').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.success = true;
                $scope.supplies = {
                    lemonade: data.initial.lemonadeQuantity,
                    lemonadeMax: 100,
                    fruit: data.initial.fruitQuantity,
                    fruitMax: 50,
                    treat: data.initial.treatQuantity,
                    treatMax: 50
                };
            }).
            error(function(data, status, headers, config) {
                $scope.success = false;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }

}]);