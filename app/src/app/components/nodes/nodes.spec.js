/// <reference path="../../reference.ts" />
'use strict';

describe('Nodes', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  // create mock module
  beforeEach(module('app'));

  // inject mocks so lookup the corresponding mock API docs
  beforeEach(inject(function($controller, _$rootScope_, _$compile_, $httpBackend) {
    $httpBackend.whenGET('app/components/nodes/nodes.html').respond(200, '<div>ctrl.name()</div>');
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    controller = $controller(dt.webapp.controllerName('Nodes'),
                             {/* no locals */},
                             { uid : 'foo'} /* bindings */
                            );
  }));

  it('should have a defined isolateScope', function() {
    var html = angular.element('<dt-wa-nodes uid="foo"></dt-wa-nodes>');
    var elm = $compile(html)(scope);
    scope.$digest();
//    expect(elm.isolateScope()).not.toBeDefined();
    expect(elm.attr('uid')).toEqual('foo');
  });

  it('should get name', function() {
    expect(controller.name()).toEqual('/');
  });
});
