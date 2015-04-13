/// <reference path="../../reference.ts" />
'use strict';

describe('Nodes', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  var $httpBackend;
  var $templateCache;
  // create mock module
  beforeEach(module('app'));

  // inject mocks so lookup the corresponding mock API docs
  beforeEach(inject(function($controller, _$rootScope_, _$compile_, _$httpBackend_, _$templateCache_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    $templateCache = _$templateCache_
    // create a controller
    controller = $controller(dt.webapp.controllerName('Nodes'),
                             {/* no locals */},
                             { uid : 'foo'} /* bindings */
                            );
  }));

  it('should get name', function() {
    expect(controller.getName()).toEqual('/');
  });

  describe('Nodes directive', function() {

    function create() {
      var url = 'app/components/nodes/node-list.html';
      var cache = $templateCache.get(url);
      cache || $httpBackend.when('GET', url).respond('<dt-wa-node-list></dt-wa-node-list>');
      var html = angular.element('<dt-wa-nodes uid="foo"></dt-wa-nodes>');
      var elm = $compile(html)(scope);
      cache || $httpBackend.flush();
      // create a new controller and bind to the directive
      scope.$digest();
      return elm;
    }

    it('should generate an attr uid', function() {
      var elm = create();
      expect(elm.attr('uid')).toEqual('foo');
    });

    it('should have one dt-wa-node-list element', function() {
      var elm = create();
      expect(elm.eq(0).find('dt-wa-node-list').length).toBe(1);
    });

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});
