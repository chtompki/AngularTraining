angular.module('LemonAide').provider('ProductService', function() {
    var largeGlass = 0;
    var mediumGlass = 0;
    var healthySnack = 0;
    var treat = 0;
    var largeGlassCost = 2;
    var mediumGlassCost = 1;
    var healthySnackCost = 2;
    var treatCost = 1.5;
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
        setLargeGlassCost: function(pLargeGlassCost) {
            largeGlassCost = pLargeGlassCost;
        },
        setMediumGlassCost: function(pMediumGlassCost) {
            mediumGlassCost = pMediumGlassCost;
        },
        setHealthySnackCost: function(pHealthySnackCost) {
            healthySnackCost = pHealthySnackCost;
        },
        setTreatCost: function(pTreatCost) {
            treatCost = pTreatCost;
        },
        $get: function() {
            var setLargeGlass = function(pLargeGlass) {
                largeGlass = pLargeGlass;
            }
            var setMediumGlass = function(pMediumGlass) {
                mediumGlass = pMediumGlass;
            }
            var setHealthySnack = function(pHealthySnack) {
                healthySnack = pHealthySnack;
            }
            var setTreat = function(pTreat) {
                treat = pTreat;
            }
            var getLargeGlass = function() {
                return largeGlass;
            }
            var getMediumGlass = function() {
                return mediumGlass;
            }
            var getHealthySnack = function() {
                return healthySnack;
            }
            var getTreat = function() {
                return treat;
            }
            var incrementLargeGlass = function() {
                largeGlass++;
            }
            var incrementMediumGlass = function() {
                mediumGlass++;
            }
            var incrementHealthySnack = function() {
                healthySnack++;
            }
            var incrementTreat = function() {
                treat++;
            }
            var getProductQuantity = function() {
                return largeGlass + mediumGlass + healthySnack + treat;
            }
            var getTotalProductCost = function() {
                return (largeGlass * largeGlassCost) + (mediumGlass * mediumGlassCost) + (healthySnack * healthySnackCost) + (treat * treatCost);
            }
            var clearProducts = function() {
                largeGlass = 0;
                mediumGlass = 0;
                healthySnack = 0;
                treat = 0;
            }
            return {
                setLargeGlass: setLargeGlass,
                setMediumGlass: setMediumGlass,
                setHealthySnack: setHealthySnack,
                setTreat: setTreat,
                getLargeGlass: getLargeGlass,
                getMediumGlass: getMediumGlass,
                getHealthySnack: getHealthySnack,
                getTreat: getTreat,
                incrementLargeGlass: incrementLargeGlass,
                incrementMediumGlass: incrementMediumGlass,
                incrementHealthySnack: incrementHealthySnack,
                incrementTreat: incrementTreat,
                getProductQuantity: getProductQuantity,
                getTotalProductCost: getTotalProductCost,
                clearProducts: clearProducts
            }
        }
    }
});