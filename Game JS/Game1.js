let bubbles = [];
let bubble;

function setup() {
  createCanvas(600, 400);
  textSize(40);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let dx = random(-5, 5);
    let dy = random(-5, 5);

    let r = random(10, 50);
    let b = new Bubble(x, y, r, dx, dy);
    bubbles.push(b);
    Button = createButton('Home');
    Button.position(19,356);
    Button.size(75,25);
    Button.style('color:red');
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  } if (mouseX > 19 && mouseX < 94 && mouseY > 356 && mouseY < 381){
    link = createA('https://editor.p5js.org/dtnapole/full/bdrPoBekm','Home');
    link.position(37,335);
  }
}


function draw() {
  background(0);
  var count = 0;
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    if (bubbles[i].click === true) {
      count += 1;
    }
  }
  if (count === bubbles.length) {
    let s = "Congrats, you wOn!";
    fill(50);
    text (s,300,200);
  }
}

class Bubble {
  constructor(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.brightness = 0;
    this.click = false;
  }


  clicked(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
      console.log("CLICKED ON BUBBLE!");
      this.click = true;
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x <= 0) {
      this.dx = -this.dx;
      this.x = 0;
    }

    if (this.x + this.r * 2 >= 600) {
      this.dx = -this.dx;
      this.x = 600 - this.r * 2;
    }

    if (this.y <= 0) {
      this.dy = -this.dy;
      this.y = 0;
    }

    if (this.y + this.r * 2 >= 400) {
      this.dy = -this.dy;
      this.y = 400 - this.r * 2;
    }
  }



  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }


}