describe("WallController", function() {
  
  beforeEach(module("Wall"));

  var ctrl;
  var httpBackend;
  var lzw;
  
  beforeEach(function() {
    inject(function($controller, $httpBackend, lzw) {
      ctrl = $controller("WallController");
      httpBackend = $httpBackend;

      httpBackend.whenGET("/graffiti/1")
        .respond(dummygraffiti);
      
      ctrl.init(dummywall);
      
    });
  });

  it("initializes with a wall inside it", function() {
    expect(ctrl.wall).toEqual(dummywall);
  });

  it("has the graffiti array stored in it", function() {
    array();

    expect(ctrl.graffiti).toEqual(graffitiArray);
  });

  it("calls self.fillGraffitiArray while initializing", function() {
    spyOn(ctrl, "fillGraffitiArray").and.callFake(function(){});
    
    ctrl.init(1);

    expect(ctrl.fillGraffitiArray).toHaveBeenCalled();
  });

  it("calls the getGraffiti with the id of the graffiti", function() {
    spyOn(ctrl, "getGraffiti").and.callFake(function(){});

    ctrl.fillGraffitiArray();

    expect(ctrl.getGraffiti).toHaveBeenCalledWith(1, 0, 0);
  });

  it("requests graffiti with getGraffiti", function() {
    ctrl.getGraffiti(1, 0, 0);
    httpBackend.flush();

    expect(ctrl.graffiti[0][0]).toEqual(dummygraffiti);
  });

  array = function() {
    for (i = 0; i < 21; i++) {
      graffitiArray[i] = new Array(21);
    }
  };

  var graffitiArray = [];
  var dummywall = { "rows":[{ "no":1, "columns":[{"no": 1, "id": 1}] }] };
  var dummygraffiti = { graffiti: "a graffiti" };

  it("clicking graffiti sets optionDisplay to true", function() {
    ctrl.clickGraffiti(1, 1, 1);

    expect(ctrl.optionDisplay).toEqual(true);
  });

  it("optionDisplay is false by default", function() {
    expect(ctrl.optionDisplay).toEqual(false);
  });

  it("can hide optionDisplay", function() {
    ctrl.clickGraffiti(0, 1, 1);
    ctrl.hideOptions();

    expect(ctrl.optionDisplay).toEqual(false);
    expect(ctrl.optionId).toEqual(null);
    expect(ctrl.optionGraffiti).toEqual(null);
  });

  it("optionDisplay is false if the id is 0", function() {
    ctrl.clickGraffiti(0, 1, 1);

    expect(ctrl.optionDisplay).toEqual(false);
  });

  it("clicking graffiti sets optionId to the input", function() {
    ctrl.clickGraffiti(1, 1, 1);

    expect(ctrl.optionId).toEqual(1);
  });

  it("optionDisplay is null by default", function() {
    expect(ctrl.optionId).toEqual(null);
  });

  it("clicking graffiti sets optionId to the input", function() {
    spyOn(ctrl, "getOptionGraffiti").and.callFake(function(){});

    ctrl.clickGraffiti(1, 1, 1);

    expect(ctrl.getOptionGraffiti).toHaveBeenCalledWith(1, 1, 1);
  });

  it("getOptionGraffiti assigns a graffiti to optionGraffiti", function() {
    ctrl.graffiti[0][0] = "graffiti"

    httpBackend.whenGET("/graffiti/2")
        .respond(401, "");

    ctrl.getOptionGraffiti(2, 1, 1)

    httpBackend.flush();

    expect(ctrl.optionGraffiti).toEqual(dummygraffiti)
  });





});


