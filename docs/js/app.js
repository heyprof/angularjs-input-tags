(function () {
  'use strict';

  angular
    .module('app', ['angularjs-input-tags'])
    .controller('SearchController', searchCtrl);

  function searchCtrl() {
    const vm = this;

    vm.$onInit = () => {
      vm.tags = [];
      vm.suggestions = {title: '', data: []};
      vm.updateSuggestions();
    };

    function flat(r, a) {
      r.push(a);
      if (Array.isArray(a.data)) {
        return a.data.reduce(flat, r);
      }
      return r;
    }

    const mock = {
      title: 'root',
      data: [
        {
          code: 1,
          title: '1',
          data: [{
            code: 10,
            title: '10',
            data: [
              {code: 100, title: '100'},
              {code: 101, title: '101'},
              {code: 102, title: '102'}
            ]
          }, {
            code: 11, title: '11'
          }, {
            code: 12,
            title: '12',
            data: [
              {code: 120, title: '120'},
              {code: 121, title: '121'},
              {code: 122, title: '122'}
            ]
          }]
        },
        {code: 2, title: '2'},
        {
          code: 3,
          title: '3',
          data: [{
            code: 30,
            title: '30',
            data: [
              {code: 300, title: '300'},
              {code: 301, title: '301'},
              {code: 302, title: '302'}
            ]
          }, {
            code: 31, title: '31'
          }, {
            code: 32,
            title: '32',
            data: [
              {code: 320, title: '320'},
              {code: 321, title: '321'},
              {code: 322, title: '322'}
            ]
          }]
        }
      ]
    };

    vm.updateSuggestions = search => {
      const result = search ? mock.data.reduce(flat, []).filter(elem => {
        return String(elem.title).indexOf(String(search)) >= 0;
      }) : mock.data;

      vm.suggestions.data.length = 0;
      vm.suggestions.title = mock.title;
      Array.prototype.push.apply(vm.suggestions.data, result);
    };
  }
})();
