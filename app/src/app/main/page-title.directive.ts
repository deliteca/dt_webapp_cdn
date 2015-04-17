/// <reference path="../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class PageTitle implements ng.IDirective {

    /*@ngInject*/
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

//  var appModule = angular.module('dt.webapp');

//  appModule.directive(dt.webapp.directiveName('PageTitle'), ['$rootScope', '$timeout', ($rootScope, $timeout) => {
//    return new PageTitle($rootScope, $timeout);
//  }]);

  dt.webapp.registerDirective('PageTitle', null, PageTitle, ['$rootScope', '$timeout']);

}
