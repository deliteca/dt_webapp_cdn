/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class NodeList extends bases.IsolatedDirective {
    scope = {
      nodes: '&list'
    }

    templateUrl = 'app/components/nodes/node-list.tpl.html';

    controller = 'dtWaNodeListCtrl';
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
