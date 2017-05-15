(function () {
  'use strict';

  angular
    .module('app', ['angularjs-input-tags'])
    .controller('SearchController', searchCtrl);

  function searchCtrl() {
    const vm = this;

    vm.tags = [{
      code: 'lol',
      title: 'things'
    }];
    vm.suggestions = {
      title: 'root',
      data: [
        {
          code: 1,
          title: '1',
          data: [
            {
              code: 10,
              title: '10',
              data: [
                {code: 100, title: '100'},
                {code: 101, title: '101'},
                {code: 102, title: '102'}
              ]
            },
            {code: 11, title: '11'},
            {
              code: 12,
              title: '12',
              data: [
                {code: 120, title: '120'},
                {code: 121, title: '121'},
                {code: 122, title: '122'}
              ]
            }
          ]
        },
        {code: 2, title: '2'}
      ]
    };
  }
})();
