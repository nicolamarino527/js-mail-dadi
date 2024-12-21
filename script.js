// -------------------------- esercizio numero 1: --------------------------


// stiliamo la lista di mail 
const list = [
    "alessandro.rossi@example.com",
    "chiara.bianchi@example.com",
    "valentina.violetti@example.com",
    "marco.marrone@example.com",
    "giovanni.neri@example.com",
    "sara.blu@example.com",
]

// chiediamo all utente la sua mail
const email = prompt("inserisci la tua mail")

// impostiamo una variabile per controllare se l' email è realmente in lista 
let emailFound = false;

// creiamo un ciclo dove la macchina cerca tra le mail quella uguale a quela inserita dall utente
// indipendentemente da se viene trovata o meno la mail il ciclo si arresta
for (let i = 0; i < list.length; i++) {
    if (list[i] === email) {
      emailFound = true;
      break;
    }
  }

// se la mail viene trovata la variabile diventa reale e quindi ciediamo alla macchina di stampare il messaggio positivo
// se la mail  non viene trovata chiediamo di stampare il maìessaggio negativo

if (emailFound) {
    console.log("Complimenti! se entrato alla festa!!")
}
else {
    console.log("Mmmm... mi dispiace ma la mail non è sull elenco...")
}



// -------------------------- esercizio numero 2: --------------------------

// Creiamo la lista di numeri presenti su un dado a sei facce
let d6 = [1, 2, 3, 4, 5, 6];

// Generiamo un prompt da cui far partire il gioco
const start = prompt("Ora premi INVIO per lanciare un dado:");

// Inizializziamo le variabili per i dadi
let playerDice;
let pcDice;

// Se l'utente preme invio, esegui il gioco
if (start === "") {
  // Numero casuale per il giocatore
  const numPlayer = Math.floor(Math.random() * d6.length);
  playerDice = d6[numPlayer];
  console.log("Hai tirato:", playerDice);

  // Numero casuale per il computer
  const numPc = Math.floor(Math.random() * d6.length);
  pcDice = d6[numPc];
  console.log("Il dado del tuo avversario:", pcDice);

  // Confrontiamo i risultati
  if (playerDice > pcDice) {
    console.log("Complimenti hai vinto!");
  } else if (playerDice === pcDice) {
    console.log("Pareggio!");
  } else {
    console.log("Hai perso...");
  }
} else {
  // Se l'utente non preme invio, stampa un messaggio di errore
  console.log("Avresti dovuto premere invio...");
}