describe('Module: angularjs-input-tags -', () => {
  let $componentController;

  beforeEach(angular.mock.module('angularjs-input-tags'));
  beforeEach(angular.mock.inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  describe('Component: inputTags -', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = $componentController('inputTags', {
        $element: angular.element('<div></div>')
      }, {
        onTagAdding: jasmine.createSpy('onTagAdding'),
        onTagRemoving: jasmine.createSpy('onTagRemoving')
      });
    });
    describe('Event: onTagAdding', () => {
      it('should be emit', () => {
        ctrl.$onInit();
        ctrl.addTag({code: 1, text: '1'});
        expect(ctrl.onTagAdding).toHaveBeenCalled();
      });

      it('should be emit with formatted tag value', () => {
        ctrl.$onInit();
        ctrl.addTag({code: 1, text: '1'});
        expect(ctrl.onTagAdding).toHaveBeenCalledWith({tag: {code: 1, text: '1'}});
      });
    });

    it('should add tag on list', () => {
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      expect(ctrl.tags).toContain({code: 1, text: '1'});
    });

    it('should update tag list', () => {
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      ctrl.addTag({code: 1, text: '1'});
      ctrl.addTag({code: 1, text: '1'});
      expect(ctrl.tags.length).toBe(1);
    });

    it('should display autocomplete on focus', () => {
      ctrl.$onInit();
      ctrl.triggerFocus();
      expect(ctrl.autocompleteVisible).toBe(true);
    });

    it('should hide autocomplete on blur', () => {
      ctrl.$onInit();
      ctrl.triggerBlur();
      expect(ctrl.autocompleteVisible).toBe(false);
    });

    it('should emit `onTagRemoving` event', () => {
      ctrl.$onInit();
      ctrl.tags = ['Demo'];
      ctrl.removeTag({code: 1, text: '1'});
      expect(ctrl.onTagRemoving).toHaveBeenCalled();
      expect(ctrl.onTagRemoving).toHaveBeenCalledWith({tag: {code: 1, text: '1'}});
    });

    it('should remove matching element by code', () => {
      ctrl.$onInit();
      ctrl.tags.length = 0;
      ctrl.addTag({code: 1, text: '1'});
      ctrl.removeTag({code: 1});
      expect(ctrl.tags.length).toBe(0);
    });

    it('should reset the tag list', () => {
      ctrl.$onInit();
      expect(ctrl.path.length).toBe(0);
    });

    it('should go to the selected element in the tree', () => {
      ctrl.$onInit();
      const pathLength = ctrl.path.length;
      ctrl.next('subLevel');
      expect(ctrl.path.length).toBe(pathLength + 1);
    });

    it('should back to the previous element in the tree when on the root', () => {
      ctrl.$onInit();
      ctrl.path = [];
      ctrl.previous();
      expect(ctrl.path.length).toBe(0);
    });

    it('should back to the previous element in the tree when in 2 sublevels', () => {
      ctrl.$onInit();
      ctrl.next('subLevel');
      ctrl.next('subSubLevel');
      ctrl.previous();
      expect(ctrl.path.length).toBe(1);
    });
  });
});
