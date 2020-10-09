// CURRENT CODES & REFERENCES :
// [The Coding Train p5.js Tutorials on Youtube]
// [for loop - Change Scale + Slider by jarivkin]
// [I.3: noise() vs random() - Perlin Noise and p5.js Tutorial]
// [I.4: Graphing 1D Perlin Noise - Perlin Noise and p5.js Tutorial by The Coding Train]
// [How to display text menu before game starts by Magic Monk on Youtube]
// [Creating Rain in P5 - Coding Challenge #3 - CarlinoGonzalez]
// [rainbow brush by aferriss]
// [Coding Challenge #55: Mathematical Rose Patterns by the Coding Train]
// [Rose (mathematics) on Wikipedia]
// [Maurer rose on Wikipedia]
// [Coding in the Cabana 1: Maurer Rose by the Coding Train]
//***************************************************************************//


var mode; //determines whether next page is shown
var bgcolour;
let Slider1, Slider2, LoveSlider, Slider4, Slider5, Slider6, Slider7, SadSlider, input, button;


// love slider
let n = 6;
let d = 71;


// sad slider
var drop = [];

var xoff1 = 0; //x offset for slider 6 visual
var xoff2 = 10000;

let t = 0; // time variable

var tri = { //for slider 7 visual
  x1: 10,
  y1: 20,
  x2: 80,
  y2: 90,
  x3: 100,
  y3: 150
}


function setup() {
  mode = 0; //setting landing page
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(RGB);
  textSize(21);
  
  // extraCanvas = createGraphics(windowWidth, windowHeight);
  // extraCanvas.clear(); 
  
    // for Sad Slider
   for (var i=0; i <500;i++){     // create multiple drops
       drop[i] = new Drop(); 
}


  //create sliders (min, max, current)
  Slider1 = createSlider(0, 100, 0);
  Slider1.position(30, 110);
  TraumaSlider = createSlider(0, width, 0);
  TraumaSlider.position(30, 140);
  LoveSlider = createSlider(0, TWO_PI * 50, 0);
  LoveSlider.position(30, 170);
  Slider4 = createSlider(0, 100, 0);
  Slider4.position(30, 200);
  Slider5 = createSlider(0, 1500, 0);
  Slider5.position(30, 230);
  Slider6 = createSlider(0, 50, 0);
  Slider6.position(30, 260);
  Slider7 = createSlider(0, 100, 0);
  Slider7.position(30, 290);
  SadSlider = createSlider(0, 500, 0);
  SadSlider.position(30, 320);

  //create text box
  let col = color(194, 197, 204);
  input = createInput("");
  input.position(30, 500);
  input.size(230, 10);
  //input.style('background-color',col);


  //create save function
  button = createButton('SAVE');
  button.position(30, 600);
  button.size(60, 30);
  button.mousePressed(save);
  button.style('background-color', col);
  
  
}


 //when enter, page changes
  function keyPressed() {
    if (keyCode === ENTER) {
      mode = 1;
    } 
 }



function draw() {
  //background(bgcolour);

  //landing page
  if (mode == 0); {
    //extraCanvas.background(0);
   // extraCanvas.fill(255);
    fill (255);
    text1 = text('TAKE A DEEP BREATHE. RECALL A MEMORY. PRESS ENTER TO START', 540, 500);
    Slider1.hide();
    TraumaSlider.hide();
    LoveSlider.hide();
    Slider4.hide();
    Slider5.hide();
    Slider6.hide();
    Slider7.hide();
    SadSlider.hide();

    input.hide();
    button.hide();
  }


  //next web page
   if (mode == 1) {

    text1 = clear();

    Slider1.show();
    TraumaSlider.show();
    LoveSlider.show();
    Slider4.show();
    Slider5.show();
    Slider6.show();
    Slider7.show();
    SadSlider.show();
    input.show();
    button.show();

    background(0);

    //header
    fill(255);
    textSize(15);
    noStroke();
    text('WHAT DO YOU REMEMBER FEELING?', 30, 70);


    //text beside sliders
    textSize(10);
    noStroke();
    text('NOSTALGIA', 180, 123);
    text('TRAUMA', 180, 153);
    text('LOVE', 180, 183);
    text('HAPPINESS', 180, 213);
    text('EXCITEMENT', 180, 243);
    text('ANNOYED', 180, 273);
    text('ANXIOUS', 180, 303);
    text('SAD', 180, 333);


    //input on display
    fill(255);
    textSize(50);
    text(input.value(), 500, 123);
  
  
  //slider5 - excited
    //background(0, 30); // translucent background (creates trails)
    noStroke();
colorMode(RGB);
    fill(255, 140, 0);
    // make a x and y grid of ellipses
    for (let x = 0; x < Slider5.value(); x = x + 30) {
      for (let y = 0; y < Slider5.value(); y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);

        ellipse(myX, myY, 5); // draw particle
      }
    }

    t = t + 0.01; // update time
  
  
  //slider4- happiness
    let x4 = width / 2;
    let y4 = height / 2;

    //make a for loop to move the shape
    for (let happy = 0; happy < Slider4.value(); happy++) {
colorMode(RGB);
      noFill(); // no fill
      strokeWeight(0.5);
      stroke(255); // fill yellow

      //use the value of happy to change the scale of each circle
      ellipse(x4, y4, happy * 10, happy * 10);
    }


 // Sad Slider
    colorMode(HSB, 320, 255, 255);
    for (var i = 0; i < SadSlider.value(); i++) {
      drop[i].show();
      drop[i].update();

    }

    // Trauma Slider
    for (var x = 0; x < TraumaSlider.value(); x++) {
      //stroke(150,[alpha]);
      stroke(255);
      strokeWeight(1);
      point(random(width), random(height));
      //line(width/2,height/2,x, random(height/2));
    }

  //Love Slider
 
    translate(width / 2, height / 2);
    L = LoveSlider.value();

    //front flower
    for (let i = 0; i < L; i += 0.1) {
      let k = i * L;
      let r = 400 * sin(n * k);
      let x3 = r * cos(k);
      let y3 = r * sin(k);
      stroke(i % 180 + 230, 255, 255);
      strokeWeight(3.5);
      point(x3, y3);
    }

    //back flower
    for (let i = 0; i < L; i++) {
      let k = i;
      let r = 400 * sin(n * k);
      let x33 = r * cos(k);
      let y33 = r * sin(k);
      stroke(255);
      strokeWeight(3);
      point(x33, y33);
    }


    n += 0.000001;
    d += 0.000001;
  

  
  
      //slider6 - annoyed
    fill(255);
    //map x value of noise from current range with range of page
    var x6 = map(noise(xoff1), 0, 1, 0, width/2);
    var y6 = map(noise(xoff2), 0, 1, 0, width/2);

    xoff1 += 1;
    xoff2 += 1; //offset two x values by adding 1 each time

    ellipse(x6, y6, Slider6.value(), Slider6.value());



    //slider7 - anxious

    //make a for loop to move the shape
    for (let anxious = 0; anxious < Slider7.value(); anxious++) {

      tri.x1 = random(50, 1500);
      tri.y1 = random(0, 600);
      tri.x2 = random(50, 1500);
      tri.y2 = random(0, 600);
      tri.x3 = random(50, 1500);
      tri.y3 = random(0, 600);
      fill(random(0, 255));
      triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
      scale(1.5);
  



    }

 }
  
  
}
