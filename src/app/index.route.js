(function() {
  'use strict';

  var _OAuth_;

  angular
    .module('addressBookExercise')
    .config(routerConfig)
    .run(routerRun);

  /** @ngInject */
  function routerConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise(function() {
      return _OAuth_.isAuthenticated() ? '/contacts' : '/login';
    });

    $stateProvider.state('app', {
      abstract: true
    });
  }

  function routerRun(OAuth) {
    _OAuth_ = OAuth;
  }

})();
