function myFunction(){
	//Sets the initial colours of the three elements on page load//
	document.getElementById("blue").style.color="#002aff";
	document.getElementById("green").style.color="#0b8418";
	document.getElementById("red").style.color="#ff0000";
}
//A function to change colours of elements when called//
function mix(){

	var first = "#00BB00";
	var second = "#BB9320";
	var third = "#AB00FF";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;

}
