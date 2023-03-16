//console.log("Ciao Tony");

// alert("ciao");

//let userMsg = prompt("Ciao chi sei?");

// console.log("Benvenuto", userMsg);

//let tonyOne = "Ciao sono Tony";
//const tonyTwo = "Ciao sono Tony";

// boolean type
// const isOpen = true; //true or false
// const myName = "Tony";
// const myAge = 22;
// console.log(typeof myAge);
// let something; //undefined, default value
// null;

//const userChoice = prompt("Inserisci un numero");

// if (userChoice >= 10) {
//   console.log("Numero maggiore o uguale a dieci, ovvero:", userChoice);
// } else if (userChoice >= 5 && userChoice <= 9) {
//   console.log("Hai vinto", userChoice);
// } else {
//   console.log("Prova di nuovo");
// }

//SWITCH
// switch(userChoice) {
//     case(userChoice >= 10);
//         console.log("Numero maggiore o uguale a dieci, ovvero:", userChoice);
//         break;
//     case (userChoice >= 5 && userChoice <=9);
//         console.log("Hai vinto", userChoice);
//         break;
//     default:
//         console.log("Prova di nuovo");
// }

// // Ternary operator
// userChoice >= 10
// ? console.log("Numero maggiore o uguale a dieci, ovvero:", userChoice)
// : console.log("Prova di nuovo");

// Calculator - PSEUDO-CODE
// 1. Chiede due numeri input all'utente;
//  - IF l'utente non inserisce uno o entrambi i numeri, return string and stop the code

// 2. Chieda all'utente l'operazione da eseguire;
//  - IF l'utente non inserisce alcuna operazione, return string and stop the code

// 3. Venga mostrato il risultato dell'operazione all'utente

// Calculator - CODE

const firstNum = prompt("Inserisci il primo numero");
const secondNum = prompt("Inserisci il secondo numero");
const operationChoice = prompt("-inserisci l'operazione da svolgere");

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log("Non hai inserito un numero");
}

// if (operationChoice === "addizione") {
//   console.log(
//     "il risultato della tua operazione è:",
//     parsedFirstNum + parsedSecondNum
//   );
// }

switch (operationChoice) {
  case "addizione":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum + parsedSecondNum
    );
    break;
  case "sottrazione":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum - parsedSecondNum
    );
    break;
  case "moltiplicazione":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum * parsedSecondNum
    );
    break;
  case "divisione":
    console.log(
      "il risultato della tua operazione è:",
      parsedFirstNum / parsedSecondNum
    );
    break;
  default:
    console.log("Non hai inserito nessun operatore");
}
