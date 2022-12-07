console.log('JS OK');

/* Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero,
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

/*
1 - Prendo gli elementi in pagina.
2 - Creo un ciclo in console con i numeri da 1 a 100.
3 - Creo un'istruzione condizionale con i multipli di tre e stampo "Fizz" al posto del numero.
4 - Creo un'istruzione condizionale con i multipli di cinque e stampo "Buzz" al posto del numero.
5 - Creo un'istruzione condizionale con i multipli sia di tre che di cinque e stampo "FizzBuzz" al posto del numero.
*/

// 1 - Prendo gli elementi in pagina.
let fizz = document.getElementById('fizz');
let buzz = document.getElementById('buzz');
let fizzBuzz = document.getElementById('fizz-buzz');

// 2 - Creo un ciclo in console con i numeri da 1 a 100.
fizz = 'fizz';
buzz = 'buzz';
fizzBuzz = 'fizz-buzz'

for (let i = 1; i <= 100; i++){

    if (i % 3 === 0 && i % 5 === 0) {
      console.log (fizzBuzz);
    } else if (i % 3 === 0) {
      console.log (fizz);
    } else if (i % 5 === 0) {
      console.log (buzz);
    } else {
      console.log(i);
    }

}






