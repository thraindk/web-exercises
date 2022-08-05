<?php

function erwarteString($string) {
	if ($string === "Hallo") {
		return "ok!";	# return ohne Angabe Rückggabetyp!
	}
	throw new Exception("Unerwarter String");	# Wie in Java
}


echo erwarteString("Hallo") . "\n";
# echo erwarteString("Welt");	# Exception!

try {	# try-catch-finally wie in Java
erwarteString("Welt");
}catch (Exception $e) {		# Gibt als Basisklasse Exception, Unterklassen muss man selbst ableiten
	echo "Function erwarteString wurde nicht erfolgreich ausgeführt, weil: $e \n";
}finally{	# wird immer ausgeführt
	echo "Ausführung Riskante funktion beendet.";
}

# Keine der klassischen PHP Funktionen wirft Exceptions!

?>
