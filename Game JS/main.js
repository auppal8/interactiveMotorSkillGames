function setup() {
    createCanvas(400, 400);
    button = createButton('Game 1');
    button.position(19,19);
    button.size(75,25);
    button.style('color:red');
    button2 = createButton('Game 2');
    button2.position(162.5,19);
    button2.size(75,25);
    button2.style('color:red');
    button3 = createButton('Game 3');
    button3.position(306,19);
    button3.size(75,25);
    button3.style('color:red'); 
  }
  function draw(){
    background('rgb(137,207,240)');
    
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    text = text;
    textSize(50);
  textAlign(CENTER);
    textStyle(BOLDITALIC);
  text('Nimble Fingers', 200, 200);
    fill ('rgb(255,218,3)');
    textSize(25);
    textAlign(CENTER);
    textStyle(ITALIC);
    text('An App by Group 3', 200, 300);
  }
  
  function mousePressed(){
    if (mouseX > 19 && mouseX < 94 && mouseY > 19 && mouseY < 44){
    link = createA('https://editor.p5js.org/dtnapole/full/rucJ5CiHT','Game1');
      link.position(30,45);
    } else if (mouseX > 162.5 && mouseX < 237.5 && mouseY > 19 && mouseY < 44){
      link2 = createA('https://editor.p5js.org/dtnapole/full/6isc8UdMc','Game 2');
      link2.position(173.5,45);
    } else if (mouseX > 306 && mouseX < 381 && mouseY > 19 && mouseY < 44){
      link3 = createA('https://editor.p5js.org/dtnapole/full/eMX88U7ya','Game 3');
      link3.position(317,45);
    }
  }