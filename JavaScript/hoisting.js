console.log("print Ausgabe");

var var1 = "Hallo";
let let1 = "Welt";

ausgabe();	// Hoisting 1: (nur) Funktiondeklaration (ausgabe();) hochgezogen, deswegen Funktion schon bekannt, Variablen aber nicht

function ausgabe() {
	console.log(var1);
	console.log(let1);
}

bellen("Waldi"); // Hoisting 2: Funktiondeklaration hochgezogen, deswegen Funktion schon bekannt


let hund2;

bellen(hund2); // Hoisting 3: undefined, weil nur deklaration nicht initialisierung hochgezogen wird

hund2 = "Frida";



function bellen(hund) {
	console.log(hund+": *wuff*");
}

// Hoisting 4: Nur Deklaration (var var2) wird hochgezogen => Wert 'undefined', aber Initialisierung (Wertzuweisung) NICHT!

console.log(var2); // undefined, weil bisher nur deklariert (nicht deklariert würde exception 'not defined' werfen)
var var2;
var2 = 10;

function ausgabe() {
	var msg;
	console.log("ausgabe: "+msg);
	msg = "Boink!";
}

ausgabe();	// Hoisting 5 'undefined', gleicher Grund wie 4.



bellen(test); // undefined

var test = "Karl"; // hier wird nur die deklaration hochgezogen

bellen(test2); // exception da unbekannt

let test2 = "Maren"; // var wird automatisch mit 'undefined' initialisiert, aber let und const nicht!

// global vs lokal

function scope_bsp() {
	a = 10;  // <-- nicht deklariert, daher global, außerhalb fkt sichtbar
	let b = 20;  // <-- nur im Scope der function
}

scope_bsp();

console.log(a);
console.log(b);



