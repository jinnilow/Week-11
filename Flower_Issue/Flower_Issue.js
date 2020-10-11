//Coding Challenge #55: Mathematical Rose Patterns
//Rose (mathematics) [Wikipedia]
//Maurer rose[Wikipedia]
//Coding in the Cabana 1: Maurer Rose
//Signal by Richard Bourne

let loves = [];


function setup() {
  createCanvas(windowWidth, 500);
  background(0);
  LoveSlider = createSlider(0, 10, 0);
  colorMode(HSB, 320, 255, 155);
  for (let i = 0; i < 3; i++) { //number of roses - would use ur slider here
    //for (let i = 0; i < LoveSlider.value(); i++) {
    //let x = 10 + 30 * i;      // spacing them out by
    // let x = random (width);
    // let y = random (height);
    loves[i] = new Love();
  }
}

function draw() {
  translate(width / 2, height / 2);

  for (let i = 0; i < loves.length; i++) {
    loves[i].show();
    loves[i].move();
  }
}


class Love {
  constructor() {
    this.n = 4; // number of petals
    this.d = 71;

  }

  show() {
    for (this.i = 0; this.i < 361; this.i += 0.1) {
      this.k = this.i;  
      this.r = 50 * sin(this.n * this.k); // formula to find radius, determines size
      this.x = this.r * cos(this.k); // formula to find y
      this.y = this.r * sin(this.k); //formula to find x
      //stroke(this.i % 180 + 200, 255, 255);
      strokeWeight(2);
      fill(this.i % 180 + 200, 255, 255);
      noStroke();
      ellipse(this.x, this.y,1.5);
    }

    //white flower behind
    for (this.i = 0; this.i < 361; this.i++) {
      this.k = this.i;
      this.r = 50 * sin(this.n * this.k);
      this.x = this.r * cos(this.k);
      this.y = this.r * sin(this.k);
      //stroke(255);
      //strokeWeight(2);
      //point(this.x, this.y);
      fill (255);
      noStroke();
      ellipse(this.x, this.y,1.5);
    }
  }


  move() {
    this.n += 0.0001; // n+= 0.0000001
    this.d += 0.01; // d+= 0.01
  }


}
