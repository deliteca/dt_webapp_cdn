/// <reference path="reference.ts" />


module dt.webapp  {
  'use strict';

  var appModule = angular.module('app', ['ngResource', 'ui.router', 'ngMaterial'])
    .config(configure_routes)
    .run(attach_state_to_scope);

  /*@ngInject*/
  function configure_routes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'main-content': {
            templateUrl: 'app/main/main.html'
          }
        }
      });

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
  export function registerDirective(name : string, controller: any, directive: any) {
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


module dt.webapp.utils {
  'use strict';

  export function prepareGet(
      $templateCache : ng.ITemplateCacheService,
      $httpBackend : ng.IHttpBackendService,
      url : string,
      respond : string) {
        var cached = $templateCache.get(url);
        if (cached) { $httpBackend.when('GET', url).respond(respond); }
        return cached;
      }
}
