describe('Module: angularjs-input-tags -', () => {
  let $componentController;
  const locals = {
    $element: angular.element('<div></div>')
  };

  beforeEach(angular.mock.module('angularjs-input-tags'));
  beforeEach(angular.mock.inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  describe('Component: inputTags -', () => {
    describe('Event: onTagAdding', () => {
      it('should be emit', () => {
        const onTagAdding = jasmine.createSpy('onTagAdding');
        const bindings = {onTagAdding};
        const ctrl = $componentController('inputTags', locals, bindings);
        ctrl.$onInit();
        ctrl.addTag({code: 1, text: '1'});
        expect(onTagAdding).toHaveBeenCalled();
      });

      it('should be emit with formatted tag value', () => {
        const onTagAdding = jasmine.createSpy('onTagAdding');
        const bindings = {onTagAdding};
        const ctrl = $componentController('inputTags', locals, bindings);
        ctrl.$onInit();
        ctrl.addTag({code: 1, text: '1'});
        expect(onTagAdding).toHaveBeenCalledWith({code: 1, text: '1'});
      });
    });

    it('should add tag on list', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      expect(ctrl.tags).toContain({code: 1, text: '1'});
    });

    it('should update tag list', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      ctrl.addTag({code: 1, text: '1'});
      ctrl.addTag({code: 1, text: '1'});
      expect(ctrl.tags.length).toBe(1);
    });

    it('should ', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.triggerFocus();
      expect(ctrl.autocompleteVisible).toBe(true);
    });

    it('should ', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.triggerBlur();
      expect(ctrl.autocompleteVisible).toBe(false);
    });

    it('should ', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.getTagText({text: 'test'});
      expect(ctrl.autocompleteVisible).toBe(false);
    });

    it('should ', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      const result = ctrl.track({text: '1'});
      expect(result).toBe('1');
    });

    it('should emit `onTagRemoving` event', () => {
      const onTagRemoving = jasmine.createSpy('onTagRemoving');
      const bindings = {
        onTagRemoving,
        tags: ['Demo']
      };
      const ctrl = $componentController('inputTags', locals, bindings);
      ctrl.$onInit();
      ctrl.removeTag({code: 1, text: '1'});
      expect(onTagRemoving).toHaveBeenCalled();
      expect(onTagRemoving).toHaveBeenCalledWith({code: 1, text: '1'});
    });

    it('should remove matching element by code', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.tags = [];
      ctrl.addTag({code: 1, text: '1'});
      ctrl.removeTag({code: 1});
      expect(ctrl.tags.length).toBe(0);
    });

    it('should reset the tag list', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      expect(ctrl.path.length).toBe(0);
    });

    it('should go to the selected element in the tree', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      const pathLength = ctrl.path.length;
      ctrl.next('subLevel');
      expect(ctrl.path.length).toBe(pathLength + 1);
    });

    it('should back to the previous element in the tree when on the root', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.path = [];
      ctrl.previous();
      expect(ctrl.path.length).toBe(0);
    });

    it('should back to the previous element in the tree when in 2 sublevels', () => {
      const ctrl = $componentController('inputTags', locals);
      ctrl.$onInit();
      ctrl.next('subLevel');
      ctrl.next('subSubLevel');
      ctrl.previous();
      expect(ctrl.path.length).toBe(1);
    });
  });
});
