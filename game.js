function move(e,i,l,t){
  var oleft=this.b[i][0]*100; var otop=this.b[i][1]*100;  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
   if(oleft == eleft && otop == etop){ e.style.left = (eleft+100*l)+"%";  e.style.top = (etop+100*t)+"%"; }else{ e.style.left = (oleft)+"%";  e.style.top = (otop)+"%"; }
}

function move1(e,i,l,t){
  var oleft=game.l[game.i].b[i][0]*100; var otop=game.l[game.i].b[i][1]*100;
  e.style.left = (oleft+100*l)+"%";  e.style.top = (otop+100*t)+"%";
}

function move2(e,i,l,t){
  var eleft=parseInt(e.style.left.slice(0, -1)); var etop=parseInt(e.style.top.slice(0, -1));
  e.style.left = (eleft+100*l)+"%";  e.style.top = (etop+100*t)+"%"; 
}

function move3(e,i,l,t){
  e.style.left = (+100*l)+"%";  e.style.top = (+100*t)+"%"; 
}


var game={
l : [
{ // L0
scale:0.2,
cb:function(e){
//console.log("L0 cb",e.target);
var boxes=document.querySelectorAll(".gamebox");
var o=[];
for(var i=0;i<boxes.length;i++){
 if(boxes[i].innerHTML==""){o.push(i);}
}

for(var c=0;c<2;c++){
if(o.length==0)break;
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="2";
//boxes[i].style.backgroundColor="gray";
updateColor(boxes[i]);
o.splice(j,1);
}


},

gen:function(l){
game.l[l].c=0;
if(game.l[l].b.length>1){return;}

//game.l[l].b.push([0,0,"red"]);

var color="rgba(238, 228, 218, 0.35)";
for(var i=-2;i<2;i+=1){
 for(var j=-2;j<2;j+=1){
  this.b.push([i,j,color]);
 }
}

//console.log(this.b);
},

postgen:function(l){
var boxes=document.querySelectorAll(".gamebox");
/*
var a=Math.round(Math.random()*(boxes.length-1));
var box=boxes[a];
boxes[a].innerHTML="2";
//boxes[a].setAttribute('style', 'background:red;');
boxes[a].style.backgroundColor="red";
var b=a;
while (a==b){b=Math.round(Math.random()*(boxes.length-1));}
boxes[b].innerHTML="2";
boxes[b].style.backgroundColor="gray";
*/
var o=[];
for(var i=0;i<boxes.length;i++){o.push(i);}
//console.log(o);
for(var c=0;c<4;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
//console.log(j,i);
boxes[i].innerHTML="2";
//boxes[i].style.backgroundColor="gray";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="4";
//boxes[i].style.backgroundColor="orange";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="8";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="16";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}

/*
for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="32";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="64";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="512";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="1024";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="2048";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="4096";
//boxes[i].style.backgroundColor="gold";
updateColor(boxes[i]);
o.splice(j,1);
}

*/

},

b:[],
},


],
i:0,
lock:0,
cc:0,
};

(function(){
//console.log("game.js");
}());



