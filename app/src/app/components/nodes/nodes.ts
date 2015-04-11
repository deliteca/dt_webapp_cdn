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
    fake = {
      'foo': '/',
      'children': [['bar', 'foobar'], ['baz', 'foobaz']]
    }

    name() : string {
      return this.fake[this.uid];
    }

    list() {
      return this.fake.children;
    }
  }

  register_directive('Nodes', MyController, Nodes);
}
