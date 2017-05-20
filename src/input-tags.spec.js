describe('input-tags', () => {
  let element;
  let scope;

  beforeEach(inject((_$rootScope_, _$compile_) => {
    const $compile = _$compile_;
    scope = _$rootScope_.$new();

    element = angular.element('<div>test</div>');

    $compile(element)(scope);
  }));

  it('should dummy test pass', () => {
    const expected = 'test';
    scope.item = {
      name: expected,
      active: false
    };

    scope.$digest();

    expect(element.text()).toContain(expected);
  });
});
