/// <reference path="../reference.ts" />

module dt {
  'use strict';
  export module webapp {
    ng
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
  }
}
