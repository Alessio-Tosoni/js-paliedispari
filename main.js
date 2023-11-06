function pariOdispari(numero) {
let risultato
    if(numero % 2 == 0){
        risultato = "pari" 
    } else{
        risultato = "dispari"
    }
    return risultato
}

let userChose = prompt("scegli pari o dispari")
if (userChose = pari){
    computerChose = dispari
} else {
    computerChose = pari
}

if(scelta != "pari" && scelta != "dispari") {
    alert("Errore. Abbiamo scelto per te: punterai sui pari");
    scelta = "pari";
}

let inputUser = prompt("scegli un numero da 1 a 5")
if (inputUser < 1 || inputUser > 5 || inputUser === "") {
    alert("Please choose a number from (1-5)");
    
}
