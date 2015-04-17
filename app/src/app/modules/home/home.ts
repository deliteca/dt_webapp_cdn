/// <reference path="../../reference.ts" />

module dt.webapp.home  {
  'use strict';
  var appModule = angular.module('dt.wa.home', ['ui.router', 'ngMaterial', 'ngResource'])
    .config(configure_routes);

  function configure_routes($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'main-content': {
            templateUrl: 'app/modules/home/home.html'
          },
          'main-tabs': {
            templateUrl: 'app/modules/home/tabs.html'
          }
        }
      });
  }
}
