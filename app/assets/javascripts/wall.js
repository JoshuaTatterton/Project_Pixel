var ready = function() {
  var wall = document.getElementsByClassName("wall")[0];
  wall.scrollTop = (wall.scrollHeight - wall.clientHeight ) / 2;
  wall.scrollLeft = (wall.scrollWidth - wall.clientWidth ) / 2;
};

$(document).ready(ready);
$(document).on("page:load", ready);

var wall = angular.module("Wall", ["ngResource", "LZW"]);

wall.controller("WallController", function($http, lzw) {

  self = this;
  self.graffiti = [];

  self.init = function(wall) {
    self.wall = wall;
    self.createGraffitiArray();
    self.fillGraffitiArray();
    self.align();
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

  self.align = function() {
    var wall = document.getElementsByClassName("wall")[0];
    wall.scrollTop = (wall.scrollHeight - wall.clientHeight ) / 2;
    wall.scrollLeft = (wall.scrollWidth - wall.clientWidth ) / 2;
  };

});