var wall = angular.module("Wall", ["ngResource", "LZW"]);

wall.controller("WallController", function($http, lzw) {

  self = this;
  self.graffiti = [];
  self.optionDisplay = false;
  self.optionId = null;

  self.init = function(wall) {
    self.wall = wall;
    self.createGraffitiArray();
    self.fillGraffitiArray();
    // self.align();
  };

  self.createGraffitiArray = function() {
    for (i = 0; i < 21; i++) {
      self.graffiti[i] = new Array(21);
    }
  };

  self.fillGraffitiArray = function() {
    jmax = self.wall.rows.length
    for (j = 0; j < jmax; j++) {
      imax = self.wall.rows[j].columns.length;
      for (i = 0; i < imax; i++) {
        graffitiID = self.wall.rows[j].columns[i].id
        self.getGraffiti(graffitiID, i, j);
      }
    }
  };

  self.getGraffiti = function(graffitiID, column, row) {
    if (graffitiID != 0) {
      $http.get("/graffiti/"+graffitiID).then(function successCallback(response) {
        self.graffiti[row][column] = response.data;
      });   
    }
  };

  self.clickGraffiti = function(id, column, row) {
    if (id !== 0) {
      self.optionDisplay = true;
      self.optionId = id;
      self.getOptionGraffiti(id, column, row)
    }
  }

  self.getOptionGraffiti = function(id, column, row) {
    $http.get("/graffiti/"+id).then(function successCallback(response) {
      self.optionGraffiti = response.data;
    }, function failCallback() {
      self.optionGraffiti = self.graffiti[row - 1][column - 1];
    });   
  };

  self.hideOptions = function() {
    self.optionDisplay = false;
    self.optionId = null;
    self.optionGraffiti = null;
  };




});