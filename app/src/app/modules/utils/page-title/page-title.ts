/// <reference path="../../../index.ts" />

module dt.webapp.directives {
  'use strict';

  import utils = dt.webapp.utils;

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

  var appModule = angular.module('dt.wa.directives.page-title', ['ui.router']);

  utils.registerDirective(appModule, 'PageTitle', null, PageTitle, ['$rootScope', '$timeout']);

}
