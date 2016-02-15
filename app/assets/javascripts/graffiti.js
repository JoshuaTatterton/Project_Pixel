var graffiti = angular.module('Graffiti', ['ngResource']);

graffiti.controller('GraffitiController', function() {
  
  var self = this;

  self.graffiti = { 
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

});