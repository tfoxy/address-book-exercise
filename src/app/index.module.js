(function() {
  'use strict';

  angular
    .module('addressBookExercise', [
      'ui.router',
      'restangular',

      'addressBookExercise.oauth',

      'addressBookExercise.login',
      'addressBookExercise.contacts'
    ]);

})();
