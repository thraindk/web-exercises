<?php

# Variablen

$var;
$txt = "PHP";
echo "I love $txt!\n";
echo 'I love $txt!\n'; # Einfache Klammer = kein escapen!
echo "\n";

# echo $var;	# Warning: undefined

# Referenzen und Zeiger

echo '$txt = ' . $txt . "\n";

$text2 = &$txt;		# zeigt auf Speicherbereich von $txt
echo '$text2 = ' . $text2 . "\n";

$text3 = $txt; # kopiert Inhalt nicht Referenz

$text2 = "lol"; #	ändert jetzt $txt und $text2
echo '$txt = ' . $txt . "\n";
echo '$text2 = ' . $text2 . "\n";

echo '$text3 = ' . $text3 . "\n"; # bleibt gleich weil kopiert

$$text3 = "sucks";	# doppeltes $$ = nimm Variableninhalt ("PHP") als Namen für Variable
echo($PHP . "\n"); # sucks
echo("${$text3}" . "\n"); # gleiche Ausgabe

# Arrays erstellen

# klassisch

$arr[] = 10;	# shorthand schreibweise / keine Deklaration erforderlich = direkt loslegen

$arr[5] = 5;

echo var_dump($arr);

$arr2 = array("A", 2, "B", 3.5); # array() klassische Schreibweise / loose types und dynamisch wachsend 

$arr3 = array("book" => "Buch", "sleep" => "Schlaf"); # assoziatives Array / dict, geht auch über index wie in JS/Python

$brett = array(array("A", "B", "C"), array("X", "Y", "Z")); # mehrdimensionale Arrays = Arrays in Arrays

echo $brett[0][0] . $brett[1][0] . "\n";	# wie in Java

# Arrays iterieren

for ($i=0; $i<count($arr2); $i++) {
	echo $arr2[$i] . " ";	# geht nicht mit $arr, weil undefinierte Indexe zwischendrin
}

echo "\n";

foreach ($arr as $element) {
	echo $element . " ";	# geht weil ohne Index
}

echo "\n";

foreach ($arr3 as $key => $value) {		# assoz. arr
	echo $key . " = " . $value . "\n";
}


?>