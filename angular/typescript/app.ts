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


