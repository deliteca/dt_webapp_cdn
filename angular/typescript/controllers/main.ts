/// <reference path="../reference.ts" />

module dt {
  'use strict';
  interface IMainCtrlScope extends ng.IScope {
    awesomeThings: Array<string>;
  }

  export class MainCtrl {
    constructor(public $scope: IMainCtrlScope) {
      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      ];
    }
  }
}
