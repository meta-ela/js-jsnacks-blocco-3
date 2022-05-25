/*
Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti

*/


let numberList = [];

let i = 0;
while (i < 5) {
    let askUser = parseInt(prompt("Inserisci un numero."));
    numberList.push(askUser);

    console.log(askUser);

    let sommaNumberList = 0;

    for (let k = 0; k < numberList.length; k++) {
        sommaNumberList = sommaNumberList + numberList[k];
    }

    i++;
    
    console.log("totale: " + sommaNumberList);
} 


/*
let numberList = [];

let sommaNumberList = 0;

while (sommaNumberList < 5) {
    let askUser = parseInt(prompt("Inserisci un numero."));
    sommaNumberList = sommaNumberList + numberList;
    console.log("totale: " + sommaNumberList);
}
*/