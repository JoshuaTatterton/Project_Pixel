describe("WallController", function() {
  
  beforeEach(module("Wall"));

  var ctrl;
  var httpBackend;

  beforeEach(function() {

    inject(function($controller, $httpBackend) {
      ctrl = $controller("WallController");

      httpBackend = $httpBackend;

      httpBackend.expectGET("/wall/1").respond(dummywall);
    });

  });

  it("initializes with a wall inside it", function() {
    ctrl.init(1);
    httpBackend.flush();
    expect(ctrl.wall).toEqual(dummywall);
  });

});

var dummywall = { wall: "a wall" };