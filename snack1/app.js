/*

Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array 
fino a quando la somma degli elementi è minore di 50.

*/
/*
let numberList = [];
let sommaNumberList = 0;

do {
    let askUser = parseInt(prompt("Inserisci un numero."));
        numberList.push(askUser);

    for (let i = 1; i < numberList.length; i++) {
        
        sommaNumberList = sommaNumberList + numberList[i];
    }
    
    console.log(sommaNumberList);
} while (sommaNumberList <= 50)
*/



let numberList = [];
let sommaNumberList = 0;

let i = 0;
while (sommaNumberList < 50) {
    let askUser = parseInt(prompt("Inserisci un numero."));
    numberList.push(askUser);

    console.log(askUser);

    for (let k = 0; k < numberList.length; k++) {
        sommaNumberList = sommaNumberList + numberList[k];
    }

    i++;

    console.log("totale: " + sommaNumberList);
} 


