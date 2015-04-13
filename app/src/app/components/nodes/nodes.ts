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
      'uids': ['bar', 'baz', 'poo'],
      'names': ['foobar', 'foobaz', 'foopoo']
    }

    getName() : string {
      return '/';
    }

    getData() {
      return _.zipObject(this.data.uids, this.data.names);
    }
  }

  registerDirective('Nodes', MyController, Nodes);
}
