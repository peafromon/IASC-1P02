function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function right() {
  console.log("CORRECT");
  document.getElementById("answer").innerHTML="RIGHT";
  setTimeout(function(){document.getElementById("answer").innerHTML="Right or Wrong?";},2000);
}

function wrong() {
  console.log("WRONG");
  document.getElementById("answer").innerHTML="WRONG";
  
}
