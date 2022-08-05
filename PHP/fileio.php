<?php

// Schritt 1: Existiert Datei überhaupt? (Pfad)
// Schritt 2: Kann ich sie öffnen? (Rechte)
// Schritt 3: Können die Daten eingelesen werden? (Gesperrt durch anderen Prozess)

$pfad = "C:/hallo.txt";

function ladeTextAusDatei($pfad) {
	
	$content = null;
	
	// Schritt 1
	
	if(!is_file($pfad)) {
		throw new Exception("Konnte Datei unter angegebenem Pfad nicht finden");
	}
	
	// Schritt 2
	
	// $file = PHP stellt Ressource als Stream zur Verfügung ("Handle")
	$file = fopen($pfad, "r");	// Modus r = read (Öffnen und Lesezeiger auf Pos 0 setzen)
	
	if(!$file) {	// Stream ist false, wenn Datei nicht geöffnet werden konnte
		throw new Exception("Datei konnte nicht zum Lesen geöffnet werden");
	}
	
	
	// Schritt 3
	
	$content = fread($file, filesize($pfad)); // Anzahl zu lesender Bytes muss mitgegeben werden (alles9)
	
	if(!$content) {		// fread gibt false zurück wenn nicht möglich
		throw new Exception("Datei konnte nicht gelesen werden");
	}
	
	fclose($file);	// Wichtig!
	
	return $content;
}

ladeTextAusDatei($pfad);

?>