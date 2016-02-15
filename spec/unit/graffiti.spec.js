describe("GraffitiController", function() {
  
  beforeEach(module("Graffiti"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("GraffitiController");
  }));

  it("has a 16x7 grid stored in it", function() {
    expect(ctrl.graffiti).toEqual(f)
  });
});

var f = {
  "rows":[
    {"1":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"2":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"3":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"4":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"5":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"6":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]},
    {"7":[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]}
  ]
};