// dati
const userKm = prompt("quanti kilometri sarà lungo il tuo viaggio?");
console.log(userKm, typeof Number);

const userEta = prompt("quanti anni hai?");
console.log(userEta, typeof Number);

const ticketPrice = (0.21 * userKm);
console.log(ticketPrice);

let ticketPriceOff = ticketPrice;

// esecuzione
if (userEta < 18) {
    ticketPriceOff = (ticketPrice - (ticketPrice * 0.20))
} else if (userEta >= 65) {
    ticketPriceOff = (ticketPrice - (ticketPrice * 0.40))
}

console.log(ticketPriceOff.toFixed(2))