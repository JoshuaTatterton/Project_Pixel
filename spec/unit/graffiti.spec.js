describe("GraffitiController", function() {
  
  beforeEach(module("Graffiti"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("GraffitiController");
  }));

  it("has a 28x14 grid stored in it", function() {
    expect(ctrl.graffiti).toEqual(grid);
  });

  it("can change the colour of a pixel", function() {
    ctrl.clicked = true;
    ctrl.paint(5,7);
    expect((ctrl.graffiti.rows[6]).columns[4].colour).toEqual("rgba(0, 0, 0, 1)");
  });

  it("is default to grid on", function() {
    expect(ctrl.grid).toBeTruthy();
  });

  it("can switch the grid off", function() {
    ctrl.gridSwitch();
    expect(ctrl.grid).toBeFalsy();
  });

  it("can switch the grid back on", function() {
    ctrl.gridSwitch();
    ctrl.gridSwitch();
    expect(ctrl.grid).toBeTruthy();
  });

  it("the grid is black by default", function() {
    expect(ctrl.gridColour(1,1)).toEqual("rgba(0, 0, 0, 1)");
  });

  it("the grid becomes the colour of the block", function() {
    ctrl.gridSwitch();
    expect(ctrl.gridColour(1,1)).toEqual("rgba(192,192,192,1)");
  });

  it("the colour pallet can be switched to be shown", function() {
    ctrl.palletSwitch();
    expect(ctrl.palletDisplay).toEqual(true);
  });

  it("the colour pallet can be switched back off", function() {
    ctrl.palletSwitch();
    ctrl.palletSwitch();
    expect(ctrl.palletDisplay).toEqual(false);
  });

  it("the default current colour is black", function() {
    expect(ctrl.currentColour).toEqual("rgba(0, 0, 0, 1)");
  });

  it("the current colour can be changed", function() {
    ctrl.changeColour("rgba(255, 125, 0, 1)");
    expect(ctrl.currentColour).toEqual("rgba(255, 125, 0, 1)");
  });

  it("has the pallet stored in it", function() {
    expect(ctrl.pallet).toEqual(pallet)
  });

  it("it not clicked by default", function() {
    expect(ctrl.clicked).toEqual(false)
  });

  it("it knows it is clicked", function() {
    ctrl.begin(1,1)
    expect(ctrl.clicked).toEqual(true)
  });

  it("it can stop being clicked", function() {
    ctrl.begin(1,1)
    ctrl.release()
    expect(ctrl.clicked).toEqual(false)
  });

});

var grid = { 
  "rows":[
    {"no":1, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":2, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":3, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":4, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":5, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":6, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":7, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},      
    {"no":8, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":9, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":10, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":11, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":12, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":13, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
    {"no":14, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]}
  ]
};

var pallet = {
  "rows":[
    {"columns":["rgba(255, 0, 0, 1)", "rgba(255, 125, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 255, 255, 1)"]},
    {"columns":["rgba(0, 255, 125, 1)", "rgba(0, 255, 0, 1)", "rgba(125, 255, 0, 1)", "rgba(170, 170, 170, 1)"]},
    {"columns":["rgba(0, 255, 255, 1)", "rgba(0, 125, 255, 1)", "rgba(0, 0, 255, 1)", "rgba(85, 85, 85, 1)"]},
    {"columns":["rgba(255, 0, 125, 1)", "rgba(255, 0, 255, 1)", "rgba(125, 0, 255, 1)", "rgba(0, 0, 0, 1)"]}
  ]
};

