describe('input-tags', () => {
  let $componentController;

  beforeEach(angular.mock.module('angularjs-input-tags'));
  beforeEach(angular.mock.inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  describe('addTag', () => {
    it('should emit `onTagAdding` callback', () => {
      const onTagAddingSpy = jasmine.createSpy('onTagAdding');
      const bindings = {onTagAdding: onTagAddingSpy};
      const ctrl = $componentController('inputTags', undefined, bindings);
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      expect(onTagAddingSpy).toHaveBeenCalledWith({code: 1, text: '1'});
    });

    it('should update tag list', () => {
      const ctrl = $componentController('inputTags');
      ctrl.$onInit();
      ctrl.addTag({code: 1, text: '1'});
      expect(ctrl.tags).toContain({code: 1, text: '1'});
    });
  });
});
