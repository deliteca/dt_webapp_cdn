/// <reference path="../reference.ts" />
module dt {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('angularApp'));

    var ctrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
      ctrl = new webapp.controllers.MainCtrl(scope);
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });

}
