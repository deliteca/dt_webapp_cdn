/// <reference path="../../reference.ts" />
'use strict';

describe('Nodes', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  var $httpBackend;
  // create mock module
  beforeEach(module('app'));

  // inject mocks so lookup the corresponding mock API docs
  beforeEach(inject(function($controller, _$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    controller = $controller(dt.webapp.controllerName('Nodes'),
                             {/* no locals */},
                             { uid : 'foo'} /* bindings */
                            );
  }));

  it('should get name', function() {
    expect(controller.name()).toEqual('/');
  });

  describe('testing directive', function() {
    var elm; 
    beforeEach(function() {
      var template = '<div>{{ctrl.name()}}</div>';
      $httpBackend.expectGET('app/components/nodes/nodes.html').respond(template);
      var html = angular.element('<dt-wa-nodes uid="foo"></dt-wa-nodes>');
      elm = $compile(html)(scope);
      $httpBackend.flush();
      scope.$digest();
    });

    it('should compiled correctly', function() {
      expect(elm.attr('uid')).toEqual('foo');
    });

    it('should have the correct controller binding', function() {
      expect(elm.html()).toContain('<div class="ng-binding">/</div>');
    });

  });

});
