/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const keyWord = "A";

// Dichiara la funzione qui.
const  IsFirstLetterTheSame = (array, key ) =>{
    let keyTest ="A";
    let firstLetter ="";
    let secondArray = []; 
    for( i = 0; i<= array.length -1; i++){
        firstLetter = (array[i][0])
        if( (array[i][0]) === key){
           secondArray.push(array[i])
        }
      }
      return secondArray;
} 

// Invoca la funzione qui e stampa il risultato in console
const namesAuthorized = IsFirstLetterTheSame( names , keyWord )


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(namesAuthorized)

