/// <reference path="../reference.ts" />

module dt {
  'use strict';

  export module webapp.directives {

    export class UserGreeting implements ng.IDirective {

      template = '<user-greeting-message user="ctrl.user" ' +
        'on-save="ctrl.handleSave(user)"></user-gretting-message>';

      controller = 'userGreetingCtrl';

      bindToController = true;

      controllerAs = 'ctrl';

    }

    class MyController {
      user;
      constructor(private userService : services.IUserService) {
        this.userService.get().then((user) => {
          this.user = user;
        });
      }

      handleSave(user ) {
        this.userService.save(user).then((data) => {
          this.user = data;
        });
      }
    }

    ng.controller('userGreetingCtrl', MyController);

    ng.directive('userGreeting', () => new UserGreeting());
  }

}
