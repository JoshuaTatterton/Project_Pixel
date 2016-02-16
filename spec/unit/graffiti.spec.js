describe("GraffitiController", function() {
  
  beforeEach(module("Graffiti"));

  var ctrl;
  var black = "rgba(255, 255, 255, 1)";

  beforeEach(inject(function($controller) {
    ctrl = $controller("GraffitiController");
  }));

  it("has a 16x7 grid stored in it", function() {
    expect(ctrl.graffiti).toEqual(f);
  });

  it("can change the colour of a pixel", function() {
    ctrl.paint(5,7,"rgba(255, 255, 255, 1)");
    expect((ctrl.graffiti.rows[6]).columns[4].colour).toEqual("rgba(255, 255, 255, 1)");
  });

  it("is default to grid on", function() {
    expect(ctrl.grid).toBeTruthy();
  });

  it("can switch the grid off", function() {
    ctrl.gridSwitch()
    expect(ctrl.grid).toBeFalsy();
  });

  it("can switch the grid back on", function() {
    ctrl.gridSwitch()
    ctrl.gridSwitch()
    expect(ctrl.grid).toBeTruthy();
  });

  it("the grid is black by default", function() {
    expect(ctrl.gridColour(1,1)).toEqual("rgba(0, 0, 0, 1)");
  });

  it("the grid becomes the colour of the block", function() {
    ctrl.gridSwitch()
    expect(ctrl.gridColour(1,1)).toEqual("rgba(192,192,192,1)");
  });

});

var f = { 
  "rows":[
    {"no":1, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":2, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":3, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":4, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":5, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":6, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]},
    {"no":7, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"}]}
  ]
};
