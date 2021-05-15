class Iron{
constructor(x,y){
var options={
restitution:0.8,
friction:1,
density:30


}
this.body=Bodies.rectangle(x,y,60,40,options);
this.width=60;
this.height=40;

World.add(world,this.body);



}
display()
{  
var p=this.body.position;
var angle=this.body.angle;
push();
translate(p.x,p.y);
rotate(angle);
rectMode(CENTER);
fill("black");
stroke("green");
rect(0,0,this.width,this.height);

pop();










}




}