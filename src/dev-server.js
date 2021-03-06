import angular from 'angular'

import './input-tags.component'

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
}

class DevServer {
  $onInit () {
    this.tags = []
    this.disabled = false
    this.suggestions = {title: '', data: []}
    this.updateSuggestions()
  }

  flat (accumulator, currentValue) {
    accumulator.push(currentValue)
    if (Array.isArray(currentValue.data)) {
      return currentValue.data.reduce(this.flat, accumulator)
    }
    return accumulator
  }

  onTagAdd (tag) {
    console.log(tag)
  }

  updateSuggestions (search) {
    const newSuggestions = this.searchSuggestions(search)

    this.suggestions.data.length = 0
    this.suggestions.title = newSuggestions.title
    Array.prototype.push.apply(this.suggestions.data, newSuggestions.data)
  }

  searchSuggestions (search) {
    return {
      title: mock.title,
      data: (search ? mock.data.reduce(this.flat, []).filter(elem => {
        return String(elem.title).indexOf(String(search)) >= 0
      }) : mock.data)
    }
  }
}

angular.module('dev-server', ['angularjs-input-tags'])
  .component('devServer', {
    template: `
    <input-tags tags="$ctrl.tags"
                suggestions="$ctrl.suggestions"
                disabled="$ctrl.disabled"
                key-property="code"
                on-tag-added="$ctrl.onTagAdd(tag)"
                item-back-class="classAdedd classBack"
                item-next-class="classAdedd classNext"
                item-check-class="classAdedd classCheck"
                remove-tag-class="classAdedd classRemove"
                display-property="title"
                get-suggestions="$ctrl.updateSuggestions"></input-tags>
    <pre>
      {{$ctrl.tags | json}}
    </pre>`,
    controller: DevServer
  })
