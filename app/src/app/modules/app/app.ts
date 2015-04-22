/// <reference path="../../index.ts" />

module dt.webapp.app  {
  'use strict';

  var dependencies = ['dt.wa.utils'];

  angular.module('dt.wa.app', dependencies)
    .config(configure_routes)
    .run(attach_state_to_scope);

  /*@ngInject*/
  function configure_routes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  /*@ngInject*/
  function attach_state_to_scope($rootScope: any, $state: any, $stateParams: any) {
    // state object
    $rootScope.$state = $state;

    // parameters that pass as part of href
    $rootScope.$stateParams = $stateParams;
  }
}


module dt.webapp.directive  {
  'use strict';

  class App implements ng.IDirective {
    templateUrl = 'app/modules/app/app.html';
  }

  var appModule = angular.module('dt.wa.app');

  utils.registerDirective(appModule, 'App', null, App);

}
