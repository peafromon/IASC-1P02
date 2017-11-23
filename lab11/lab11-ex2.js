var arrayOne = new Array();
arrayOne = ["pizza" , "ice cream" , "hot dog" , "burger" , "sandwich"];

var arrayTwo = new Array();
arrayTwo = ["warm " , "cold " , "soft " , "hard " , "yummy "];

function randomWords(){
  var randomNumOne = Math.round(Math.random()*4);
  var randomNumTwo = Math.round(Math.random()*4);

  document.getElementById('output').innerHTML+="<br />What a " + arrayTwo[randomNumOne] + arrayOne[randomNumTwo] + "!";
}
