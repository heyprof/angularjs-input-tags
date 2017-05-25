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
    this.suggestions = this.suggestions || [];
    this.displayProperty = this.displayProperty || 'text';
    this.keyProperty = this.keyProperty || '';
    this.placeholder = this.placeholder || 'Add a tag';
    this.spellcheck = this.spellcheck || true;
    this.minLength = this.minLength || 1;
    this.maxLength = this.maxLength || MAX_SAFE_INTEGER;
  }

  inputText(value) {
    if (angular.isDefined(value)) {
      this.text = value;
    }
    return this.text || '';
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
    }

    return tag;
  }

  removeTag(tag) {
    this.tags = this.tags.filter(obj => obj.code !== tag.code);

    if (this.onTagRemoving) {
      this.onTagRemoving(tag);
    }
    return tag;
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
    tags: '<',
    suggestions: '<',
    disabled: '<',
    onTagAdding: '&',
    onTagAdded: '&',
    onTagRemoving: '&',
    onTagClicked: '&'
  }
};

angular.module('angularjs-input-tags', [])
  .component('inputTags', InputTagsComponent)
  .component('inputTagsAutoComplete', AutoCompleteComponent);
