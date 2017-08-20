import {MAX_SAFE_INTEGER} from './input-tags.constants';
import AutoCompleteComponent from './auto-complete.component';
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
  $onInit() {
    this.autocompleteVisible = false;

    this.tags = this.tags || [];
    this.suggestions = this.suggestions || {};
    this.displayProperty = this.displayProperty || 'text';
    this.keyProperty = this.keyProperty || '';
    this.placeholder = this.placeholder || 'Add a tag';
    this.spellcheck = this.spellcheck || true;
    this.minLength = this.minLength || 1;
    this.maxLength = this.maxLength || MAX_SAFE_INTEGER;
    this.inputDebounce = this.inputDebounce || 125;
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
      tagText.length >= this.minLength &&
      tagText.length <= this.maxLength &&
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
    if (this.getSuggestions) {
      this.getSuggestions(this.inputSearch);
    }
  }

  triggerFocus() {
    this.autocompleteVisible = true;
  }

  triggerBlur() {
    this.autocompleteVisible = false;
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
    minLength: '@',
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

angular.module('angularjs-input-tags', [])
  .component('inputTags', InputTagsComponent)
  .component('inputTagsAutoComplete', AutoCompleteComponent);
