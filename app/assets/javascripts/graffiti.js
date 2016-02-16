var graffiti = angular.module('Graffiti', ['ngResource']);

graffiti.controller('GraffitiController', function() {
  
  var self = this;

  self.graffiti = { 
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

  self.grid = true;
  
  self.gridSwitch = function() {
    self.grid = !self.grid
  };

  self.gridColour = function(column, row) {
    if(self.grid) {
      return "rgba(0, 0, 0, 1)"
    } else {
      return (self.graffiti.rows[row-1]).columns[column-1].colour
    } 
  };

  self.paint = function(column, row, newColour) {
    (self.graffiti.rows[row-1]).columns[column-1].colour = newColour
  };

});