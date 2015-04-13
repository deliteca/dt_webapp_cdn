'use strict';

describe('NodeList', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  var $httpBackend;
  var get_data = function() {
    return _.zipObject(['foo', 'bar'], ['foobar', 'foobaz']);
  }
  // create mock module
  beforeEach(module('app'));

  // inject mocks so lookup the corresponding mock API docs
  beforeEach(inject(function($controller, _$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
    controller = $controller(dt.webapp.controllerName('NodeList'), {},
                             {list: get_data}
                            );
  }));

  describe('NodeList directive', function() {
    var elm; 
    beforeEach(function() {
//      var template = '<div><ul><li ng-repeat="(key, val) in ctrl.list()">{{key}} {{val}}</li></ul></div>';
//      $httpBackend.whenGET('app/components/nodes/node-list.html').respond(200, '');
//      $httpBackend.expectGET('app/components/nodes/node-list.html').respond(template);

      var template2 = '<dt-wa-node-list></dt-wa-node-list>';

      var html = angular.element(template2);
      controller.nodes = get_data;
      spyOn(controller, 'list');
      elm = $compile(html)(scope);
//      $httpBackend.flush();
      scope.$digest();
    });

    it('should return a valid html', function() {
//      console.log(controller.list());
      console.log(elm.html());
//      expect(controller.list).toHaveBeenCalled();
    });


  });

});
