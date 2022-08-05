console.log("Start");

// NORMALE Funktion direkt deklariert

halloWelt();	// NORMALE Funktion schon vor Deklaration bekannt wegen Hoisting


function halloWelt() {
	console.log("Hallo Welt!");
}


// NORMALE Funktion direkt deklariert mit Parameter und return

console.log("Summe: " + addiere(10, 5)); // Summe 15


function addiere(x, y) {	// Keine Typangabe, kein Returntyp angegeben
	return x + y;
}

// BENANNTE Funktion über Variable

// f2();	// Fehler: benannte Funktionen sind nicht vor der Deklaration sichtbar (kein hoisting)

var f1 = function testOut() {
	console.log("Test");
}

f1;		// hier passiert nichts
f1();	// hier kommt Test


// BENANNTE Funktion über Variable mit Parameter

let f2 = function multipliziere(x, y) {		// globaler Scope: global sichtbar, auch in Funktionen
	return x*y;
}

console.log(f2);	// printet den Code der function!
console.log(f2(2, 3));	// 6


// Funktionen in Funktionen

console.log(erstAddierenDannQuadrieren(2, 4));	// 26

function erstAddierenDannQuadrieren(x, y) {
	var z = addiere(x, y);	// lokaler Scope: nur innerhalb der function sichtbar
	var f1 = null;	// wird nur im lokalen Scope überschrieben! (hier spielt let und var keine Rolle)
	let b = 10;	// beide b als var deklariert dann wären die Werte beides Mal 5
	if (b === 10) {
		let b = 5;
		console.log("b im if: "+b); // 5

	}
	console.log("b in function: "+b); // 10
	return f2(z, z);
}

// console.log(z); // Fehler: lokaler Scope der Funktion, z ist hier nicht mehr vorhanden
f1();	// trotzdem "Test"
// console.log("b außerhalb function: "+b); // not defined, weil lokaler Scope


// ANONYME Funktionen (kein Name)

// sagHallo(); // geht nicht

let sagHallo = function() {
	console.log("Hallooo");
}

sagHallo();	// "Hallooo"


// nochmal Funktionen über Variablen

// Die Zuweisung von Variablennamen ist bei allen drei Typen gleich

var maus = halloWelt;	// normal
var katze = f1;	// benannt
var hund = sagHallo;	// anonym

maus();
hund();
katze();

// Vararg Funktion mit bel. Parametern

var summe = function() {	// hier als anonyme Funktion, geht normal oder benannt genau so
	var summe = 0;
	for (var i = 0; i < arguments.length; i++) {
		summe += arguments[i];
	}
	return summe;
}

console.log(summe(1,2,3,4));	// 10

