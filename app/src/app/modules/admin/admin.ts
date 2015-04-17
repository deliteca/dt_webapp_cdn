/// <reference path="../../reference.ts" />

module dt.webapp.admin  {
  'use strict';
  var appModule = angular.module('dt.wa.admin', ['ui.router', 'ngMaterial', 'ngResource'])
    .config(configure_routes);

  function configure_routes($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        views: {
          'main-content': {
            templateUrl: 'app/modules/admin/admin.html'
          },
          'main-tabs': {
            templateUrl: 'app/modules/admin/tabs.html'
          }
    }
      });
  }
}
