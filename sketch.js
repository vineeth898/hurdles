var x=500;
var oy=725;
var y=300;
var G=0;
var g=0;
var xo=1440;
var speed=5;
var floor,wall;
var thorn;
var ms,os;
var database;
var state;
var no,noo;
var State;
var score=0;
var he;
var botton;
function preload(){
floor=loadImage("none.png");
wall=loadImage("wall.jpg");
}
function setup(){
createCanvas(displayWidth,displayHeight-100);
database = firebase.database();
pl1=new player();
ob=new obstacle();
op=new player();
State='got';
}

function draw(){  
var playerCountRef = database.ref('no');
playerCountRef.on("value",(data)=>{
  no= data.val();
});
if(no!=null){
if(no==='first' && State==="got"){
    noo='first';
database.ref('/').update({
    no:'second'
  });
  State='done';
}
if(noo==='first'){
 var playerCourntRef = database.ref('second/state');
 playerCourntRef.on("value",(data)=>{
he= data.val();});
console.log(he);
}
if(noo==='second'){
 var playerCourntRef = database.ref('first/state');
 playerCourntRef.on("value",(data)=>{
he= data.val();});
console.log(he);
}
else if(no==='second' && State==='got' ){noo='second';}}
console.log(noo);
background(wall);
if(state!='off'){
    if(he==='on'){
pl1.display(y,x);
fill(0);
rect(0,(displayHeight-100)/2+30,displayWidth,10);

    if(keyIsDown(UP_ARROW)&&y===405){
        G=-20;
    }
   else if(y>400){
        G=0;
        velocity();    
    }
   else if(y<400){
        G=G+1;
    }

xo=xo-speed;
speed=speed+0.001;
if(xo<=0){xo=1440;}
ob.obs(xo,400);
velocity();
isTouching();
other();
}
else{fill('red');
    textSize(50);
    text("YOU WON!!!",displayWidth/2-100,displayHeight/2-100);
    }
}
if(state==='off'){
    
    text('You LOST!!!',displayWidth/2-100,displayHeight/2-100);
}
}
score=score+1;
if(noo==='first'){
database.ref('first').update({
    score:score
  });
}
if(noo==='second'){
    database.ref('second').update({
        score:score
      });
    }

function velocity(){
y=y+G;
}
function isTouching(){
    var rightball=x+40;
    var bottomball=y+50;
    var toprect=400+20;
    var leftrect=xo-5;
    if(rightball>=leftrect && bottomball>=toprect && xo>=450){
        state='over'+no;
        
    if(noo==='first'){
    database.ref('first').update({
        state:'off'
      });
      state='off';
    }
    if(noo==='second'){
        database.ref('second').update({
            state:'off'
          });
          state='off';
        }
    }
console.log(he);
}

function other(){
    fill('black');
    rect(0,755,displayWidth,10);
    op.display(oy,500);
    fill('red');
    rect(xo,725,10,40);
    var rightball=x+40;
    var leftrect=xo-60;
    if(rightball>=leftrect && xo>=450){
        g=-5;
        
    oy=oy+g;
    }
   else if(oy>730){
        g=0;
 
    }
   else if(oy<730){
        g=g+1;
        
    oy=oy+g;
    }
    }

