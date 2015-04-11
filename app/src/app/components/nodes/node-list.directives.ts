/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class NodeList implements ng.IDirective { 
    scope = {
      nodes: '&list'
    }

    templateUrl = 'app/components/nodes/node-list.tpl.html';

    controller = 'dtWaNodeListCtrl';

    bindToController = true;

    controllerAs = 'ctrl';
  }

  class MyController {
    nodes;

    list() {
      return this.nodes();
    }
  }

  angular.module('app').controller('dtWaNodeListCtrl', MyController);
  angular.module('app').directive('dtWaNodeList', () => new NodeList());
}
