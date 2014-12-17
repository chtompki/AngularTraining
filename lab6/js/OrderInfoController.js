/**
 * Created by tompkicr on 12/16/14.
 */
angular.module('LemonAide').controller('OrderInfoController', ['$rootScope', '$scope', function($rootScope, $scope) {

    $scope.page = {
        heading: "Order Info"
    }

    var orderInfoPre = [{
        date: '1-1-2012',
        quantity: '500',
        netSale: '750',
        costOfGoods: '400'
    }, {
        date: '2-1-2012',
        quantity: '425',
        netSale: '650',
        costOfGoods: '300'
    }, {
        date: '3-1-2012',
        quantity: '300',
        netSale: '450',
        costOfGoods: '300'
    }, {
        date: '4-1-2012',
        quantity: '600',
        netSale: '750',
        costOfGoods: '400'
    }, {
        date: '5-1-2012',
        quantity: '100',
        netSale: '250',
        costOfGoods: '175'
    }, {
        date: '6-1-2012',
        quantity: '100',
        netSale: '250',
        costOfGoods: '150'
    }, {
        date: '7-1-2012',
        quantity: '425',
        netSale: '750',
        costOfGoods: '400'
    }, {
        date: '8-1-2012',
        quantity: '300',
        netSale: '450',
        costOfGoods: '250'
    }, {
        date: '9-1-2012',
        quantity: '650',
        netSale: '850',
        costOfGoods: '650'
    }, {
        date: '10-1-2012',
        quantity: '100',
        netSale: '350',
        costOfGoods: '250'
    }, {
        date: '11-1-2012',
        quantity: '100',
        netSale: '350',
        costOfGoods: '250'
    }, {
        date: '12-1-2012',
        quantity: '300',
        netSale: '450',
        costOfGoods: '250'
    }, {
        date: '1-1-2013',
        quantity: '300',
        netSale: '550',
        costOfGoods: '350'
    }, {
        date: '2-1-2013',
        quantity: '650',
        netSale: '750',
        costOfGoods: '450'
    }, {
        date: '3-1-2013',
        quantity: '300',
        netSale: '450',
        costOfGoods: '250'
    }, {
        date: '4-1-2013',
        quantity: '650',
        netSale: '850',
        costOfGoods: '650'
    }, {
        date: '5-1-2013',
        quantity: '100',
        netSale: '350',
        costOfGoods: '150'
    }, {
        date: '6-1-2013',
        quantity: '100',
        netSale: '250',
        costOfGoods: '150'
    }, {
        date: '7-1-2013',
        quantity: '500',
        netSale: '350',
        costOfGoods: '250'
    }, {
        date: '8-1-2013',
        quantity: '500',
        netSale: '750',
        costOfGoods: '550'
    }, {
        date: '9-1-2013',
        quantity: '650',
        netSale: '850',
        costOfGoods: '550'
    }, {
        date: '10-1-2013',
        quantity: '300',
        netSale: '550',
        costOfGoods: '350'
    }, {
        date: '11-1-2013',
        quantity: '100',
        netSale: '350',
        costOfGoods: '250'
    }, {
        date: '12-1-2013',
        quantity: '150',
        netSale: '450',
        costOfGoods: '150'
    }];

    var maxRows = orderInfoPre.length.toString();

    var orderInfo = [];
    for (i = 0; i < orderInfoPre.length; i++) {
        orderInfo[i] = {
            date: new Date(orderInfoPre[i].date.split("-")[2], orderInfoPre[i].date.split("-")[0], orderInfoPre[i].date.split("-")[1], 0, 0, 0, 0),
            quantity: orderInfoPre[i].quantity,
            netSale: orderInfoPre[i].netSale,
            costOfGoods: orderInfoPre[i].costOfGoods
        };
    }

    $scope.orderInfo = orderInfo;
    $scope.table = {
        rowLimit: orderInfo.length,
        orderBy: '',
        maxRow: maxRows
    };

    $scope.onDateClick = function() {
        $scope.table.orderBy = 'date';
    }

    $scope.onQuantityClick = function() {
        $scope.table.orderBy = 'quantity';
    }

    $scope.onNetSalesClick = function() {
        $scope.table.orderBy = 'netSale';
    }

    $scope.onCostOfGoodsClick = function() {
        $scope.table.orderBy = 'costOfGoods';
    }
}]);
