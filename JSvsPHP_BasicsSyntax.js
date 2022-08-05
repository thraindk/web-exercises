// Variable

var x = 2;

console.log(typeof(x));

if (x === 2) {
  console.log("stimmt");
}

// Arrays und for

var array1 = new Array(1, 2, 3);

array1.push(1);

console.log(array1)

array1.pop(3); // 1 am Ende raus

delete array1[0]; // 1 am Anfang raus

array1.splice(2, 0, "Hallo", "Welt"); // index, delcount, new

console.log("Länge: " + array1.length);


for(i in array1) {
  console.log(array1[i]);
}

var array2 = [0 , "Hallo", 2.5];

for(i of array2) {
  console.log(i);
}

var array3 = {"book" : "Buch", "hat" : "Hut"};

console.log(array3["book"]);

// Funktionen und Objekte

function summe(x, y) {
  return x + y;
}

console.log(summe(10, 5));

var student = {
matnr: 1234,
name: "Anna",
sagHallo: function() { return this.name + ": Hallo!";}
};

console.log(student.sagHallo());