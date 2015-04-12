/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class Nodes extends bases.IsolatedDirective {
    scope = {
      uid: '@'
    }

    templateUrl = 'app/components/nodes/nodes.html';
  }

  class MyController {
    uid : string;
    data = {
      'foo': '/',
      'children': [['bar', 'foobar'], ['baz', 'foobaz']]
    }

    name() : string {
      return this.data[this.uid];
    }

    list() {
      return this.data.children;
    }
  }

  register_directive('Nodes', MyController, Nodes);
}
