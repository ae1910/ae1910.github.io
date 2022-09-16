let a = 0;

let xoff;
let yoff;

let r1;
let r2;

let phase = 0;

let cols;
let rows;
let current; 
let previous;

let dampening = 0.99;

function setup() {
    pixelDensity(1);
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    let canvas = createCanvas(700, 400);
    canvas.parent('sketch-holder');
    // https://stackoverflow.com/questions/37083287/how-to-set-canvas-width-height-using-parent-divs-attributes

    cols = width;
    rows = height;
    current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}

function mouseDragged() {
    previous[mouseX][mouseY] = 2500;
}

function draw() {
    background(30);
    loadPixels();
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {
            current[i][j] =
            (previous[i - 1][j] +
                previous[i + 1][j] +
                previous[i][j - 1] +
                previous[i][j + 1]) /
                2 -
            current[i][j];
            current[i][j] = current[i][j] * dampening;
            // Unlike in Processing, the pixels array in p5.js has 4 entries
            // for each pixel, so we have to multiply the index by 4 and then
            // set the entries for each color component separately.
            let index = (i + j * cols) * 4;
            pixels[index + 0] = current[i][j];
            pixels[index + 1] = current[i][j];
            pixels[index + 2] = current[i][j];
        }
    }
    updatePixels();

    let temp = previous;
    previous = current;
    current = temp;


    translate(width/2, height/2)
    // rotate(a);
    stroke(255);
    noFill();
    beginShape();
    // change to if mouse hovers change noise
    let noiseMax = map(mouseX, -100, 100, 0.1, 3);
    for (let i = 0; i < TWO_PI; i+=0.02) {
        let xoff = map(cos(i), -1, 1, 0, 2);
        let yoff = map(sin(i), -1, 1, 0, 2);

        r1 = map(noise(xoff, yoff, phase),0, 1, 50, 350);
        r2 = map(noise(-xoff, -yoff, phase),0, 1, 50, 300);

        let x1 = r1 * cos(i);
        let y1 = r1 * sin(i);

        let x2 = x1 + r2 * cos(i);
        let y2 = y1 + r2 * sin(i);

        vertex(x1, y1);
        vertex(x2, y2);
    } 
    endShape(CLOSE);

    phase += 0.01;
    a = a + 0.01;
}
