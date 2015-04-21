/// <reference path="../../reference.ts" />

module dt.webapp {
  var appModule = angular.module('dt.webapp');
  appModule.controller('NavCtrl', NavCtrl);

  /*@ngInject*/
  function NavCtrl($scope, $document) {

    $document.ready(() => {
      var menuToggle = $document.find('#js-mobile-menu').unbind();
      $document.find('#js-navigation-menu').removeClass('show');

      menuToggle.on('click', function(e) {
        e.preventDefault();
        $document.find('#js-navigation-menu').slideToggle(function(){
          if ($document.find('#js-navigation-menu').is(':hidden')) {
            $document.find('#js-navigation-menu').removeAttr('style');
          }
        });
      });
    });
  }
}
