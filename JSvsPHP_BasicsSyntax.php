<?php

// Arrays und for

$array1 = array(1, 2, 3);

array_push($array1, 1);

echo var_dump($array1);

array_pop($array1); // 1 am Ende raus

echo var_dump($array1);

array_splice($array1, 0, 1); // 1 am Anfang raus

echo "Länge: " . count($array1) . "\n";

for ($i = 0; $i < count($array1); $i++) {
	echo  $array1[$i] . "\n";
}

$array2 = [0, "Hallo", 2.5];

foreach ($array2 as $i) {
	echo  $i . "\n";
}

array_walk($array2, function ($val) {
	echo "array_walk sagt: $val\n";	
});

$array3 = ["book" => "Buch", "hat" => "Hut"];

echo $array3["book"] . "\n";

// Funktionen und Objekte

function summe($x, $y) {
	return $x + $y;
}

echo summe(10, 5) . "\n";

class Student {
	private $matnr;
	private $name;
	
	public function __construct($matnr, $name) {
		$this->matnr = $matnr;
		$this->name = $name;
	}
	
	public function sagHallo() {
		return $this->name . ": Hallo!";
	}
}

$s1 = new Student("1234", "Anna");

echo $s1->sagHallo();


?>