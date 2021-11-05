
// Function solves input
function solve(){
	var x = document.getElementById("answer").value
	var y = eval(x);
	if(x.includes("/0")){
		window.alert('ERROR! Cannot divide by 0, please try again');
		document.getElementById("answer").value = 0;
	}
	else{document.getElementById("answer").value = y;}
}

// Function adjusts input box
function display(value){
	// checks to see if value of display is 0
	if(document.getElementById("answer").value == '0'){
		// if value of answer = 0, overwrite the 0
		document.getElementById("answer").value = value;
	}
	else{
		// if value is not zero, input is adding to existing input
		document.getElementById("answer").value += value;
	}
}

// Function clear display box
function clr(){
	document.getElementById("answer").value = "0";
}

// Function stores theme used in last session and applies styling
function storemode(){
	//localStorage.setItem("saved_theme", 'dark-mode');
	console.log(localStorage.getItem('saved_theme'))
	document.getElementById('body').className = localStorage.getItem('saved_theme');
}

// Function changes theme when button is pressed
function  changemode(){

	if(document.getElementById('body').className == "dark-mode"){
		document.getElementById('body').className = "light-mode"
	}
	else if(document.getElementById('body').className == "light-mode"){
		document.getElementById('body').className = "dark-mode";
	}

	localStorage.setItem("saved_theme", document.getElementById('body').className);
	console.log(localStorage.getItem('saved_theme'))
}

document.addEventListener("keydown", function(e){
	if(e.key >= 0 && e.key <= 9){
		for (i=0; i<=9; i++){
			if(e.key == i){
				display(i);
			}
		}
	}

	if(e.key == '+'){
		display('+');
	}
	if(e.key == '-'){
		display('-');
	}
	if(e.key == '*' || e.key == 'x'){
		display('*');
	}
	if(e.key == '/'){
		display('/');
	}
	if(e.key == '.'){
		display('.');
	}
	if(e.key == 'b' || e.key == 'Backspace'){
		backspace();
	}
	if(e.key == 'c' || e.key == 'Delete'){
		clr();
	}
	if(e.key == '=' || e.key == 'Enter'){
		solve();
	}
	
});

function backspace() {
	var z;
	z = document.getElementById('answer').value;
	document.getElementById('answer').value = z.slice(0, z.length-1);
	if (z.length == 1) {
		document.getElementById('answer').value = 0;
	}
}
