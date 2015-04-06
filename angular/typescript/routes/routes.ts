/// <reference path="../reference.ts" />

module dt {
  'use strict';
  export module webapp {
    'usestrict';
    ng
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
  }
}
