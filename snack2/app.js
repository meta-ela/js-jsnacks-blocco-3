/*
Snack2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
Ogni volta che ne crei uno, stampalo.

*/

let askUser = parseInt(prompt("Inserisci un numero."));


let i = 0;

while (isNaN(askUser)) {
    let listArray = [];
    let N = parseInt(askUser);
    console.log(N);

    for (j = 0; j < 10; i++) {
        listArray.push(Math.floor((Math.random() * 100) + 1));
    }



    i++

    console.log(listArray);
}

