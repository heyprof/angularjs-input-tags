import app from './app.module';
import {MAX_SAFE_INTEGER} from './input-tags.constants';

/**
 * @ngdoc component
 * @name inputTags
 * @module angularjs-input-tags
 *
 * @description
 * Renders an input box with tag editing support.
 */
class InputTags {
  constructor($element) {
    this.$element = $element;
  }

  $onInit() {
    this.autocompleteVisible = false;
    this.element = this.$element[0];

    this.tags = this.tags || [];
    this.suggestions = this.suggestions || {};
    this.displayProperty = this.displayProperty || 'text';
    this.keyProperty = this.keyProperty || this.displayProperty;
    this.placeholder = this.placeholder || 'Add a tag';
    this.spellcheck = this.spellcheck || true;
    this.maxLength = this.maxLength || MAX_SAFE_INTEGER;
    this.inputDebounce = this.inputDebounce || 125;

    this.reset();
  }

  track(tag) {
    return tag[this.keyProperty];
  }

  getTagText(tag) {
    return tag[this.displayProperty];
  }

  isTagValid(tag) {
    const tagText = this.getTagText(tag);
    const key = this.keyProperty;
    return tagText &&
      this.tags.length <= this.maxLength &&
      !this.tags.some(element => element[key] === tag[key]);
  }

  addTag(tag) {
    const valid = this.isTagValid(tag);

    this.emit('onTagAdding', {tag});

    if (valid) {
      this.tags.push(tag);
      this.emit('onTagAdded', {tag});
    } else {
      this.emit('onTagAddFailed', {tag});
    }

    return tag;
  }

  isTagAdded(tag) {
    return this.tags.find(eTag => eTag[this.keyProperty] === tag[this.keyProperty]);
  }

  removeTag(tag) {
    this.emit('onTagRemoving', {tag});

    for (let i = this.tags.length - 1; i >= 0; i--) {
      if (this.tags[i].code === tag.code) {
        this.tags.splice(i, 1);
      }
    }

    this.emit('onTagRemoved', {tag});
    return tag;
  }

  inputChange() {
    this.emit('inputChanged', {
      inputValue: this.inputSearch
    });
  }

  triggerFocus() {
    this.autocompleteVisible = true;
  }

  triggerBlur(e) {
    if (e && this.element.contains(e.explicitOriginalTarget.parentNode)) {
      this.$element.find('input')[0].focus();
    } else {
      this.autocompleteVisible = false;
      this.reset();
    }
  }

  reset() {
    this.currentItem = this.suggestions;
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
      this.suggestions;
  }

  emit(action, ...params) {
    if (this[action] && typeof this[action] === 'function') {
      this[action].apply(this, params);
    }
  }
}

const InputTagsComponent = {
  template: require('./input-tags.template.html'),
  controller: InputTags,
  bindings: {
    displayProperty: '@',
    keyProperty: '@',
    placeholder: '@',
    tabindex: '@',
    spellcheck: '@',
    maxLength: '@',
    inputDebounce: '@',
    itemBackClass: '@',
    itemNextClass: '@',
    itemCheckClass: '@',
    removeTagClass: '@',
    tags: '<',
    suggestions: '<',
    disabled: '<',
    inputChanged: '&',
    onTagAdding: '&',
    onTagAdded: '&',
    onTagAddFailed: '&',
    onTagRemoving: '&',
    onTagRemoved: '&',
    onTagClicked: '&'
  }
};

app.component('inputTags', InputTagsComponent);
