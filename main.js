//! Scrivi un programma che stampi in console i numeri da 1 a 100
// // crea un ciclo da 1 a 100 //? come faccio a partire da 1? condizione <= 100
// for (let index = 1; index <= 100; index++) {
//     // stampa in console il numero //?come faccio a tenere il conto? sfrutta l'index
//     console.log(index);  
// }
//! ms 1 & bonus

const containerFizzBuzz = document.getElementById('container-fizzbuzz');
// crea un ciclo da 1 a 100
for (let index = 1; index <= 102; index++) {
    // se divisibile per 15 stampa "fizzbuzz" //?come? crea un div, assegna le classi e il contenuto - da non dimenticare la variabile da collegare al rowcontainer
    if (index % 15 === 0) {
        console.log("FIZZBUZZ! (15)");
        const divBox = document.createElement("div");
        divBox.classList.add("col-2", "text-center", "bg-danger");
        divBox.innerHTML = `FIZZBUZZ`;
        containerFizzBuzz.append(divBox);
    }
    // se divisibile per 5 stampa "buzz"
    else if (index % 5 === 0) {
        console.log("BUZZ! (5)");
        const divBox = document.createElement("div");
        divBox.classList.add("col-2", "text-center", "bg-primary");
        divBox.innerHTML = `BUZZ`;
        containerFizzBuzz.append(divBox);

    }   
    // se divisibile per 3 stampa "fizz" //?come? dividi per 3 e stampa solo se ti restituisce 0 come resto
    else if (index % 3 === 0) {
        console.log("FIZZ! (3)"); 
        const divBox = document.createElement("div");
        divBox.classList.add("col-2", "text-center", "bg-warning");
        divBox.innerHTML = "FIZZ";
        containerFizzBuzz.append(divBox);
    }    
    // altrimenti stampa il numero
    else {
        console.log(index);
        const divBox = document.createElement("div");
        divBox.classList.add("col-2", "text-center", "bg-dark", "text-white");
        divBox.innerHTML = index;
        containerFizzBuzz.append(divBox);
    }
}
