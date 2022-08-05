
var array1 = new Array("Hallo", 2, 3, "Welt");	// ÜBER KONSTRUKTOR: direkt intialisieren (befüllen);

var array2 = new Array(3); // nur deklarieren
console.log(array2); // empty

var array3 = [];	// über Literal initalisieren
console.log(array3);

console.log(array1);	// ganzes Array ausgeben (toString)

for(i in array1) {	// über Index auf Elemente zugreifen (mit IN)
	console.log(array1[i]);
}


for (i of array1) {		// mit OF direkt auf Elemente zugreifen (vgl. foreach)
	console.log(i);
}

console.log(array1.length);	// 4

array1[10] = "Nice";	// dynamische Erweiterung

console.log(array1.length);	// 11 (0 .. 10)

console.log(array1); // Index 4 - 9 : null!


// Anhängen und löschen

console.log(array2.length);	// 3

console.log(array2); // Index 3x empty

array2.push("Moin");

console.log(array2); // 3x empty + moin

delete array2[3];	// lösche moin
console.log(array2);	// 4x empty

array2.splice(0, 0, "Banane", "Orange"); // füge bei Index 0 zwei Elemente ein
console.log(array2);	// Banane, Orange, 4x empty

array2.splice(2, 4); // lösche die vier empty am Ende
console.log(array2);	// Banane, Orange


array3 = {"book": "Buch", "shoe": "Schuh"};		// Assoziatives Array (vgl. Dictionary python)

console.log(array3["book"]);	// Buch

for(i in array3) {	// foreach
	console.log(array3[i]);	// Buch, Schuh
}


