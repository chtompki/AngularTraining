angular.module('LemonAide').service('CostService',['$resource', 'ProductService', function($resource, ProductService) {
    var CostEndpoint = $resource('http://localhost:8080/data/cost.json');
    this.retrieveCosts = function() {
        var costs = CostEndpoint.get({},
            function(response) {
                ProductService.setLargeGlassCost(costs.largeLemonade);
                ProductService.setMediumGlassCost(costs.mediumLemonade);
                ProductService.setHealthySnackCost(costs.healthySnack);
                ProductService.setTreatCost(costs.treat);
                ProductService.setCostRetrieved(true);
            },
            function(error) {
                //
            });
    }
}]);