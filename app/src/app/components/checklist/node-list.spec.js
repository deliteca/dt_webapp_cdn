'use strict';

describe('NodeList', function() {
  var scope;
  var $compile;
  var $rootScope;
  var controller;
  var $httpBackend;
  var get_data = function() {
    return _.zipObject(['bar', 'baz'], ['foobar', 'foobaz']);
  }
  // create mock module
  beforeEach(module('dt.webapp'));

  beforeEach(inject(function($controller, _$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
  }));

  function create() {
    var elm; 
    var html = '<dt-wa-node-list list="getData()"></dt-wa-node-list>';
    scope.getData = get_data;
    elm = angular.element(html);
    elm = $compile(elm)(scope);
    // create a new controller and bind to the directive
    scope.$apply();
    return elm;
  }

  it('should have nodes bind to controller', function() {
    var elm = create();
    var ctrl = elm.isolateScope().ctrl
    expect(ctrl.nodes).toBeDefined();
  });

  it('should have 3 ng-repeat', function() {
    var elm = create();
    var expected_size = Object.keys(get_data()).length
    expect(elm.find('[ng-repeat]').length).toBe(expected_size);
  });

});

// Others: could be useful
//      var template = '<div><ul><li ng-repeat="(key, val) in ctrl.list()">{{key}} {{val}}</li></ul></div>';
//      // Use when to fake return
//      $httpBackend.when('GET', 'app/components/nodes/node-list.html').respond(200, '');
//      // Use expect to check if there is outstanding request not made
//      $httpBackend.expectGET('app/components/nodes/node-list.html').respond(template);
//      spyOn(controller, 'list').and.callThrough();
//      $httpBackend.flush();
//      elm.scope().$apply();

