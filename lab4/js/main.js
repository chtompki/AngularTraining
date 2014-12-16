angular.module('LemonAide', ['ui.router']);

function calculateTotalProducts(largeGlass, meduimGlass, healthySnack, treat) {
    return largeGlass + meduimGlass + healthySnack + treat;
}

function calculateCost(largeGlass, mediumGlass, healthySnack, treat) {
    return largeGlass * 2 + mediumGlass + healthySnack * 2 + treat * 0.5;
}