// variabili globali *****
let name;
let finalPrice;
let km;
let age;
let discountMessage;

// i buttoni genera e reset ****** 
const buttonGenera = document.getElementById('bottone-genera');
const buttonReset = document.getElementById('bottone-reset');


// sezione in cui il biglietto viene  stampato
const ticketPrint = document.getElementById('ticket_print');



// funzione del bottone Genera *****
buttonGenera.addEventListener('click', function(){

  const pricexKm = 0.21;
  const price = km * pricexKm;
  const discountMinor = 20;
  const discountOver65 = 40;

  km = parseInt(document.getElementById('km-trip').value);
  age = document.getElementById('age-passenger').value;
  name = document.getElementById('name-of-passenger').value;
// stampare il biglietto **
  ticketPrint.classList.remove('d-none');
  ticketPrint.classList.add('d-block');
  ticketPrint.style.height = '155px';


  // condizioni dell'età *
  if(age == 'Maggiorenne'){
        
    finalPrice = price.toFixed(2);
    discountMessage = `Biglietto Standard`
    
  }else if(age == 'Minorenne'){
    
    finalPrice = (price * (1 - (discountMinor/100))).toFixed(2);
    discountMessage = `Biglietto Junior`
        
  }else if (age == 'Over65'){
    
    finalPrice = (price * (1 - (discountOver65/100))).toFixed(2);
    discountMessage = `Biglietto Over65`
  }


  
// collegamenti con html *****
  document.getElementById('stamp-name').innerHTML = name;

  document.getElementById('type-of-discount').innerHTML = discountMessage;
  document.getElementById('carrozza').innerHTML = getRndInteger(1,20);
  document.getElementById('codice-cp').innerHTML = getRndInteger(8000,100000);
  document.getElementById('stamp-finalprice').innerHTML = finalPrice;
  
  
});



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione del bottone Reset ****
buttonReset.addEventListener('click', function(){
  
  ticketPrint.classList.remove('d-block');
  ticketPrint.classList.add('d-none');




  location.reload()
});









