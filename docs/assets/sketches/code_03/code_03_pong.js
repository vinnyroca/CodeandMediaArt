let _pong = function(p) {
  let paddleWidth = 150;
  let paddleHeight = 20;
  let paddleXPosition = 0;
  let paddleYPosition;

  let ballXPosition = 300;
  let ballYPosition = 300;
  let ballXSpeed;
  let ballYSpeed;
  let ballRadius = 20;
  let start = false;
  p.setup = function() {
    
    p.createCanvas(600, 600);
    ballXSpeed = 3;
    ballYSpeed = 3;
    paddleYPosition = p.width - paddleHeight * 2;
      
  }

  p.draw = function(){
    if(start){
    p.noStroke();
    p.background(166,38,115);
    p.rectMode(p.CENTER);
    p.fill(117,251,253)
    if (p.mouseX >= paddleWidth / 2 && p.mouseX <= p.width - paddleWidth / 2) {
    p.rect(p.mouseX, paddleYPosition, paddleWidth, paddleHeight);
    paddleXPosition = p.mouseX;
    }
    if (p.mouseX < paddleWidth / 2) {
    p.rect(paddleWidth / 2, paddleYPosition, paddleWidth, paddleHeight);
    paddleXPosition = paddleWidth / 2;
   }
    if (p.mouseX > p.width - paddleWidth / 2) {
    p.rect(p.width - paddleWidth / 2, paddleYPosition, paddleWidth, paddleHeight);
    paddleXPosition = p.width - paddleWidth / 2;
    }

    if (ballYPosition <= 0 + ballRadius) {
      ballYSpeed *= -1;
    } 

    if (ballYPosition > p.width) {
      ballXPosition = p.width / 2;
      ballYPosition = ballRadius;
      ballXSpeed = 3;
      ballYSpeed = 3;
    }

    if (ballXPosition >= p.width - ballRadius || ballXPosition <= 0 + ballRadius) {
      ballXSpeed *= -1;
    }

    if (
      ballXPosition >= paddleXPosition - paddleWidth / 2 &&
      ballXPosition < paddleXPosition + paddleWidth / 2 &&
      ballYPosition >= paddleYPosition-paddleHeight/2 -ballRadius
    ) {
      ballYSpeed *= -1;
      ballXSpeed *= 1.05;
      ballYSpeed *= 1.05;
    }
    
    ballXPosition += ballXSpeed;
    ballYPosition += ballYSpeed;
    
    p.fill(241,221,81)
    p.circle(ballXPosition, ballYPosition, ballRadius * 2);

     
  }
  else{
   p.background(0);
  }
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
        start = !start;
         
  }
};


};

new p5(_pong, 'pong');