

function insertText() {
	document.getElementById("newContent").innerHTML="some new text : <br> Hello <br>";
	
}

function calculater (){
//var t widthBox.value;  //read from textboxs
var w =document.getElementById("widthbox").value;
var l = document.getElementById("lengthbox").value;
var h = document.getElementById("heightbox").value;	
	
	//convert to float
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	// show result in div
	document.getElementById("result").innerHTML=result;
}
function multiplication(){
	// read from textbox
	document.getElementById("mult-tb").innerHTML="";
	
	var f= document.getElementById("factor").value;
	for(var i=1; i<=10;i++){
		var res =f*i;
		// show resultin div
		document.getElementById("mult-tb").innerHTML +=res+ "<br/>";
	}
	
	
}
function myFunction() {
    alert("Hello! I am an alert box!");
}