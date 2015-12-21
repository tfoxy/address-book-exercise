(function() {
  'use strict';

  angular
    .module('addressBookExercise')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    RestangularProvider.setBaseUrl('https://contacts.theamalgama.com/v1');
  }

})();
