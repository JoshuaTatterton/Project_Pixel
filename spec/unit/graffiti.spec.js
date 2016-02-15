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
    {"no":1, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":2, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":3, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":4, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":5, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":6, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]},
    {"no":7, "columns":[{"no": 1, "colour": null}, {"no": 2, "colour": null},{"no": 3, "colour": null},{"no": 4, "colour": null},{"no": 5, "colour": null},{"no": 6, "colour": null},{"no": 7, "colour": null},{"no": 8, "colour": null},{"no": 9, "colour": null},{"no": 10, "colour": null},{"no": 11, "colour": null},{"no": 12, "colour": null},{"no": 13, "colour": null},{"no": 14, "colour": null},{"no": 15, "colour": null},{"no": 16, "colour": null}]}
  ]
};