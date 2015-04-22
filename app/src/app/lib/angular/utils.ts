/// <reference path="../../index.ts" />

module dt.webapp.utils  {
  'use strict';

  // Utilities
  export function registerDirective(appModule, name : string, controller: any, directive: any, inject: Array<string> = null) {

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
