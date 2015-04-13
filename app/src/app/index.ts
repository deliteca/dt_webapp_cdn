/// <reference path="reference.ts" />

module dt.webapp  {
  'use strict';

//   var appModule = angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angular-lodash'])
  var appModule = angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
    .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
    });


  // Utilities
  export function register_directive(name : string, controller: any, directive: any) {
    directive.prototype.controller = controllerName(name);
    appModule.controller(controllerName(name), controller);
    appModule.directive(directiveName(name), () => new directive());
  }

  export function directiveName(name : string) {
    return 'dtWa' + name;
  }

  export function controllerName(name : string) {
    return directiveName(name) + 'Ctrl';
  }


}
