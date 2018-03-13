import {MAX_SAFE_INTEGER} from './input-tags.constants';
import './input-tags.style.scss';

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
    this.keyProperty = this.keyProperty || '';
    this.placeholder = this.placeholder || 'Add a tag';
    this.spellcheck = this.spellcheck || true;
    this.maxLength = this.maxLength || MAX_SAFE_INTEGER;
    this.inputDebounce = this.inputDebounce || 125;

    this.reset();
  }

  track(tag) {
    return tag[this.keyProperty || this.displayProperty];
  }

  getTagText(tag) {
    return tag[this.displayProperty];
  }

  addTag(tag) {
    const tagText = this.getTagText(tag);
    const key = this.keyProperty || this.displayProperty;
    const valid = tagText &&
      this.tags.length <= this.maxLength &&
      !this.tags.some(element => element[key] === tag[key]);

    if (this.onTagAdding) {
      this.onTagAdding(tag);
    }

    if (valid) {
      this.tags.push(tag);

      if (this.onTagAdded) {
        this.onTagAdded(tag);
      }
    } else if (this.onTagAddFailed) {
      this.onTagAddFailed(tag);
    }

    return tag;
  }

  removeTag(tag) {
    if (this.onTagRemoving) {
      this.onTagRemoving(tag);
    }

    for (let i = this.tags.length - 1; i >= 0; i--) {
      if (this.tags[i].code === tag.code) {
        this.tags.splice(i, 1);
      }
    }

    if (this.onTagRemoved) {
      this.onTagRemoved(tag);
    }

    return tag;
  }

  inputChange() {
    // TODO: Rename `getSuggestions` into something like `inputChanged`
    if (this.getSuggestions) {
      this.getSuggestions(this.inputSearch);
    }
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
    tags: '<',
    suggestions: '<',
    disabled: '<',
    getSuggestions: '<',
    onTagAdding: '<',
    onTagAdded: '<',
    onTagAddFailed: '<',
    onTagRemoving: '<',
    onTagRemoved: '<',
    onTagClicked: '<'
  }
};

InputTagsComponent.$inject = ['$element'];

angular.module('angularjs-input-tags', [])
  .component('inputTags', InputTagsComponent);
