/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vowels = 0;
let consonants = 0;

// Dichiara la funzione qui.
  const howManyvowels = ( string) =>{
    let = numberVowels= 0;
    for (let i = 0; i < string.length; i++) {
        let caracter = string[i];
        if (
            caracter === "a" ||
            caracter === "e" ||
            caracter === "i" ||
            caracter === "o" ||
            caracter === "u"
          ) {
            numberVowels = vowels++
        }else{
            consonants++
        }

             
  } 

         return numberVowels;
  }

// Invoca la funzione qui e stampa il risultato in console
let vowelsNumber = howManyvowels ( word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
   console.log(vowels)






    
