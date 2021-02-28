/* Palindroma
 Chiedere all'utente di inserire una parola
 Creare una funzione per capire se la parola inserita è palindroma */

 // chiedere all'utente di inserire una parola con un prompt

 var parolaUtente = prompt("Inserisci una parola e verifica se è palindroma");
 console.log(parolaUtente);

 // funzione che rende stringa ogni lettera della parolaUtente, ne inverte l'ordine e la unisce di nuovo. 

 function isPalindrome(parola) {
  var invertita = parola.split("").reverse().join("");
  console.log(invertita);

  if (invertita == parola) {
   alert("la parola è palindroma");
   return true;
  }
  else {
   alert("la parola non è palindroma");
   return false;
  }

 }
 console.log(isPalindrome(parolaUtente));