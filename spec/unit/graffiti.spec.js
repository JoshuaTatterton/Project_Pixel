describe("GraffitiController", function() {
  
  beforeEach(module("Graffiti"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("GraffitiController");
  }));
  it("karma works", function() {
    expect(true).toEqual(true);
  });
});