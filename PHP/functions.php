<?php

echo sagHallo("Peter");	# Hoisting: Funktionsdeklaration wird hochgezogen!
echo sagHallo("Anna", "Und tschüss!"); # optionaler Parameter

$param = 10;

echo $param . "\n";
addiereEinsDrauf($param);	# call-by-value! Oriignalwert bleibt unverändert, weil Kopie erzeugt wird
echo $param . "\n";
addiereEinsWirklichDrauf($param);	# jetzt call-by-reference = Original wird verändert
echo $param . "\n";


$arr = Array(1, 2, 3, 4);

array_walk($arr, "addiereEinsWirklichDrauf"); # Funktion auf Array anwenden

var_dump($arr);



function addiereEinsDrauf($i) {
	$i++;
}
function addiereEinsWirklichDrauf(&$i) {
	$i++;
}

function sagHallo($name, $optional = "Nichts") {	
	echo "$name: Hallo! Das habe ich noch zu sagen: $optional\n"; # Doppeltes Anführungszeichen escape
}
?>
