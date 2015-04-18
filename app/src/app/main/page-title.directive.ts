/// <reference path="../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class PageTitle implements ng.IDirective {

    constructor(private $rootScope, private $timeout) {
    }

    link = (scope, element, attrs) => {
      var listener = (event: any, toState: any) => {

        var title = attrs.prefix || 'Delite';
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
