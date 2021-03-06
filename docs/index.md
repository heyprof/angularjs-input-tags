## Install

- npm: `npm install --save angularjs-input-tags`
- bower: `bower install --save angularjs-input-tags`

## Demo

<input-tags tags="$ctrl.tags"
            suggestions="$ctrl.suggestions"
            key-property="code"
            display-property="title"
            get-suggestions="$ctrl.updateSuggestions">
</input-tags>

## Usage

Add module to your app:

```javascript
angular.module('app', ['angularjs-input-tags']);
```

And the component where you want in this app:

```html
<input-tags tags="$sctrl.tags"
            suggestions="$ctrl.suggestions"
            key-property="code"
            get-suggestions="$ctrl.updateSuggestions"
            display-property="title">
</input-tags>
```

Fill data in a controller:

```javascript
angular.module('app').controller('SearchController', searchCtrl);

function searchCtrl() {
  const vm = this;

  vm.$onInit = () => {
    vm.tags = [{
      code: 'default',
      title: 'root'
    }];

    vm.suggestions = {
      title: 'root',
      data: [{
        code: 1,
        title: '1',
        data: [/* Another nested list of items for multilevel purposes */]},
      ]
    };
  }

  vm.updateSuggestions = search => {
    const newSuggestions = getNewSuggestionsFunctions(search);

    vm.suggestions.title = newSuggestions.title;
    vm.suggestions.data.length = 0;
    Array.push.apply(vm.suggestions.data, newSuggestions.data);
  }
}
```

## LICENCE MIT

The MIT License (MIT)

Copyright (c) 2017 HeyProf!

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
