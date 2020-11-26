//Creating hr,min,second;
var hr;
var min;
var sec;
var sprite;
var secAngle,minAngle,hourAngle;

function setup() {
  createCanvas(2000,2000);
sprite =   createSprite(495, 290, 50, 50);
sprite.visible = false;

hr = hour();
sec = second();
min = minute();

}

function draw() {
  background(1,9,20); 
  
//Converting the seconds to angles
let secAngle = map(sec , 0 , 60 , 0 , 360);

//Converting the minutes to angles
let minAngle = map(sec , 0 , 60 , 0 , 360);

//Converting the hours to angles
let hourAngle = map(sec , 0 , 60 , 0 , 360);

//Drawing the seconds hand
push();
angleMode(DEGREES);
rotate (secAngle);
stroke(255,0,0);
strokeWeight(7);
line(500,300,585,401);
pop ();

//Drawing the minutes hand
push();
stroke(33,27,211);
strokeWeight(7);
line(431,216,498,298);
pop ();

//Drawing the hour hand
push();
stroke(211,200,27);
strokeWeight(7);
line(584,262,497,296);
pop ();

text("secangle : "+secAngle,700,200);
text("minangle : "+minAngle,700,230);
text("hrangle : "+hourAngle,700,250);

text("Current hour : "+hr,200,200);
text("Current minute : "+min,200,210);
text("Current second : "+sec,200,220);

text ("x : "+mouseX,100,100);
text ("y : "+mouseY,200,100);

  drawSprites();
}