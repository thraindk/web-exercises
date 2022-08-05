console.log("JS geladen!");

function aendereUeberschrift() {
    var ueberschrift = document.getElementById("überschrift");
    ueberschrift.innerHTML= "Hallo JavaScript";
    console.log("Überschrift geändert");
}

aendereUeberschrift();

//window.alert('Hallo JavaScript');

document.getElementById("überschrift").innerHTML= "LOL";

var button = document.getElementById("b2");

button.addEventListener("click", addRow);

function addRow(){
    console.log("b2 geklickt");
    var tabelle = document.getElementById("tabelle");

    var neuezeile = tabelle.insertRow();
    var neuertd = neuezeile.insertCell();

    let tdInhalt = document.createTextNode("Max");
    neuertd.appendChild(tdInhalt);
    tabelle.setAttribute("style", "border-color: blue;");

}


