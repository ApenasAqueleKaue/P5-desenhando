
function setup() {
  
    createCanvas(600, 600);
  
   background('aqua');
  
  }
  
  function draw() {
  
   stroke('pink');
  
    fill('black');
   
    if (mouseIsPressed){
   
  rect(mouseX, mouseY ,50,65);
    }
    }