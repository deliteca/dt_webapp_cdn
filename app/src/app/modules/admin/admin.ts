/// <reference path="../../reference.ts" />

module dt.webapp.admin  {
  'use strict';
  angular.module('dt.wa.admin', ['ui.router', 'ngMaterial', 'ngResource'])
    .config(configure_routes);

  /*@ngInject*/
  function configure_routes($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('admin', {
        data : {
          pageTitle : 'Admin'
        },
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
