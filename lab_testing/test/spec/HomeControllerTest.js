'use strict';

/* jasmine specs for controllers go here */

describe('Home Controller', function(){
    beforeEach(module('LemonAide'));

    //We don't have to write our injection within a beforeEach
    it('should be defined', inject(function(_$controller_) {
        //spec body
        var homeController = _$controller_('HomeController', { $scope: {}, $rootScope: {} });
        expect(homeController).toBeDefined();
    }));

});