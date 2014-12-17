angular.module('LemonAide', ['ui.router']);

angular.module('LemonAide').directive('lemonAideHeader', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<h2 class="page_header" ng-transclude></h2>'
    };
});

angular.module('LemonAide').directive('lemonAideFocus', function () {
    return {
        restrict: 'EA',
        replace: false,
        template: '',
        link: function (scope, element, attrs) {
            element[0].focus()
        }
    };
});

angular.module('LemonAide').directive('lemonReportListing', function () {
    return {
        //Only want attribute directive
        restrict: 'EA',
        //Isolate scope
        scope: {
            //2 way binding on a report object
            reportItem: '=',
            //Referencing a method on the parent scope
            action: '&',
            //Local scope binding
            limit: '='
        },
        //Include user-defined HTML
        transclude: true,
        //We want to deal with an external template
        templateUrl: '/templates/card.html',
        //Utilizing the lemonReportListingController
        //controller: 'lemonReportListingController',
        //Link function handles selected click
        link: function (scope, instanceElement) {

            //Setting flag on parent controller
            scope.reportItem.profitable = scope.reportItem.grossProfit > 200;

            //Setting the selected item
            scope.showSelected = function () {
                scope.action({selectedReport: scope.reportItem});
            };

            //Setting up binding on a report item to make it selected
            instanceElement.bind('click', function () {
                //Utilizing jqLite DOM crawling
                //	Removing all 'selected' classes
                instanceElement.parent().children().removeClass('selected');
                //Adding a 'selected' class to the clicked report item
                instanceElement.addClass('selected');
            });
        }
    };
});

function calculateTotalProducts(largeGlass, meduimGlass, healthySnack, treat) {
    return largeGlass + meduimGlass + healthySnack + treat;
}

function calculateCost(largeGlass, mediumGlass, healthySnack, treat) {
    return largeGlass * 2 + mediumGlass + healthySnack * 2 + treat * 0.5;
}