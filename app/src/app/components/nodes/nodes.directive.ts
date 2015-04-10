/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class Nodes implements ng.IDirective { 
    scope = {
      uid: '@'
    }

    templateUrl = 'app/components/nodes/nodes.html';

    controller = 'dtWebAppNodesCtrl';

    bindToController = true;

    controllerAs = 'ctrl';
  }

  class MyController {
    uid : string;
  }

  angular.module('app').controller('dtWebAppNodesCtrl', MyController);
  angular.module('app').directive('dtWebAppNodes', () => new Nodes());
}
