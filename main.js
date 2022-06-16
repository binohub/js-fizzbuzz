//! Scrivi un programma che stampi in console i numeri da 1 a 100
// // crea un ciclo da 1 a 100 //? come faccio a partire da 1? condizione <= 100
// for (let index = 1; index <= 100; index++) {
//     // stampa in console il numero //?come faccio a tenere il conto? sfrutta l'index
//     console.log(index);  
// }
//! ms 1 & bonus
// crea un ciclo da 1 a 100
for (let index = 1; index <= 100; index++) {
    
    // se divisibile per 15 stampa in console "fizzbuzz"
    if (index % 15 === 0) {
        console.log("FIZZBUZZ! (15)");
    }
    // se divisibile per 5 stampa in console "buzz"
    else if (index % 5 === 0) {
        console.log("BUZZ! (5)");
    }   
    // se divisibile per 3 stampa in console "fizz" //?come? dividi per 3 e stampa solo se ti restituisce 0 come resto
    else if (index % 3 === 0) {
        console.log("FIZZ! (3)"); 
    }    
    // altrimenti stampa in console il numero
    else {
        console.log(index);
    }
}
