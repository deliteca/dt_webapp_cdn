/// <reference path="../../reference.ts" />

module dt.webapp.directives {
  'use strict';

  class Nodes implements ng.IDirective { 
    scope = {
      uid: '@'
    }

    templateUrl = 'app/components/nodes/nodes.tpl.html';

    controller = 'dtWaNodesCtrl';

    bindToController = true;

    controllerAs = 'ctrl';
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
      return this.fake['children'];
    }
  }

  angular.module('app').controller('dtWaNodesCtrl', MyController);
  angular.module('app').directive('dtWaNodes', () => new Nodes());
}
