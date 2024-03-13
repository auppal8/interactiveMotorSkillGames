let sCircle, sSquare, bCircle, bSquare; //Movable circles
let gameStates = 5;
let xOffset, yOffset;


function setup() {
  rectMode(CENTER);
  createCanvas(600, 600);

  sCircle = new Circle(width * 5 / 6, height * 5 / 6, width / 6, "yellow");
  bCircle = new Circle(width * 5 / 6, height * 5 / 6, width / 4, "blue");
  sSquare = new Square(width * 5 / 6, height * 5 / 6, width / 4, "red");
  bSquare = new Square(width * 5 / 6, height * 5 / 6, width / 6, "green");
  Button = createButton('Home');
    Button.position(19,400);
    Button.size(75,25);
    Button.style('color:red');
}

function draw() {
  background(220);
  switch (gameStates) {
    case 0:
      backgroundFunctions();
      bSquare.display();
      bSquare.mouseCheck();
      break;
    case 1:
      backgroundFunctions();
      sCircle.display();
      sCircle.mouseCheck();
      break;
    case 2:
      backgroundFunctions();
      bCircle.display();
      bCircle.mouseCheck();
      break;
    case 3:
      backgroundFunctions();
      sSquare.display();
      sSquare.mouseCheck();
      break;
    case 4: //end screen
      endScreen();
      break;

    case 5: //start screen
      startScreen();
      break;
  }
}

class Circle {
  constructor(x, y, size, color) {
    this.pos = createVector(x, y);
    this.size = size;
    this.color = color;
    this.high = false;
  }

  display() {
    push();
    if (this.high) {
      strokeWeight(3);
      stroke(250);
    } else {
      strokeWeight(1);
      stroke(0);
    }
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }

  mouseCheck() {
    if (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.size / 2) {
      this.high = true;
    } else {
      this.high = false;
    }
  }
}

class Square {
  constructor(x, y, size, color) {
    this.pos = createVector(x, y);
    this.size = size;
    this.color = color;
    this.win = false;
    this.high = false;
  }

  display() {
    push();
    if (this.high) {
      strokeWeight(3);
      stroke(250);
    } else {
      strokeWeight(1);
      stroke(0);
    }
    fill(this.color);
    square(this.pos.x, this.pos.y, this.size);
    pop();
  }
  mouseCheck() {
    if (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.size / 2) {
      this.high = true;
    } else {
      this.high = false;
    }
  }
}



function backgroundFunctions() {
  push();
  fill("yellow");
  square(width / 2, height / 2, width / 3);
  fill("green");
  square(width / 2, height / 6, width / 3);
  fill("red");
  square(width / 6, height / 2, width / 3);
  fill("blue")
  square(width / 6, height / 6, width / 3);
  pop();

  push();
  fill(255);
  circle(width / 6, height / 6, width / 4); //big blue circle
  circle(width / 2, height / 2, width / 6); //small yellow circle
  pop();



  if (!sCircle.win) {
    circle(width / 6, height / 6, width / 4); //big blue circle
  } else {
    push();
    noStroke();
    fill("yellow");
    circle(width / 2, height / 2, width / 4); //big blue circle    
    pop();
  }

  if (!bCircle.win) {
    circle(width / 6, height / 6, width / 4); //big blue circle
  } else {
    push();
    noStroke();
    fill("blue");
    circle(width / 6, height / 6, width / 3); //big blue circle
    pop();
  }

  if (!sSquare.win) {
    square(width / 6, height / 2, width / 4); //small green square
  } else {
    push();
    noStroke();
    fill("red");
    square(width / 6, height / 2, width / 4);
    pop();
  }


  if (!bSquare.win) {
    square(width / 2, height / 6, width / 6); //big red square
  } else {
    push();
    noStroke();
    fill("green");
    square(width / 2, height / 6, width / 6);
    pop();
  }

}

function mousePressed() {
  switch (gameStates) {
    case 0:
      xOffset = mouseX - bSquare.pos.x;
      yOffset = mouseY - bSquare.pos.y;
      break;

    case 1:
      xOffset = mouseX - sCircle.pos.x;
      yOffset = mouseY - sCircle.pos.y;
      break;

    case 2:
      xOffset = mouseX - bCircle.pos.x;
      yOffset = mouseY - bCircle.pos.y;
      break;

    case 3:
      xOffset = mouseX - sSquare.pos.x;
      yOffset = mouseY - sSquare.pos.y;
      break;

    case 4:

      break;

    case 5:

      break;
  } if (mouseX > 19 && mouseX < 94 && mouseY > 400 && mouseY < 425){
    link = createA('https://editor.p5js.org/dtnapole/full/bdrPoBekm','Home');
    link.position(100,403);
  }

}


function mouseDragged() {
  switch (gameStates) {
    case 0:
      if (dist(width * 3 / 6, height / 6, bSquare.pos.x, bSquare.pos.y) <= 2) {
        bSquare.win = true;
        gameStates++;
      } else {
        if (bSquare.high) {
          bSquare.pos.x = mouseX - xOffset;
          bSquare.pos.y = mouseY - yOffset;
        }
      }
      break;
    case 1:
      if (dist(width / 2, height / 2, sCircle.pos.x, sCircle.pos.y) <= 2) {
        sCircle.win = true;
        gameStates++;
      } else {
        if (sCircle.high) {
          sCircle.pos.x = mouseX - xOffset;
          sCircle.pos.y = mouseY - yOffset;
        }
      }
      break
    case 2:
      if (dist(width / 6, height / 6, bCircle.pos.x, bCircle.pos.y) <= 2) {
        bCircle.win = true;
        gameStates++;
      } else {
        if (bCircle.high) {
          bCircle.pos.x = mouseX - xOffset;
          bCircle.pos.y = mouseY - yOffset;
        }
      }
      break
    case 3:
      if (dist(width / 6, height / 2, sSquare.pos.x, sSquare.pos.y) <= 2) {
        sSquare.win = true;
        gameStates++;
      } else {
        if (sSquare.high) {
          sSquare.pos.x = mouseX - xOffset;
          sSquare.pos.y = mouseY - yOffset;
        }
      }
      break
    case 4:

      break
    case 5:
      break
  }

}

function keyPressed() {
  if (keyCode === 32 && (gameStates == 4 || gameStates == 5)) {
    gameStates = 0;
    sCircle.pos.x = width * 4/5;
    sSquare.pos.x = width * 4/5;
    bCircle.pos.x = width * 4/5;
    bSquare.pos.x = width * 4/5;
    sCircle.pos.y = height * 4/5;
    sSquare.pos.y = height * 4/5;
    bCircle.pos.y = height * 4/5;
    bSquare.pos.y = height * 4/5;
    
    sCircle.win = false;
    sSquare.win = false;
    bCircle.win = false;
    bSquare.win = false;
  }
}