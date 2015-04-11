/// <reference path="../reference.ts" />

module  dt.webapp.bases {
  'use strict';

  export class IsolatedDirective implements ng.IDirective {
    scope = {};
    bindToController = true;
    controllerAs = 'ctrl';
  }
}
