/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
module dt.webapp {
  'use strict';

  interface INavbarScope extends ng.IScope {
    date: Date
  }

  export class NavbarCtrl {
    /* @ngInject */
    constructor ($scope: INavbarScope) {
      $scope.date = new Date();
    }
  }

}