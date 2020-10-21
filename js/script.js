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

  if (ageElem === 'minor' ) {
    document.getElementById('costo').innerHTML = (minorDiscount);
  } else if (ageElem === 'major') {
    document.getElementById('costo').innerHTML = (priceInit);
  } else if (ageElem === 'over') {
    document.getElementById('costo').innerHTML = (overDiscount);
  }
console.log(minorDiscount)
console.log(priceInit)
console.log(overDiscount)
})
