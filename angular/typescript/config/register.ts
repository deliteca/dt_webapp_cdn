/// <reference path="../app.ts" />

module dt {
  'use strict';

  export module webapp {
    // Register routes
    ng
      .config(function ($routeProvider) {
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
