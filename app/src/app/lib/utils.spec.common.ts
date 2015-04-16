/// <reference path="../reference.ts" />
'use strict';

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
