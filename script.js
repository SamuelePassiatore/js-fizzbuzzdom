console.log('JS OK');

/* Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero,
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

/*
1 - Prendo gli elementi in pagina.
2 - Creo un ciclo in console con i numeri da 1 a 100.
3 - Creo un'istruzione condizionale.
4 - Stampo le variabili in pagina.


*/

// 1 - Prendo gli elementi in pagina.
const table = document.getElementById('table');

// 2 - 3 - 4 Creo un ciclo in console con i numeri da 1 a 100.
let fizzBuzz = 'fizzBuzz';
let fizz = 'fizz';
let buzz = 'buzz';

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log (fizzBuzz);
      table.innerText += fizzBuzz;
    } else if (i % 3 === 0) {
      console.log (fizz);
      table.innerText += fizz;
    } else if (i % 5 === 0) {
      console.log (buzz);
      table.innerText += buzz;
    } else {
      console.log(i);
      table.innerText += i;
    }
}








