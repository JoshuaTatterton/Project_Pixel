var wall = angular.module("Wall", ["ngResource", "LZW"]);

wall.controller("WallController", function($http, lzw) {

  self = this;

  self.init = function(wall_id) {
    $http.get("/wall/"+wall_id).then(function successCallback(response) {
      self.wall = response.data;
    });
  };

});