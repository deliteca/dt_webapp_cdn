/// <reference path="../reference.ts" />

interface IUserData {
  name : string;
}

module dt {
'use strict';
  export module webApp.services {
    export interface IUserService {
      get() : ng.IPromise< IUserData >;
      save(userData : IUserData) : ng.IPromise< IUserData >;
  }

    export class UserService {
      constructor(private $q : ng.IQService) {

      }

      public get() : ng.IPromise< IUserData > {
        var deferred = this.$q.defer();
        var data : IUserData = {name: 'bob'};
        // send data to handler in then
        deferred.resolve(data);
        return deferred.promise;
      }

      public save(userData : IUserData) : ng.IPromise< IUserData > {
        var deferred = this.$q.defer();
        deferred.resolve(userData);
        return deferred.promise;
      }
    }

    _ng.service('userService', UserService);
  }
}
