<?php

// Die Daten könnten aus $_POST stammen
$name ="Peter";
$pass = 1234;
$alter = 40;


if(pruefeName($name) && pruefePasswort($pass) && pruefeAlter($alter)) {
	// Daten weiterverarbeiten
	echo "Registrierung erfolgreich";
}else{
	echo "Fehlerhafte Daten eingegeben";
}


function pruefeName($name) { // Mit Regex

	if($name == null || $name == false) {	 // "" == false
		return false;
	}
	$name = trim($name);	// Leerzeichen davor und danach wegschneiden
	
	if(!preg_match("/^[a-zA-Z]{4,8}$/", $name)) {	//"Erwarte von Beginn an EINEN Ausdruck aus a-zA-Z und dann ist der String zuende"
		return false;
	}
	return true;
	
}

function pruefePasswort($pass) { // Länge eines Strings prüfen
	
	if(strlen($pass) < 4) {
		return false;
	}
	return true;
}

function pruefeAlter($alter) {  // Ist var überhaupt numerisch?
	
	// Prüfe auf Buchstaben, Leerzeichen 
	if(!is_numeric($alter)) { // Wenn String als Zahl interpretiert werden kann: 10, 2.5, 2e2 ...
		return false;
	}
	
	// Ist es auch integer? 0 wenn nicht
	if(!is_integer($alter + 0)) { // Variablen dynamisch typisiert! erzwinge Datentyp int
		return false;
	}
	
	// Eigentliche ALtersprüfung
	if($alter < 18) {
		return false;
	}
	
	return true;
}

?>
