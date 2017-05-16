/**
 * @ngdoc component
 * @name autoComplete
 * @module angularjs-input-tags
 */
class AutoComplete {
  $onInit() {
    this.addTag = tag => this.onTagAdd({tag});
    this.reset();
  }

  reset() {
    this.currentItem = this.source;
    this.path = [];
  }

  next(item) {
    this.currentItem = item;
    this.path.push(item);
  }

  previous() {
    this.path.pop();
    this.currentItem = this.path.length > 0 ?
      this.path[this.path.length - 1] :
      this.source;
  }
}

export default {
  template: require('./auto-complete.template.html'),
  controller: AutoComplete,
  bindings: {
    source: '<',
    matchClass: '<',
    visible: '=',
    onTagAdd: '&'
  }
};
