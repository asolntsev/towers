Array.prototype.remove = function (value) {
  for (var i = 0; i < this.length; ) {
    if (this[i] === value) {
      this.splice(i, 1);
    } else {
      ++i;
    }
  }
};

var towers = new (function() {
  var pub = this;
  var objects = [];
  
  pub.allObjects = function() {
    return objects;
  };
  
  pub.addObject = function(object) {
    objects.push(object);
    object.create();
  };
  
  pub.removeObject = function(object) {
    objects.remove(object);
    //object.element.remove();
  };
  
  pub.createObjects = function() {
    $.each(objects, function(i, object) {
      object.render();
    });
  };
  
  pub.tick = function() {
    $.each(objects, function(i, object) {
      object.on('tick');
    });
  };
  pub.tickFast = function() {
    $.each(objects, function(i, object) {
      if (object && object.hasOwnProperty('tickFast'))
        object.tickFast();
    });
  };
})(); 

$(function() {
  towers.addObject(new Man());
  towers.addObject(new Tower(300, 100));
  towers.addObject(new Tower(600, 190));
  towers.addObject(new Tower(900, 150));
  towers.createObjects();
  setInterval(towers.tick, 200);
  setInterval(towers.tickFast, 50);
});