<?php

$i = 10;

if(($i >= 0) & ($i < 12)) {		# if wie in java
	echo "i kleiner 12\n";
}else if($i < 20) {
	echo "aber kleiner 20\n";
}else{
	echo "Nicht im Intervall von (0, 20)\n";
}

$option = true;

$option ? $antwort="Option ist wahr\n" : $antwort="Option ist falsch\n";	# Ternärer Operator mit binären Fragen wie in Java

echo $antwort;

switch($i) {	# Switch case auch wie in Java
	case 10: 
		$antwort = "Deine"; 
		break;
	case 11:
		$antwort = "Mudda";
		break;
	default:
		$antwort = "lol";
		break;
}

echo $antwort . "\n";

?>