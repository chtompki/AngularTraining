angular.module('LemonAide').controller('SuppliesController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.page = {heading: "Supplies"};

    $scope.supplies = {
        lemonade: 80,
        fruit: 24,
        treats: 49
    }

}]);