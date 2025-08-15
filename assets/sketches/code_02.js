let _01 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 200);
    p.background(255, 200, 200);
  };

  p.draw = function() {
    p.fill(255, 0, 0);
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  };
};

new p5(_01, 'sketch_01-container');