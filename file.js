function myFunction() {
               
        }

function validatePassword(){
	var x = document.getElementById("p1").value;
	var y = document.getElementById("p2").value;

	if (x.length<3 || y.length<3) {
		alert("Length must be greater than 3")
		return false;
	}
	else
	if (x!=y) {
		alert("Password does not match");
		return false;
	}
	else{
		return true;
	}
}

function validateForm(){

	if(validatePassword()){
    if(document.getElementById('male').checked || document.getElementById('female').checked){
    	if (document.getElementById('cb').checked) {
    		alert("Done");
    	}else{
    		alert("Select Terms and Conditions");
    	}
    }
    else{
    	alert("Select Gender");
    }}
}