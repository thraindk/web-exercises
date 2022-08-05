var student = {
matnr: 1234,
name: "Anna Bolika",
saghallo: function() { return this.name + ": Hallo!"; } // "getter als anonyme Funktion"
};
console.log(student.saghallo());

function Student(matnr, name) {
this.matnr = matnr;
this.name = name;
this.saghallo = function() { return this.name + ": Hallo!"; } // "getter als anonyme Funktion"
};

var anna = new Student(1234, "Anna Bolika");
console.log(anna);	// hier "toString" JSON

function makeStudent(matnr, name) {
var student = new Object();
student.matnr = matnr;
student.name = name;
student.saghallo = function() { return this.name + ": Hallo!"; } // "getter als anonyme Funktion"
return student;
}

var anna = makeStudent(1234, "Anna Bolika"); // gibt Object zurück
console.log(anna.saghallo());

function makeStudent(matnr, name) {
return {
matnr: matnr,
name: name,
saghallo: function() { return this.name + ": Hallo!"; } // "getter als anonyme Funktion"
}
};
var anna = makeStudent(1234, "Anna Bolika"); // gibt Object zurück
console.log(anna);	// hier "toString" JSON

// Vererbung

function SuperStudent(matnr, name, superkraft) {
Student.call(this, matnr, name);	// vgl. super
this.superkraft = superkraft;
}

axel = new SuperStudent(1235, "Axel Schweiss", "schwitzen");

console.log(axel);

// prototype

var peter = new SuperStudent(1236, "Peter Lustig", "Löwenzahn");

console.log(peter.nationalitaet); // undefined
// console.log(peter.bye());	// error

SuperStudent.prototype.nationalitaet = "Deutsch";
SuperStudent.prototype.bye = function() { return this.name + ": Bye!"; };

console.log(peter.nationalitaet);
console.log(peter.bye());