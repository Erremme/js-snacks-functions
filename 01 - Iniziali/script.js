/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const getFirstLetter = ( array ) =>{
    let arrayWithFistLetter = [];
    for( i = 0; i <= array.length-1; i++){
     arrayWithFistLetter.push(array[i][0]) 
    } 
        return arrayWithFistLetter
}

// Invoca la funzione qui e stampa il risultato in console
const FirstLetterArray = getFirstLetter( names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(FirstLetterArray)


