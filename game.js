var game={
l : [

{ // L0
scale:0.2,
cb:function(e){

var boxes=document.querySelectorAll(".gamebox");
var o=[];
var nmax=2;
var nmin=16384;

for(var i=0;i<boxes.length;i++){
 if(boxes[i].innerHTML==""){o.push(i);}
 else{ nmax=Math.max(nmax,parseInt(boxes[i].innerHTML));nmin=Math.min(nmin,parseInt(boxes[i].innerHTML));}
}

var qb=[];
for(var i=nmin;i<nmax;i=i<<1){
 qb.push(i);
 if(qb.length>2){break;}
}


for(var c=0;c<2;c++){
if(o.length==0)break;
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
var num=qb[Math.round(Math.random()*(qb.length-1))];
console.log("num",num);
boxes[i].innerHTML=num.toString();
updateColor(boxes[i]);
o.splice(j,1);
}


},

gen:function(l){
game.l[l].c=0;
if(game.l[l].b.length>1){return;}

var color="rgba(238, 228, 218, 0.35)";
for(var i=-2;i<2;i+=1){
 for(var j=-2;j<2;j+=1){
  this.b.push([i,j,color]);
 }
}


},

postgen:function(l){
var boxes=document.querySelectorAll(".gamebox");
var o=[];
for(var i=0;i<boxes.length;i++){o.push(i);}

for(var c=0;c<4;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];

boxes[i].innerHTML="2";

updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="4";

updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="8";

updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="16";

updateColor(boxes[i]);
o.splice(j,1);
}


},

b:[],
},



{ // L1
scale:0.15,
cb:function(e){

var boxes=document.querySelectorAll(".gamebox");
var o=[];
var nmax=2;
var nmin=16384;

for(var i=0;i<boxes.length;i++){
 if(boxes[i].innerHTML==""){o.push(i);}
 else{ nmax=Math.max(nmax,parseInt(boxes[i].innerHTML));nmin=Math.min(nmin,parseInt(boxes[i].innerHTML));}
}

var qb=[];
for(var i=nmin;i<nmax;i=i<<1){
 qb.push(i);
 if(qb.length>3){break;}
}


for(var c=0;c<2;c++){
if(o.length==0)break;
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
var num=qb[Math.round(Math.random()*(qb.length-1))];

boxes[i].innerHTML=num.toString();
updateColor(boxes[i]);
o.splice(j,1);
}


},

gen:function(l){
game.l[l].c=0;
if(game.l[l].b.length>1){return;}

var color="rgba(238, 228, 218, 0.35)";
for(var i=-3;i<3;i+=1){
 for(var j=-3;j<3;j+=1){
  this.b.push([i,j,color]);
 }
}


},

postgen:function(l){
var boxes=document.querySelectorAll(".gamebox");
var o=[];
for(var i=0;i<boxes.length;i++){o.push(i);}

for(var c=0;c<4;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="2";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="4";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<2;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="8";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="16";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="32";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="64";
updateColor(boxes[i]);
o.splice(j,1);
}


},

b:[],
},



{ // L2
scale:0.115,
cb:function(e){

var boxes=document.querySelectorAll(".gamebox");
var o=[];
var nmax=2;
var nmin=16384;

for(var i=0;i<boxes.length;i++){
 if(boxes[i].innerHTML==""){o.push(i);}
 else{ nmax=Math.max(nmax,parseInt(boxes[i].innerHTML));nmin=Math.min(nmin,parseInt(boxes[i].innerHTML));}
}

var qb=[];
for(var i=nmin;i<nmax;i=i<<1){
 qb.push(i);
 if(qb.length>2){break;}
}


for(var c=0;c<2;c++){
if(o.length==0)break;
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
var num=qb[Math.round(Math.random()*(qb.length-1))];

boxes[i].innerHTML=num.toString();
updateColor(boxes[i]);
o.splice(j,1);
}


},

gen:function(l){
game.l[l].c=0;
if(game.l[l].b.length>1){return;}


var color="rgba(238, 228, 218, 0.35)";
for(var i=-4;i<4;i+=1){
 for(var j=-4;j<4;j+=1){
  this.b.push([i,j,color]);
 }
}


},

postgen:function(l){
var boxes=document.querySelectorAll(".gamebox");
var o=[];
for(var i=0;i<boxes.length;i++){o.push(i);}

for(var c=0;c<8;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="2";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<4;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="4";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<4;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="8";
updateColor(boxes[i]);
o.splice(j,1);
}

for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="16";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="32";
updateColor(boxes[i]);
o.splice(j,1);
}


for(var c=0;c<1;c++){
var j=Math.round(Math.random()*(o.length-1));
var i=o[j];
boxes[i].innerHTML="64";
updateColor(boxes[i]);
o.splice(j,1);
}


},

b:[],
},

],
i:0,
lock:0,
cc:0,
};

(function(){

}());



