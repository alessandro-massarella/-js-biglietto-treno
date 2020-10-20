var distance = prompt ('Quanti km devi percorrere? ');
var age = prompt ('Quanti anni hai? ');
var priceInit = (distance * 0,21).toFixed(2);
var minorDiscount = (priceInit - (priceInit * 0.2)).toFixed(2);
var overDiscount = (priceInit - (priceInit * 0.4)).toFixed(2);

if (age < 19) {
  document.getElementById ('minor').innerHTML = ('Hai meno di 18 anni, il prezzo, comprensivo di sconto del 20%, è di Euro: ' + minorDiscount);
} else if (age < 65) {
  document.getElementById ('major').innerHTML = ('Il prezzo è di Euro: ' + priceInit);
} else if (age > 64) {
  document.getElementById ('over').innerHTML = ('Hai più di 65 anni, il prezzo, comprensivo di sconto del 40%, è di Euro: ' + overDiscount);
}
