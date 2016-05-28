var ready = function() {
  if (document.getElementsByClassName("wall")[0] !== undefined) {
    var wall = document.getElementsByClassName("wall")[0];
    wall.scrollTop = (wall.scrollHeight - wall.clientHeight ) / 2;
    wall.scrollLeft = (wall.scrollWidth - wall.clientWidth ) / 2;
  }
};

$(document).ready(ready);
$(document).on("page:load", ready);
