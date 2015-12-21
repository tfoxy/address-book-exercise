(function() {
  'use strict';

  angular
    .module('addressBookExercise.contacts')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsController',
        controllerAs: 'vm'
      });
  }
})();
