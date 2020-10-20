var distance = prompt ('Quanti km devi percorrere? ');
var age = prompt ('Quanti anni hai? ');
var priceInit = (distance * 0,21);

if (age < 19) {
  document.getElementById ('minor').innerHTML = ('Hai meno di 18 anni, il prezzo, comprensivo di sconto del 20%, è di Euro: ' + (priceInit * 0.8));
}
