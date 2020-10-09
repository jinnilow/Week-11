function Drop() { 
  this.x = random(0, width);
  this.y = random(0, -height);


  this.show = function() {
    noStroke();
    //fill(255);
    stroke(180, 280, 380);
    ellipse(this.x, this.y, 2, 10);
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
