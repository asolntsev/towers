var Tower = function(x, y) {
  var pub = this;
  pub.x = x;
  pub.y = y;
  var element;

  pub.name = 'Tower';
  
  pub.create = function() {
    element = $("<img>").attr("src", "img/tower.png").attr('width', '60').appendTo("#container");
  };
  
  pub.render = function() {
    element.css({top: pub.y, left: pub.x});
  };
  
  pub.on = function() {
    $.each(towers.allObjects(), function(i, object) {
      
      if (object.name === 'Man') {
        if (geometry.distance(pub, object) < 250) {
          //element.css({'border': 'solid red'});
          towers.addObject(new Bullet(pub, object));
        }
        else {
          //element.css({'border': 'none'});
        }
      }
    });
    
    pub.render();
  };
};