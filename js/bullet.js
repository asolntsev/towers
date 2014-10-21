var Bullet = function(fromTower, targetObject) {
  var pub = this;
  pub.x = fromTower.x;
  pub.y = fromTower.y;
  var target = targetObject;
  var dx = (targetObject.x - fromTower.x) / 5;
  var dy = (targetObject.y - fromTower.y) / 5;
  var element;
  
  pub.name = 'Bullet';
  
  pub.create = function() {
    element = $("<img>").attr("src", "img/offer_bullet_2.png").attr('width', '10').appendTo("#container");
    new Audio('audio/Zvuk_-_Vystrely_(get-tune.net).mp3').play();
  };
  
  pub.render = function() {
    element.css({top: pub.y, left: pub.x});
  };
  
  var dispose = function() {
    element.remove();
    towers.removeObject(pub);
  };
  
  pub.tickFast = function() {
    pub.x += dx;
    pub.y += dy;
    pub.render();
  };

  pub.on = function() {
    if (geometry.distance(pub, target) < 30) {
      dispose();
      target.on('hit');
    }
  };
};