## angularjs-input-tags [![GitHub release](https://img.shields.io/github/release/heyprof/angularjs-input-tags/all.svg?style=flat-square)](https://github.com/heyprof/angularjs-input-tags/releases) [![Dependencies Status](https://img.shields.io/gemnasium/heyprof/angularjs-input-tags.svg?style=flat-square)](https://gemnasium.com/github.com/heyprof/angularjs-input-tags) [![Travis CI Status](https://img.shields.io/travis/heyprof/angularjs-input-tags.svg?style=flat-square&label=TravisCI)](https://travis-ci.org/heyprof/angularjs-input-tags) [![Code Climate Status](https://img.shields.io/codeclimate/github/heyprof/angularjs-input-tags.svg?style=flat-square)](https://codeclimate.com/github/heyprof/angularjs-input-tags) [![Code Climate Issues](https://img.shields.io/codeclimate/issues/github/heyprof/angularjs-input-tags.svg?style=flat-square)](https://codeclimate.com/github/heyprof/angularjs-input-tags/issues)

### TL;DR

- Demo and docs: [https://heyprof.github.io/angularjs-input-tags/](https://heyprof.github.io/angularjs-input-tags/)
- Install with npm: `npm install angularjs-input-tags --save`
- Install with bower: `bower install angularjs-input-tags --save`
- Develop with `npm install` and `npm run serve`
- Contrib with fork, `npm install`, develop things, `npm run build` and fork request 

### Technical specs:

Features:
- Easy AngularJS 1.5+ Component
- Bootstrap design ready
- Multi-level dropdown selection
- Minimum CSS applied. Use your own !

Incoming-features:
- Autocomplete
- Allow / Permit unknow tags (Allow only from dropdown option)
- Display invalid tag
- Emit Actions
- Reload dropdown data-source on typing
- Customize dropdown suggestions / tag item with provided template

### Usage && Demo

**See [https://heyprof.github.io/angularjs-input-tags/](https://heyprof.github.io/angularjs-input-tags/) for doc and demo.**

### Develop


Start you should play with dependencies: `npm install`

Then you should be able to develop with: `npm run serve` (with hot reload)

Finally, if you want generate the dist folder: `npm run build`

That's it, you can create fork and submit your updates :)

Technical TODOs:
- Yarn ?
- Deploy on npm repos
- create doc with dgeni
- Create tests

- [Npm Guide](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Bower Guide](https://bower.io/docs/creating-packages/)

### Execute tests TODO

*Warning: Actual tests are dummies*

To execute tests you must have bower installed ( `npm install bower` )
then do:

`npm test`

#### Bower link

Bower users can link the project with another to test the package without deploying.

In angularjs-input-tags do:

`npm run bower link`

In the target project do:

`[path to valid bower bin] link angularjs-input-tags`

A symlink of the project will be created in bower_components target project.

### LICENCE MIT

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
