var drop = [];
let SadSlider;
let extraCanvas;


function setup() {
  createCanvas(windowWidth, windowHeight);


  translate(width / 2, height / 2);
  extraCanvas = createGraphics(700, 500); // is there a way to move this canvas to middle of page?



  SadSlider = createSlider(0, 700, 0);


  for (var i = 0; i < 700; i++) { // create multiple drops
    drop[i] = new Drop();
  }
}


function draw() {

  background(0);
  extraCanvas.clear();
  extraCanvas.background(255);

  for (var i = 0; i < SadSlider.value(); i++) {
    extraCanvas.drop[i].show();
    extraCanvas.drop[i].update(); // problem is here, extraCanvas function doesn't work
  }
  image(extraCanvas, 0, 0);
}



// rain animation - works fine
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.color1 = [13, 19, 33] // set color1 RGB value
  this.color2 = [29, 45, 68] // set color2 RGB value
  this.color3 = [62, 92, 118] // set color3 RGB value
  this.color4 = [116, 140, 171] // set color4 RGB value
  this.colors = [this.color1, this.color2, this.color3, this.color4] // set a four color palette


  this.show = function() {
    fill(random(this.colors));
    ellipse(this.x, this.y, 4, 15);
  }

  this.update = function() { //to make it move 
    this.speed = random(5); //speed
    this.gravity = 1.05;
    this.y = this.y + 3 + this.speed * this.gravity; //speed

    if (this.y > height) { // make rain continuous
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
}
