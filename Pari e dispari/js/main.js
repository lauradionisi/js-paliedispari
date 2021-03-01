//  Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var pariDispari = prompt("Scegli tra pari o dispari");
console.log(pariDispari);

var numeroUtente = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(numeroUtente);


// Generiamo un numero random con una funzione

function randomNumber(min, max) {
 var result = Math.floor(Math.random() * (max - min)) + min;
 return result; 
}

var numeroComputer = randomNumber(1, 5);
console.log("Il numero del tuo avversario è " + numeroComputer);

// Sommiamo i due numeri
var sum = (numeroUtente + numeroComputer);
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEvenOrOdd(number) {

 if (number % 2 == 0) {
  return true;
 }
 return false;
}

isEvenOrOdd(sum);
console.log(isEvenOrOdd(sum));

var result = (isEvenOrOdd(sum))? "pari":"dispari";

// Dichiariamo se l'utente ha vinto.

if (result == pariDispari) {
 console.log("Hai vinto!");
}
else {
 console.log("Hai perso!");
}