var geometry = new (function() {
  var pub = this;
  pub.distance = function(object1, object2) {
    return Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2));
  }
})(); 
