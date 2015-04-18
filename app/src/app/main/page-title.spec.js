/// <reference path="../reference.ts" />
'use strict';

describe('Page Title:', function() {
  var stateProvider, compile, rootScope, httpBackend, scope;

  var A = {}; 
  var B = {
    data: {pageTitle: 'foo'}
  };

  beforeEach(module('dt.webapp'));

  beforeEach(module(function($stateProvider) {
    stateProvider = $stateProvider;

    stateProvider
    .state('A', A)
    .state('B', B);

  }));

  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    compile = $compile;
    rootScope = $rootScope;
    scope = rootScope.$new();
    httpBackend = $httpBackend;
  }));

  function create(html) {
    var elm = angular.element(html);
    // will call compile and link of the directive
    elm = compile(elm)(scope);
    return elm;
  }

  it('should be "title" by default', inject(function($state, $timeout) {
    httpBackend.when('GET', 'app/modules/home/home.html').respond({});
    httpBackend.when('GET', 'app/modules/home/tabs.html').respond({});

    var html = '<div dt-wa-page-title prefix="bar"></div>';
    
    // compile and link the directive using the $compile service
    var elm = create(html);
    
    // broadcast the stateChangeSuccess event
    $state.transitionTo(B);
    
    // cause the $stateChangeSuccess event listener to fire
    scope.$apply();
    
    // expire the timeout
     $timeout.flush();
     expect(elm.text()).toBe('bar - foo');
  }));
});
