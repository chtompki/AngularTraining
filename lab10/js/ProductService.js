angular.module("LemonAide").provider("ProductService",function() {
    var largeGlass = 0;
    var mediumGlass = 0;
    var healthySnack = 0;
    var treat = 0;
    var largeGlassCost = 0;
    var mediumGlassCost = 0;
    var healthySnackCost = 0;
    var treatCost = 0;
    var costRetrieved = false;
    return {
        setLargeGlass: function(pLargeGlass) {
           largeGlass = pLargeGlass;
        },
        setMediumGlass: function(pMediumGlass) {
            mediumGlass = pMediumGlass;
        },
        setHealthySnack: function(pHealthySnack) {
            healthySnack = pHealthySnack;
        },
        setTreat: function(pTreat) {
            treat = pTreat;
        },
        $get: function() {
            var setLargeGlass = function(pLargeGlass) {
                largeGlass = pLargeGlass;
            };
            var setMediumGlass = function(pMediumGlass) {
                mediumGlass = pMediumGlass;
            };
            var setHealthySnack = function(pHealthySnack) {
                healthySnack = pHealthySnack;
            };
            var setTreat = function(pTreat) {
                treat = pTreat;
            };
            var getLargeGlass = function() {
                return largeGlass;
            };
            var getMediumGlass = function() {
                return mediumGlass;
            };
            var getHealthySnack = function() {
                return healthySnack;
            };
            var getTreat = function() {
                return treat;
            };
            var setLargeGlassCost = function(pLargeGlassCost) {
                largeGlassCost = pLargeGlassCost;
            };
            var setMediumGlassCost = function(pMediumGlassCost) {
                mediumGlassCost = pMediumGlassCost;
            };
            var setHealthySnackCost = function(pHealthySnackCost) {
                healthySnackCost = pHealthySnackCost;
            };
            var setTreatCost = function(pTreatCost) {
                treatCost = pTreatCost;
            };
            var setCostRetrieved = function(hasCostBeenRetrieved) {
                costRetrieved = hasCostBeenRetrieved;
            }
            var getLargeGlassCost = function() {
                return largeGlassCost;
            };
            var getMediumGlassCost = function() {
                return mediumGlassCost;
            };
            var getHealthySnackCost = function() {
                return healthySnackCost;
            };
            var getTreatCost = function() {
                return treatCost;
            };
            var hasCostBeenRetrieved = function() {
                costRetrieved;
            }
            var incrementLargeGlass = function() {
                largeGlass++;
            };
            var incrementMediumGlass = function() {
                mediumGlass++;
            };
            var incrementHealthySnack = function() {
                healthySnack++;
            };
            var incrementTreat = function() {
                treat++;
            };
            var getProductQuantity = function() {
                return largeGlass + mediumGlass + healthySnack + treat;
            };
            var getTotalProductCost = function() {
                return (largeGlass * largeGlassCost) + (mediumGlass * mediumGlassCost) + (healthySnack * healthySnackCost) + (treat * treatCost);
            };
            var clearProducts = function() {
                largeGlass = 0;
                mediumGlass = 0;
                healthySnack = 0;
                treat = 0;
            };
            return {
                setLargeGlass: setLargeGlass,
                setMediumGlass: setMediumGlass,
                setHealthySnack: setHealthySnack,
                setTreat: setTreat,
                getLargeGlass: getLargeGlass,
                getMediumGlass: getMediumGlass,
                getHealthySnack: getHealthySnack,
                getTreat: getTreat,
                setLargeGlassCost: setLargeGlassCost,
                setMediumGlassCost: setMediumGlassCost,
                setHealthySnackCost: setHealthySnackCost,
                setTreatCost: setTreatCost,
                setCostRetrieved: setCostRetrieved,
                getLargeGlassCost: getLargeGlassCost,
                getMediumGlassCost: getMediumGlassCost,
                getHealthySnackCost: getHealthySnackCost,
                getTreatCost: getTreatCost,
                hasCostBeenRetrieved: hasCostBeenRetrieved,
                incrementLargeGlass: incrementLargeGlass,
                incrementMediumGlass: incrementMediumGlass,
                incrementHealthySnack: incrementHealthySnack,
                incrementTreat: incrementTreat,
                getProductQuantity: getProductQuantity,
                getTotalProductCost: getTotalProductCost,
                clearProducts: clearProducts
            };
        }
    }
});