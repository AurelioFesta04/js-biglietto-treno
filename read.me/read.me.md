<!-- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.
:avviso: Prima di scrivere il codice impostate il ragionamento nel file README.md!
Bonus:
Applicare de controlli sull'input dell'utente -->

### Dati
-prezzo del biglietto 0.21 euro / km
-sconto del 20% per i passeggeri minorenni
-sconto del 40% per i passeggeri con età pari o superiore a 65 anni

### Esecuzione logica
-creare 2 input per il cliente:
 -numero di kilometri da percorrere
 -età
-per trovare il prezzo del biglietto bisogna moltiplicare il numero dei km inserito dall'utente per 0.21
-poi si prosegue con l'applicazione dello sconto:
 -20% per i passeggeri con età inferiore a 18 anni
 -40% per i passeggeri con età superiore o uguale a 65 anni
 
### Output
-prezzo totale del viaggio con due numeri decimali (centesimi) 