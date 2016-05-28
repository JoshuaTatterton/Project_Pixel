var graffiti = angular.module("Graffiti", ["ngResource", "LZW"]);

graffiti.controller("GraffitiController", function($http, $window, lzw) {
  
  var self = this;

  self.initialize = function(id, grid) {
    self.iD = id;
    self.graffiti = grid;
  };

  self.grid = true;
  self.palletDisplay = false;
  self.currentColour = "rgba(0, 0, 0, 1)";
  self.clicked = false;
  
  self.pallet = {
    "rows":[
      {"columns":["rgba(255, 0, 0, 1)", "rgba(255, 125, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 255, 255, 1)"]},
      {"columns":["rgba(0, 255, 125, 1)", "rgba(0, 255, 0, 1)", "rgba(125, 255, 0, 1)", "rgba(170, 170, 170, 1)"]},
      {"columns":["rgba(0, 255, 255, 1)", "rgba(0, 125, 255, 1)", "rgba(0, 0, 255, 1)", "rgba(85, 85, 85, 1)"]},
      {"columns":["rgba(255, 0, 125, 1)", "rgba(255, 0, 255, 1)", "rgba(125, 0, 255, 1)", "rgba(0, 0, 0, 1)"]}
    ]
  };
  
  self.paint = function(column, row) {
    if(self.clicked) {
      (self.graffiti.rows[row-1]).columns[column-1].colour = self.currentColour;
    }
  };
  
  self.gridSwitch = function() {
    self.grid = !self.grid;
  };

  self.gridColour = function(column, row) {
    if(self.grid) {
      return "rgba(0, 0, 0, 1)";
    } else {
      return (self.graffiti.rows[row-1]).columns[column-1].colour;
    } 
  };

  self.palletSwitch = function() {
    self.palletDisplay= !self.palletDisplay;
  };

  self.changeColour = function(newColour) {
    self.currentColour = newColour;
  };

  self.begin = function(column, row) {
    self.clicked = true;
    self.paint(column, row);
  };

  self.release = function() {
    self.clicked = false;
    self.save(self.iD);
  };

  self.save = function(id) {
    var drawing = angular.toJson(self.graffiti)
    var params = { "drawing": drawing };
    var request = $http.patch("/graffiti/"+id, params).then(function successCallback(response) {
    });
  };

  self.redirect = function(url) {
    $window.location.replace(url)
  };

  self.finish = function() {
    self.save(self.iD)
    self.redirect("/")
  };

  self.assignGraffiti = function(grid) {
    try {
      angular.fromJson(lzw.decompress(grid));
    } catch (e) {
      return self.graffiti = angular.fromJson(grid);
    }
    return self.graffiti = angular.fromJson(lzw.decompress(grid));
  };

});