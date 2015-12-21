(function() {
  'use strict';

  angular
    .module('addressBookExercise.login')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        params: {
          errorReason: ''
        }
      });
  }
})();
