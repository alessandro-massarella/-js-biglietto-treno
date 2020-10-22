// var distance = parseInt(prompt('Quanti km devi percorrere? '));
// var age = parseInt(prompt('Quanti anni hai? '));


var buttonElem = document.getElementById ('myButton');
buttonElem.addEventListener('click', function() {
  var nameSurElem = document.getElementById ('nameSurn').value;
  var distanceElem = document.getElementById ('distance').value;
  var ageElem = document.getElementById ('age').value;
  var priceInit = (distanceElem * 0.21).toFixed(2);
  var minorDiscount = (priceInit - (priceInit * 0.2)).toFixed(2);
  var overDiscount = (priceInit - (priceInit * 0.4)).toFixed(2);
  var ticket = document.getElementById('ticket');
  ticket.style.display = 'block';




  if (ageElem === 'minor' ) {
    document.getElementById('costo').innerHTML = (minorDiscount);
    document.getElementById('offerta').innerHTML = ('Sconto minorenni');
  } else if (ageElem === 'major') {
    document.getElementById('costo').innerHTML = (priceInit);
    document.getElementById('offerta').innerHTML = ('Prezzo standard');
  } else if (ageElem === 'over') {
    document.getElementById('costo').innerHTML = (overDiscount);
    document.getElementById('offerta').innerHTML = ('Sconto Over 65');

  }

  document.getElementById('name').innerHTML = (nameSurElem);
  document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;
});


var refreshButtonEl = document.getElementById('annullaBut');

refreshButtonEl.addEventListener('click', function(){
	nameSurn.value = "";
	distance.value = "";
	age.value = "major";

	ticket.style.display = 'none';
})
