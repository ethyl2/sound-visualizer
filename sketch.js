let mySound;
let mySound2;
let mySound3;
let amplitude;
let size;
let r;
let b;
let g;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('music.mp3');
  mySound2 = loadSound('music2.wav');
  mySound3 = loadSound('music3.wav');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  amplitude = new p5.Amplitude();
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  textSize(48);
  text('Click a circle to play music; click it again to stop.', 10, 85);
  
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  
  let level = amplitude.getLevel();
  size = mySound.isPlaying() || mySound2.isPlaying() || mySound3.isPlaying() ? map(level, 0, 1, 0, 200) : 100;
  // size2 = mySound2.isPlaying() ? map(level, 0, 1, 0, 200) : 100;
  ellipse(displayWidth/3, displayHeight/3, size, size);
  ellipse(displayWidth * 2/3, displayHeight * 2/3, size, size);
  ellipse(displayWidth/6, displayHeight * 4/7 , size, size);
  
}

function mousePressed() {
    let d = dist(mouseX, mouseY, displayWidth/3, displayHeight/3);
    let d2 = dist(mouseX, mouseY, displayWidth* 2/3, displayHeight * 2/3);
    let d3 = dist(mouseX, mouseY, displayWidth/6, displayHeight * 4/7);
    if (d < 100) {
        mySound2.stop();
        mySound3.stop();
        if (!mySound.isPlaying()) {
            r = random(255);
            g = random(255);
            b = random(255);
            mySound.play();
        } else {
            mySound.stop();
        }
    } else if (d2 < 100) {
        mySound.stop();
        mySound3.stop();
        if (!mySound2.isPlaying()) {
            r = random(255);
            g = random(255);
            b = random(255);
            mySound2.play();
        } else {
            mySound2.stop();
        }
    } else if (d3 < 100) {
        mySound.stop();
        mySound2.stop();
        if (!mySound3.isPlaying()) {
            r = random(255);
            g = random(255);
            b = random(255);
            mySound3.play();
        } else {
            mySound3.stop();
        }
    }
}


