/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const helloUser = ( string) =>{
    let hello = "Ciao";
      hello = (`${hello} ${string}`) ;
      return hello;

}

// Invoca la funzione qui e stampa il risultato in console

 const sayHello = helloUser ( userName)

//Risultato atteso se si passa 'Mario': // ciao Mario

console.log( sayHello)

