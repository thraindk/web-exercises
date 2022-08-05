console.log("print Ausgabe");

// Funktionsdeklaration

function zaehleBisZehn() {
	for (let i = 0; i < 10; i++) {
		console.log(i+1);
		
		if(i === 4) {
			console.log("HALBZEIT");
		}else if ((i > 6) && (i < 9)){
			console.log("FAST FERTIG");	
		}
	}
}

zaehleBisZehn();

const student = { matrikelNr: "1234", Name:"Max Miller", Studiengang:"IMB" }; // objektbasiert aber nicht orientiert (keine Klassen, wie JSON!)

for (let attr in student) {	// Achtung nur über AttributNAMEN iterieren
console.log(attr);
}

Object.entries(student).map(attr => { // Über anonyme Funktion Attributwerte als Arrays von Arrays
	console.log(attr)
});
	