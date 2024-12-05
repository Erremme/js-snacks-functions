/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const whatSayToUser = (string) => {
    let goodMorning= "Buongiorno";
    let goodAfternoon= "Buon pomeriggio";
    let goodEvening= "Buona sera";
    let now = new Date()
    let hour = now.getHours
    if(hour >= 5 && hour <= 13){
        return (`${goodMorning} ${string}`)
    }else if( hour >= 14 && hour <= 17 ){
        return (`${goodAfternoon} ${string}`)
    }else{
        return(`${goodEvening} ${string}`)
    }


}


// Invoca la funzione qui e stampa il risultato in console
 
const sayHello = whatSayToUser(name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(sayHello)