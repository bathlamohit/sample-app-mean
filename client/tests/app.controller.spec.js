describe('Controllers', function () { //describe your object type
    beforeEach(module('app')); //load module<br />
    const obj = {
        "input1": 3,
        "input2": 44,
        "result": 132,
        "__v": 0,
        "_id": "6154b885915794570a3e36d8"
    }

    const mockResponse = [{
        "input1": 3,
        "input2": 44,
        "result": 132,
        "__v": 0,
        "_id": "6154b885915794570a3e36d8"
    }]
    $scope.disableBtn = false;
    describe('myCtrl', function () { //describe your app name<br />
        var myctrl, scope, mockService;
        beforeEach(inject(function ($controller, $rootScope) { //instantiate controller using $controller service
            scope = $rootScope.$new();
            var MockTodosFactory = {
                addItem: jasmine.createSpy(),
                getData: jasmine.createSpy()
            };

            spyOn(mockStringService, "addItem").and.returnValue(obj);
            spyOn(mockStringService, "getData").and.returnValue(mockResponse);

            myctrl = $controller('myCtrl', { $scope: scope, MenuService: MockTodosFactory });
        }));
        it('Controller should be defined', function () {  //write tests
            expect(myctrl).toBeDefined(); //pass
        });

        it("it Should change the input css if input values are string or less than 0", function () {
            //scope.disableBtn = true;
            expect(myctrl.checkInput()).toHaveBeenCalled();
        });

        it("it Should call add Item in Menu Service", function () {
            expect(myctrl.addItem(obj)).toEqual(obj)

        });

        it("it Should call getData in Menu Service", function () {
            expect(myctrl.loadData()).toEqual(mockResponse)
        });

    });
});
