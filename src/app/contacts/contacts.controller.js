(function() {
  'use strict';

  angular
    .module('addressBookExercise.contacts')
    .controller('ContactsController', ContactsController);

  function ContactsController(NgTableParams, Restangular) {
    var vm = this;

    vm.filter = '';
    vm.tableParams = new NgTableParams({}, {
      getData: getTableData
    });

    activate();

    function activate() {
      // noop
    }

    function getTableData(params) {
      return Restangular.one('users', 'me').all('contacts').getList({
        page: params.page(),
        per: params.count(),
        filter: vm.filter
      }).then(function(data) {
        params.total(data.pagination.count);
        return data.response;
      });
    }
  }
})();
