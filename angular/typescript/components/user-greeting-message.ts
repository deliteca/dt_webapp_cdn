/// <reference path="../reference.ts" />

module dt {
'use strict';

  export module webapp.directives {

    export class UserGreetingMessage implements ng.IDirective {
      scope = {
        user: '=',
        saveCallback: '&onSave'
      };

      template = '<p>Hello ' +
      '<editable-user-name ' +
        'user="ctrl.user" ' +
        'on-save="ctrl.handleSave(user)">' +
      '</editable-user-name></p>';

      controller = 'userGreetingMessageCtrl';

      bindToController = true;

      controllerAs = 'ctrl';
     
    }

    class MyController {
      saveCallback : (any) => void;

      handleSave(user ) {
          this.saveCallback({user : user});
      }
    }

    ng.controller('userGreetingMessageCtrl', MyController);

    ng.directive('userGreetingMessage', () => new UserGreetingMessage());
  }

}
