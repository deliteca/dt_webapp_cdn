/// <reference path="../../.tmp/typings/tsd.d.ts" />

module dt.webapp  {
  'use strict';

  angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])

    .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
    });
}
