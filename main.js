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
if (userChose = "pari"){
    computerChose = "dispari"
} else {
    computerChose = "pari"
}

if(userChose != "pari" && userChose != "dispari") {
    alert("Errore. Abbiamo scelto per te: punterai sui pari");
    userChose= "pari";
}
console.log(userChose)

let inputUser = prompt("scegli un numero da 1 a 5")
if (inputUser < 1 || inputUser > 5 || inputUser === "") {
    alert("Errore. Abbiamo scelto per te: hai scelto 3 ");
    inputUser = 3
}
console.log(inputUser)

inputComputer = Math.floor(Math.random()*5)+1
console.log(inputComputer)

let risultato =  pariOdispari(inputUser + inputComputer);
console.log(risultato)

if (risultato = userChose){
    alert("hai vintooo")
} else  {
    alert("hai persooo")
}