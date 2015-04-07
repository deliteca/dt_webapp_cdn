/// <reference path="../reference.ts" />

module dt {
  'use strict';
  export module webapp.controllers {
    interface IMainCtrlScope extends ng.IScope {
      awesomeThings: Array<string>;
    }

    export class MainCtrl {
      constructor(private $scope: IMainCtrlScope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }
    }
  }
}
