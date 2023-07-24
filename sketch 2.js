var brickWidth = 50, brickHeight = 25, leftOffset = 5, topOffset = 10, padding = 10;

var brickRows = 3, brickColumns = 5;

var brickArray = []
for(var i = 0; i < brickRows; i++){
  brickArray[i] = [];
  for(var j = 0; j < brickColumns; j++){
    brickArray[i][j] = {x: 0, y: 0, visible: 1};
  }
}

function setup() {
  createCanvas(400, 400);
}

function createBricks(){
  for(var i = 0; i < brickRows; i++){
    for(var j = 0; j < brickColumns; j++){
      if(brickArray[i][j].visible){
        var x = c*(brickWidth + padding) + leftOffset;
        var y = r*(brickHeight + padding) + topOffset;
        brickArray[i][j].x = x;
        brickArray[i][j].y = y;
        
        rect(x, y, brickWidth, brickHeight);
      }
    }
  }
}

function draw() {
  createBricks();
}