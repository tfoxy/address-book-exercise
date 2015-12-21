(function() {
  'use strict';

  angular.module('addressBookExercise.oauth', [
    'angular-oauth2'
  ])
    .constant('oauth', {
      baseUrl: 'https://contacts.theamalgama.com',
      clientId: 'CLIENT_ID',
      clientSecret: null,
      grantPath: '/oauth/token'
    })
    .config(function oauthConfig(OAuthProvider, oauth) {
      OAuthProvider.configure(oauth);
    })
    .run(function oauthRun($rootScope, $state, OAuth) {
      $rootScope.$on('oauth:error', function(event, rejection) {
        // Ignore `invalid_grant` error - should be catched on `LoginController`.
        if ('invalid_grant' === rejection.data.error) {
          return;
        }

        // Refresh token when a `invalid_token` error occurs.
        if ('invalid_token' === rejection.data.error) {
          return OAuth.getRefreshToken();
        }

        // Redirect to `/login` with the `errorReason`.
        var errorReason = rejection.data &&
            rejection.data.error_description ||
            'Session expired';
        return $state.go('app.login', {errorReason: errorReason});
      });
    });
})();
