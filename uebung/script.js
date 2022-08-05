console.log("Skript geladen!");

var form = document.getElementById("formular");

document.getElementById("feld_user").addEventListener("input", () => {
	var error_msg = document.getElementById("error_msg");
	if(error_msg != null) {
		error_msg.remove();
	}
});

document.getElementById("agb").addEventListener("input", () => {
	var error_msg = document.getElementById("error");
	if(error_msg != null) {
		error_msg.innerHTML = "";
	}
});

form.addEventListener("submit", pruefeLogin);

function pruefeLogin() {
	if(!validiereDaten()) {
		event.preventDefault();
	}

}

function validiereDaten() {
	
	var feld_user = document.getElementById("feld_user");
	var pizza = document.getElementById("pizza");
	var lasagne = document.getElementById("lasagne");
	var agb = document.getElementById("agb");
	var rolle = document.getElementById("rolle");
	var error = document.getElementById("error");
	if((feld_user == null) || (pizza == null) || (lasagne == null) || (agb == null) || (rolle == null)) {
	console.log("Eines der Felder existiert nicht!");
		return false;
	}
	
	var regex = new RegExp("^[a-zA-Z]+$");
	
		if(!regex.test(feld_user.value)) {
		console.log("Der Benutzername erfüllt nicht die Anforderungen");
		if(document.getElementById("error_msg") == null) {
			var msg = document.createElement("p");
			msg.setAttribute("id", "error_msg");
			msg.setAttribute("style", "color: red;");
			msg.appendChild(document.createTextNode("Der Benutzername erfüllt nicht die Anforderungen"));
			feld_user.parentNode.insertBefore(msg, feld_user.nextSibling);
		}
		return false;
	}
	
	if(feld_user.value.length < 3) {
		console.log("Benutzername muss aus mind. 3 Zeichen bestehen");
		if(document.getElementById("error_msg") == null) {
			var msg = document.createElement("p");
			msg.setAttribute("id", "error_msg");
			msg.setAttribute("style", "color: red;");
			msg.appendChild(document.createTextNode("Benutzername muss aus mind. 3 Zeichen bestehen"));
			feld_user.parentNode.insertBefore(msg, feld_user.nextSibling);
		}
		return false;
	}
	
	if(!agb.checked) {
		error.innerHTML = "Sie müssen der AGB zustimmen!";
		console.log("Sie müssen der AGB zustimmen!");
		return false;
	}
	//return true;
	console.log("submit");
}
	