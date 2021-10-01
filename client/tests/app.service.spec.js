
describe('Services: loadConfig ', function () {

  var menuService, httpBackend;
  var data = {
    "input1": 3,
    "input2": 44,
    "result": 132,
  }
  const apiUrl = "http://localhost:8003/data"

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    httpBackend = $injector.get('$httpBackend');
    menuService = $injector.get('MenuService');
  }));

  //check our expectations were missed in tests.
  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('service should be defined', function () {
    it('should be defined', function () {
      expect(menuService).not.toBe(undefined);
    });
  })

  describe('getData', function () {
    it('should get data', function () {
      httpBackend.expectGET(apiUrl + '/getData').respond(200);
      menuService.getData()
      httpBackend.flush();
    });
  });

  describe('postData', function () {
    it('should Post data', function () {
      httpBackend.expectPOST(apiUrl + '/postData', data).respond(200);
      menuService.addItem(data)
      httpBackend.flush();
    });
  });
});