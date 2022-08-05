<?php

class Auto {	# eigentlich wie in Java
	private $marke;
	private $km;
	
	public function __construct($marke, $km) {
		$this->marke = $marke;
		$this->km = $km;
	}
	
	public function hupen() {
		echo "$this->marke: Huup Huup!";
	}
}

$meinAuto = new Auto("Toyota", "120tkm");

$meinAuto->hupen();	# Zugriff auf Methoden mit ->

?>