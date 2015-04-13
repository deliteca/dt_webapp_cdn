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
      'uids': ['bar', 'baz'],
      'names': ['foobar', 'foobaz']
    }

    getName() : string {
      return '/';
    }

    getData() {
      var res  = _.zipObject(this.data.uids, this.data.names);
      return res;
    }
  }

  register_directive('Nodes', MyController, Nodes);
}
