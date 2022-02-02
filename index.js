let vnesenaOperacijaZ = false;
let operacija = "";
let PŠ = "";
let DŠ = "";

function vnesenaŠtevilka(stevilka) { //funkcija onclick=kliknil(stevilka)
  if ( vnesenaOperacijaZ === false ) {
    PŠ = PŠ + stevilka;
    document.getElementById("display").value = PŠ;
  } else {
    DŠ = DŠ + stevilka;
    document.getElementById("display").value = DŠ;
  }
}

function vnesenaOperacija(op) {
  operacija = op;
  vnesenaOperacijaZ = true;
}

function izracun() {
  let rezultat;
  PŠ = parseFloat(PŠ);
  DŠ = parseFloat(DŠ);
  if ( operacija === "-" ){
    rezultat = PŠ - DŠ;
  } else if ( operacija === "+") {
    rezultat = PŠ + DŠ;
  } else if ( operacija === "*") {
    rezultat = PŠ * DŠ;
  } else if ( operacija === "/") {
    rezultat = PŠ / DŠ;
  } document.getElementById("display").value = rezultat;
  let noviHtml = `<tr>
            <td><p>${PŠ} ${operacija} ${DŠ} = ${rezultat}</p></td>
          </tr>`
  document.getElementById("izracuni").innerHTML += noviHtml;
  reset();
}

function clearHistory (){
  document.getElementById("izracuni").innerHTML = "";
  document.getElementById("display").value = "";
}

function clearDisplay () {
  document.getElementById("display").value = "";
  reset();
}
 function reset() {
   vnesenaOperacijaZ = false;
   operacija = "";
   PŠ = "";
   DŠ = "";
 }

