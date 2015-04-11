/// <reference path="reference.ts" />

module dt.webapp  {
  'use strict';

  var appModule = angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])

    .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
    });

  export function register_directive(name : string, controller: any, directive: any) {
    directive.prototype.controller = dtAppNameController(name);
    appModule.controller(dtAppNameController(name), controller);
    appModule.directive(dtAppName(name), () => new directive());
  }

  function dtAppName(name : string) {
    return 'dtWa' + name;
  }

  function dtAppNameController(name : string) {
    return dtAppName(name) + 'Ctrl';
  }
}
