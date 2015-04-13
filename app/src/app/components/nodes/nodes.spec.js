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
//    console.log(controller.getData());
    expect(controller.getName()).toEqual('/');
  });

  describe('Nodes directive', function() {
    var elm; 
    beforeEach(function() {
//      var template = '<div>{{ctrl.getName()}}</div>';
 //     $httpBackend.expectGET('app/components/nodes/nodes.html').respond(template);

      var html = angular.element('<dt-wa-nodes uid="foo"></dt-wa-nodes>');
      elm = $compile(html)(scope);
//      $httpBackend.flush();
      scope.$digest();
    });

    it('should generate an attr uid', function() {
      expect(elm.attr('uid')).toEqual('foo');
    });

    it('should have the correct controller binding', function() {
//      console.log(elm);
//      expect(elm).toContain('<div class="ng-binding">/</div>');
    });

  });

});
