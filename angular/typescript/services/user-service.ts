/// <reference path="../reference.ts" />

interface IUserData {
  name : string;
}

module dt {
'use strict';
  export module webapp.services {
    export class UserService {
      constructor(private $q : ng.IQService) {

      }

      public get() : ng.IPromise< IUserData > {
        var deferred = this.$q.defer();
        var data : IUserData = {name: 'bob'};
        deferred.resolve(data);
        return deferred.promise;
      }
    }
  }
}
