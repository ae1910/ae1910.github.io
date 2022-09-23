function preload() {
    mary1 = loadImage('../img/mary1.jpg');
    mary2 = loadImage('../img/mary2.jpg');
    mary3 = loadImage('../img/mary3.jpg');
    mary4 = loadImage('../img/mary5.jpg');
    mary5 = loadImage('../img/mary6.jpg');
  }
  
  function setup() {
    let canvasDiv = document.getElementById('sketch-holder');
    let width = canvasDiv.offsetWidth;
    let canvas = createCanvas(width, 400);
    canvas.parent('sketch-holder');
    imageMode(CENTER)
    noStroke();
  }
  
  function draw() {
    background(0);
    if (mouseX < width/5 && mouseY > 0 && mouseY < 400) {
        tint(255, 255);
        image(mary1, width/2, height/2, 262, 400);
    }
    else if (mouseX < width/5*2 && mouseY > 0 && mouseY < 400) {
        tint(255, 255);
        image(mary2, width/2, height/2, 262, 400);
    }
    else if (mouseX < width/5*3 && mouseY > 0 && mouseY < 400) {
        tint(255, 255);
        image(mary3, width/2, height/2, 262, 400);
    }
    else if (mouseX < width/5*4 && mouseY > 0 && mouseY < 400) {
        tint(255, 255);
        image(mary4, width/2, height/2, 262, 400);
    }
    else if (mouseX < width/5*5 && mouseY > 0 && mouseY < 400) {
        tint(255, 255);
        image(mary5, width/2, height/2, 262, 400);
    }
    else {
        tint(255, 127);
        image(mary1, width/2, height/2, 262, 400);
        image(mary2, width/2, height/2, 296, 400);
        image(mary3, width/2, height/2, 316, 400);
        image(mary4, width/2, height/2, 325, 400);
        image(mary5, width/2, height/2, 288, 400);
    }
  }