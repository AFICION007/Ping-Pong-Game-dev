var ball_x, ball_y, ball_dx, ball_dy;
var radius;
var paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  
  ball_x = width/2;
  ball_y = height/2;
  ball_dx = 3;
  ball_dy = 2;

  radius = 12.5;
  
  paddle_width = 50;
  paddle_height = 5;
  paddle_x = width/2 - paddle_width/2;
  paddle_y = height - paddle_height;

  
  paddle_dx = 5;
  
  fill("black");
}

function draw(){
  clear()
  background("grey");
  
  circle(ball_x, ball_y, radius*2);
  
  ball_x += ball_dx;
  ball_y += ball_dy;
  
  
  if(ball_x + radius >= width || ball_x - radius <= 0){
    ball_dx = -ball_dx;
  }
  
  if(ball_y + radius >= height || ball_y - radius <= 0){
    ball_dy = -ball_dy;
  }
  
  if(ball_y + radius >= height - paddle_height && (ball_x >= paddle_x && ball_x <= paddle_x + paddle_width)){
    ball_dy = -ball_dy;
  }
  
  if(ball_y + radius >= paddle_y && ball_y + radius <= paddle_y + paddle_height){
    
    if(ball_x - radius >= paddle_x + paddle_width && ball_x + radius <= width){
      if(ball_x - radius <= paddle_x + paddle_width){
        ball_dx = -ball_dx;
      }
    }
    
    if(ball_x - radius >= 0 && ball_x + radius <= paddle_x){
      if(ball_x + radius >= paddle_x){
        ball_dx = -ball_dx;
      }
    }
  }
  
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  
  if (keyIsDown(LEFT_ARROW)) {
    if (paddle_x >= 0)
      paddle_x = paddle_x - paddle_dx;
  } else if (keyIsDown(RIGHT_ARROW)) {
      if (paddle_x + paddle_width <= width)
        paddle_x = paddle_x + paddle_dx;
  }
}