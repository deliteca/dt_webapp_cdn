'use strict';

describe('NodeList', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  var $httpBackend;
  var get_data = function() {
    return _.zipObject(_.zip(['foo', 'bar'], ['foobar', 'foobaz']));
  }
  // create mock module
  beforeEach(module('app'));

  beforeEach(inject(function($controller, _$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
//    controller = $controller(dt.webapp.controllerName('NodeList'), {},
//                             {ctrlNodes: get_data});
  }));

  function create() {
    var elm; 
    var template = '<dt-wa-node-list list="getData()"></dt-wa-node-list>';
    scope.getData = get_data;
    var html = angular.element(template);
    elm = $compile(html)(scope);
    scope.$apply();
    return elm;
  }

  it('should return a valid html', function() {
    var elm = create();
    console.log(elm.isolateScope().$$isolateBindings.nodes);
    var ctrl = elm.isolateScope().ctrl
    expect(ctrl.nodes).toBeDefined();
  });

});

// Others: could be useful
//      var template = '<div><ul><li ng-repeat="(key, val) in ctrl.list()">{{key}} {{val}}</li></ul></div>';
//      $httpBackend.whenGET('app/components/nodes/node-list.html').respond(200, '');
//      $httpBackend.expectGET('app/components/nodes/node-list.html').respond(template);


//      spyOn(controller, 'list').and.callThrough();
//      $httpBackend.flush();
//      elm.scope().$apply();

