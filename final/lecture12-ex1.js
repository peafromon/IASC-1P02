var count = 0; // sets beginning score to 0

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function right(cn) {
  var qs = document.getElementsByClassName(cn); //multiple elements (both buttons in one Q)
  disable(qs); //disables the buttons
  count++ // adds one to score card
  console.log("CORRECT"); //prints correct to log
  document.getElementById("answer").innerHTML="RIGHT"; //prints correct to screen
  document.getElementById("scores").innerHTML = "You got "+count+"/10"; // prints update score to score counter
  setTimeout(function(){document.getElementById("answer").innerHTML="Right or Wrong?";},2000);
}

function wrong(cn) {
  var qs = document.getElementsByClassName(cn);
  disable(qs);
  console.log("WRONG");
  document.getElementById("answer").innerHTML="WRONG";
}

function disable(questions){
  for(var i=0;i<questions.length;i++){
    questions[i].disabled = true;
  }
}

// this fancy disable was brought to you by Arin (he helped me figure it out (HE DID NOT DO IT FOR ME))
