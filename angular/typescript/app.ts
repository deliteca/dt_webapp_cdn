/// <reference path="reference.ts" />

module dt {
  'use strict';
  export module webapp {
    'use strict';
    export var ng;
    ng = angular.module('angularApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ]);
  }
}


module dt {
  'use strict';
  export module webapp {
    'use strict';
    ng
    .controller('MainCtrl', MainCtrl)
    .controller('AboutCtrl', AboutCtrl);
  }
}


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
