/// <reference path="../reference.ts" />

module dt {
'use strict';

  export module webapp.directives {

    export class EditableUserName implements ng.IDirective {

      scope = {
        user: '=',
        saveCallback: '&onSave'
      };

      template = '<span>' +
        '<span class="view" ng-dblclick="ctrl.edit()" ng-show="!ctrl.isEditing()">' +
          '{{ ctrl.user.name }}' +
        '</span>' +
        '<form ng-submit="ctrl.handleSave()">' +
          '<input ng-show="ctrl.isEditing()" ng-model="ctrl.userForm.name" ng-blur="ctrl.reset()" />' +
        '</form>' +
      '</span>';

      controller = 'editableUserNameCtrl';

      bindToController = true;

      controllerAs = 'ctrl';
     
    }

    class MyController {
      user;
      userForm = null;
      saveCallback : (any) => void;
      constructor(private $element : HTMLElement) {
      }

      edit() {
        this.userForm = _.extend({}, this.user);
      }

      reset() {
        this.userForm = null;
      }

      isEditing() {
        return !!this.userForm;
      }

      handleSave() {
        this.saveCallback({user: this.userForm});
        this.reset();
      }

    }

    ng.controller('editableUserNameCtrl', MyController);

    ng.directive('editableUserName', () => new EditableUserName());
  }

}
