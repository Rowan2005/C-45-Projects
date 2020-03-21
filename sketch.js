var form ,player;
var gameState = "wait";

function setup() {
  createCanvas(400,400);
  form = new Form();
  player = new Player();
}

function draw() {
  background(255);  

  form.display();

  if(gameState === "start"){
    console.log("started");
    form.hide();

   start();

  }
}

function start(){
  strokeWeight(3);
  line(0, 200,400 , 200);
  line(0, 100,400 , 100);
  strokeWeight(3);
  line(0, 50,400 , 50);
  strokeWeight(3);
  line(0, 150,400 , 150);
  strokeWeight(3);
  line(0, 250,400 ,250);
  strokeWeight(3);
  line(0, 350,400 , 350);
  strokeWeight(3);
  line(0, 300,400 , 300);
  strokeWeight(3);
  line(200, 0, 200, 400);
  strokeWeight(3);
  line(250, 0, 250, 400);
  strokeWeight(3);
  line(150, 0, 150, 400);
  strokeWeight(3);
  line(350, 0, 350, 400);
  strokeWeight(3);
  line(50, 0, 50, 400);
  strokeWeight(3);
  line(100, 0, 100, 400);
  strokeWeight(3);
  line(300, 0, 300, 400);
  strokeWeight(3);

  rect(0,0,50,50);
  rect(0,50,50,50);
  rect(0,100,50,50);
  rect(0,150,50,50);
  rect(0,200,50,50);
  rect(0,250,50,50);
  rect(0,300,50,50);
  rect(0,350,50,50);
  
  rect(50,0,50,50);
  rect(50,50,50,50);
  rect(50,100,50,50);
  rect(50,150,50,50);
  rect(50,200,50,50);
  rect(50,250,50,50);
  rect(50,300,50,50);
  rect(50,350,50,50);
  
  rect(100,0,50,50);
  rect(100,50,50,50);
  rect(100,100,50,50);
  rect(100,150,50,50);
  rect(100,200,50,50);
  rect(100,250,50,50);
  rect(100,300,50,50);
  rect(100,350,50,50);
  
  rect(150,0,50,50);
  rect(150,50,50,50);
  rect(150,100,50,50);
  rect(150,150,50,50);
  rect(150,200,50,50);
  rect(150,250,50,50);
  rect(150,300,50,50);
  rect(150,350,50,50);
  
  rect(200,0,50,50);
  rect(200,50,50,50);
  rect(200,100,50,50);
  rect(200,150,50,50);
  rect(200,200,50,50);
  rect(200,250,50,50);
  rect(200,300,50,50);
  rect(200,350,50,50);
  
  rect(250,0,50,50);
  rect(250,50,50,50);
  rect(250,100,50,50);
  rect(250,150,50,50);
  rect(250,200,50,50);
  rect(250,250,50,50);
  rect(250,300,50,50);
  rect(250,350,50,50);
  
  rect(300,0,50,50);
  rect(300,50,50,50);
  rect(300,100,50,50);
  rect(300,150,50,50);
  rect(300,200,50,50);
  rect(300,250,50,50);
  rect(300,300,50,50);
  rect(300,350,50,50);
  
  rect(350,0,50,50);
  rect(350,50,50,50);
  rect(350,100,50,50);
  rect(350,150,50,50);
  rect(350,200,50,50);
  rect(350,250,50,50);
  rect(350,300,50,50);
  rect(350,350,50,50);


}
