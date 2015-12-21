(function() {
  'use strict';

  angular
    .module('addressBookExercise')
    .run(fillRootScope);

  function fillRootScope($rootScope, $state, $stateParams, OAuth) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.name !== 'app.login' && !OAuth.isAuthenticated()) {
        event.preventDefault();
        $state.go('app.login', {errorReason: 'Login required'});
      }
    });
  }

})();
