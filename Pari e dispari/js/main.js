//  Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var pariDispari = prompt("Scegli tra pari o dispari");
console.log(pariDispari);

var numeroUtente = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(numeroUtente);

var numeroComputer;
numeroComputer = parseInt(document.getElementById("computer_number").innerHTML = Math.floor(Math.random() * 5) +1);


// Sommiamo i due numeri
var sum = (numeroUtente + numeroComputer);
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEvenOrOdd(sum) {
 if (sum % 2 == 0) {
  console.log("numero pari");
 }
 else if ( sum % 2 != 0) {
  console.log("numero dispari")
 }
 else {
  console.log("numeri uguali");
 }

}
console.log(isEvenOrOdd());

// Dichiariamo se l'utente ha vinto.