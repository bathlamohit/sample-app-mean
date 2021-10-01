describe('Collection Directive', function () {
    var elm, scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
        elm = angular.element(
            '<div clicker class="submit-btn">' +
            '</div>');
        scope = $rootScope.$new();

        //scope.customMessage = '<div class="custom-message">foo</div>';
        scope.items = [{ input1: 1, input2: 2, result: 2 }, { input1: 2, input2: 5, result: 10 }];
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should call controller function', function () {
        var btnElm = elm.find('button');
        expect(btnElm).toBeDefined();
    });
});    
