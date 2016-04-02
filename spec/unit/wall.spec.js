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

});


