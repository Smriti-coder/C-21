
var guy1 , guy2;
 




function setup() {
  createCanvas(800,400);
  guy1 = createSprite(400, 200, 100, 100);
  guy1.shapeColor= "blue";
  guy2 = createSprite(300, 200, 100, 100); 
  guy2.shapeColor= "orange"; 
  
}

function draw() {
  background(328,23,125);  
  drawSprites();
  Touch();
  guy1.y= mouseY; 
  guy1.x= mouseX; 

console.log(guy1.x-guy2.x)
console.log(guy1.width/2 + guy2.width/2)





}

function Touch() {
 // if(guy1) 
   if(guy1.x-guy2.x < guy1.width/2 + guy2.width/2 &&
     guy2.x-guy1.x < guy1.width/2 + guy2.width/2 && 
     guy1.y-guy2.y < guy1.height/2 + guy2.height/2 && 
     guy2.y-guy1.y < guy1.height/2 + guy2.height/2){

     

        
          guy1.shapeColor= "red"; 
          guy2.shapeColor= "red";
   }
   else{
     guy1.shapeColor= "green"; 
     guy2.shapeColor= "green";
   }
  

}
    

