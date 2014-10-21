var Man = function() {
  var pub = this;
  pub.x = 30;
  pub.y = 50;
  var element;
  var health = 100;
  
  pub.name = 'Man';
  
  pub.create = function() {
    element = $("<img>").attr("src", "img/running-man.jpg").attr('width', '30').appendTo("#container");
  };
  
  pub.render = function() {
    console.log('w: ' + health/10 + '    rgb(' + (100-health) + '%,' + health + '%, 0%)');
    element.css({top: pub.y, left: pub.x, 
      'border-bottom': 5 + ' solid rgb(' + (100-health) + '%,' + health + '%, 0%)'});
  };

  var dispose = function() {
    element.remove();
    towers.removeObject(pub);
  };

  pub.on = function(event) {
    if ('tick' === event) {
      pub.x += 10;
      //pub.y = 50 + 2 * Math.sin(pub.x);
      pub.y += 5;
      pub.render();
    }
    else if ('hit' === event) {
      health -= 4;
      if (health <= 0) {
        alert('shit!');
        dispose();
      }
    }
  };
};