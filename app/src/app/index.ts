/// <reference path="reference.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module dt.webapp  {
  'use strict';

  var appModule = angular.module('app', ['ngResource', 'ui.router'])
    .controller('MainNavCtrl', MainNavCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
      .state('yeo', {
        url: '/yeo',
        templateUrl: 'app/main/main-nav.html',
        controller: 'MainNavCtrl'
      })
    .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });


    $urlRouterProvider.otherwise('/');
    });


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
