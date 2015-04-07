/// <reference path="../reference.ts" />

module dt {
  'use strict';
  export module webapp {
    
    // Register routes
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

    
    // Register controllers
    ng
    .controller('MainCtrl', controllers.MainCtrl);


    // Register services
    ng
    .service('UserService', services.UserService);
  }
}
