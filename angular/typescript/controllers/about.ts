/// <reference path="../reference.ts" />

module dt {
  'use strict';
  export module webapp {
    interface IAboutCtrlScope extends ng.IScope {
      awesomeThings: Array<string>;
    }

    export class AboutCtrl {
      constructor(private $scope: IAboutCtrlScope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }
    }
  }
}
