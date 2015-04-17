/// <reference path="reference.ts" />


module dt.webapp  {
  'use strict';

  var appModule = angular.module('dt.webapp', ['dt.wa.admin', 'dt.wa.home'])
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

  // Utilities
  export function registerDirective(name : string, controller: any, directive: any, inject: Array<string> = null) {

    if (controller) {
      directive.prototype.controller = controllerName(name);
      appModule.controller(controllerName(name), controller);
    }

    if (inject) {
      var _new = (klass: any, args: any) => {
        var o = Object.create(klass.prototype);
        return klass.apply(o, args) || o;
      };

      var _directive_factory = (...args: any[]) => {
        return _new(directive, args);
      };

      _directive_factory.$inject = inject;
      appModule.directive(directiveName(name), _directive_factory);
    } else {
      appModule.directive(directiveName(name), () => new directive());
    }
  }

  export function directiveName(name : string) {
    return 'dtWa' + name;
  }

  export function controllerName(name : string) {
    return directiveName(name) + 'Ctrl';
  }

}
