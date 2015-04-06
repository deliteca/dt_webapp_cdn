/// <reference path="../reference.ts" />

module dt {
  'use strict';

  interface IAboutCtrlScope extends ng.IScope {
    awesomeThings: Array<string>;
  }

  export class AboutCtrl {
    constructor(public $scope: IAboutCtrlScope) {
      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      ];
    }
  }
}
