var colorArray = new Array();
colorArray = ["RED" , "GREEN" , "BLUE" , "YELLOW"];

var color ="";

function randomColor(){
var colorNum = Math.round(Math.random()*3);

color = String(colorArray[colorNum]);
console.log(colorArray[colorNum]);

document.getElementById('output').innerHTML=color;
setTimeout(function(){document.getElementById('output').innerHTML="";},1000);
}

function pushButton(userColor){
if(color == userColor){
  console.log("CORRECT!");
  setTimeout(function(){document.getElementById('output').innerHTML="CORRECT!";},1000);
  setTimeout(randomColor(), 1000);
}
else{
  document.getElementById('output').innerHTML="GAME OVER!";
}
}
