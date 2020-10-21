// var distance = parseInt(prompt('Quanti km devi percorrere? '));
// var age = parseInt(prompt('Quanti anni hai? '));


var buttonElem = document.getElementById ('myButton');
buttonElem.addEventListener('click', function() {
  var nameSurElem = document.getElementById ('nameSurn');
  var distanceElem = document.getElementById ('distance');
  var ageElem = document.getElementById ('age');
  var priceInit = (distance * 0.21).toFixed(2);
  var minorDiscount = (priceInit - (priceInit * 0.2)).toFixed(2);
  var overDiscount = (priceInit - (priceInit * 0.4)).toFixed(2);

  if (ageElem == minor) {
    document.getElementById ('costo').innerHTML = ('Hai meno di 18 anni, il prezzo, comprensivo di sconto del 20%, è di Euro: ' + minorDiscount);
  } else if (ageElem == major) {
    document.getElementById ('costo').innerHTML = ('Il prezzo è di Euro: ' + priceInit);
  } else if (ageElem == over) {
    document.getElementById ('costo').innerHTML = ('Hai più di 65 anni, il prezzo, comprensivo di sconto del 40%, è di Euro: ' + overDiscount);
  }


})
