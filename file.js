function myFunction() {
               
               x.value = x.value.toUpperCase();
        }

function validate(){
	var x = document.getElementById("p1").value;
	var y = document.getElementById("p2").value;

	if (x.length<3 || y.length<3) {
		alert("Length must be greater than 3")
	}
	if (x!=y) {
		alert("Password does not match");
	}
}