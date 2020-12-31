  const Engine = Matter.Engine;
  const World =  Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var plinkos = [];

var divisionHeight = 300;
var particle;
var score = 0;
var variableTurn = 0

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  bottomGround = new Ground(400,795,800,15);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    

    

    
}
 


function draw() {
  background("black");

  textSize(30)
  fill("white")
  text("Score : "+score,20,30);

  textSize(25)
  text(500,20,540);

  text(500,100,540);

  text(500,180,540);

  text(500,260,540);

  text(100,340,540);

  text(100,420,540);

  text(100,500,540);

  text(200,580,540);

  text(200,660,540);

  text(200,740,540);






  Engine.update(engine);
 
  bottomGround.display()
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(frameCount%60===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }

   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x < 300)
       {
         score = score+500;
         particle = null;
         if( count >= 5) gameState = "end";
       }   
     }
   }


   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x > 301 && particle.body.position.x < 600)
       {
         score = score+100;
         particle = null;
         if( count >= 5) gameState = "end";
       }   
     }
   }


   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x > 601 && particle.body.position.x < 900)
       {
         score = score+200;
         particle = null;
         if( count >= 5) gameState = "end";
       }   
     }
   }


 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

if(gameState!=="end"){

count++
particle = new Particle(mouseX,10,10,10)

}

}