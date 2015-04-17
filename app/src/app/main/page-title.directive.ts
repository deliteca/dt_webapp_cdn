/// <reference path="../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class PageTitle implements ng.IDirective {

    constructor(private $rootScope: any, private $timeout: any) {
    }

    link = (scope: ng.IScope, element: ng.IRootElementService) => {
      var listener = (event: any, toState: any) => {
        var title = 'Delite';
        if (toState.data && toState.data.pageTitle) {
          title = title + ' - ' + toState.data.pageTitle;
        }

        this.$timeout(() => {
          element.text(title);
        }, 0, false);
      };

      this.$rootScope.$on('$stateChangeSuccess', listener);
    }
  }

  dt.webapp.registerDirective('PageTitle', null, PageTitle, ['$rootScope', '$timeout']);

}
