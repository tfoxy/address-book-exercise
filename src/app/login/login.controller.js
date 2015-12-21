(function() {
  'use strict';

  angular
    .module('addressBookExercise.login')
    .controller('LoginController', LoginController);

  function LoginController(OAuth, $state, $stateParams) {
    var vm = this;

    vm.user = {};
    vm.submit = submit;
    vm.errorReason = $stateParams.errorReason;

    activate();

    function activate() {
      // noop
    }

    function submit() {
      OAuth.getAccessToken(vm.user).then(function() {
        $state.go('app.contacts');
      }, function(response) {
        vm.errorReason = response.data &&
            response.data.error_description ||
            'Login error';
      });
    }
  }
})();
