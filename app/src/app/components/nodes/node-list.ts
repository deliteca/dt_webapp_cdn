/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class NodeList extends bases.IsolatedDirective {
    scope = {
      nodes: '&list'
    }

    templateUrl = 'app/components/nodes/node-list.html';
  }

  class MyController {
    nodes;

    list() {
      return this.nodes();
    }
  }

  registerDirective('NodeList', MyController, NodeList);
}
