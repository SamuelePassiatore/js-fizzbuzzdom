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
let element = document.getElementById('element');

// 2 - 3 Creo un ciclo in console con i numeri da 1 a 100.
let fizzBuzz = 'fizzBuzz';
let fizz = 'fizz';
let buzz = 'buzz';

// Variabili d'appoggio
let content = '';

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log (fizzBuzz);
      content += `<div class="bg-custom-red fw-bold">${fizzBuzz}</div>`;
    } else if (i % 3 === 0) {
      console.log (fizz);
      content += `<div class="bg-custom-green fw-bold">${fizz}</div>`;
    } else if (i % 5 === 0) {
      console.log (buzz);
      content += `<div class="bg-custom-yellow fw-bold">${buzz}</div>`;
    } else {
      console.log(i);
      content += `<div class="bg-custom-light-blue fw-bold">${i}</div>`;
    }
}

// 4 - Stampo la variabile d'appoggio in pagina
element.innerHTML = content;














