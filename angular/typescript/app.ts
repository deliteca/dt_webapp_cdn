/// <reference path="reference.ts" />

module dt {
  'use strict';
  export module webApp {
    export var _ng = angular.module('angularApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ]);
    
    
    // Register routes
    _ng.config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
  }
}


