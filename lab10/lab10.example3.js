function add(){
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var answer = Number(num1) + Number(num2);
  document.getElementById("output").innerHTML = answer;

}
