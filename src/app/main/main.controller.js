(function() {
  'use strict';

  angular
    .module('addressBookExercise')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    activate();

    function activate() {
      // noop
    }
  }
})();
