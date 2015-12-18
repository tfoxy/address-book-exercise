(function() {
  'use strict';

  angular
    .module('addressBookExercise')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
