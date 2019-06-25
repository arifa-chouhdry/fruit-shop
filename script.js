
var total = 0;
var appleQuantity = 0;
var orangeQuantity = 0;
var bananaQuantity = 0;
var wallet = 0;

 
function cash() {
    wallet = document.querySelector('#cash-value').value;
  }

function addApple()
{
    appleQuantity++;
    document.getElementById('number').value = appleQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML=total;
}
function addOrange()
{
    orangeQuantity++;
    document.getElementById('number2').value = orangeQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML=total;
}
function addBanana()
{
    bananaQuantity++;
    document.getElementById('number3').value = bananaQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5 ;
    document.getElementById('total-value').innerHTML=total;
    
}
function minusApple()
{
    appleQuantity--;
    document.getElementById('number').value = appleQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML=total;
}
function minusOrange()
{
    
    orangeQuantity--;
    document.getElementById('number2').value = orangeQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML=total;
  
}
function minusBanana()
{
  
    bananaQuantity--;
    document.getElementById('number3').value = bananaQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5 ;
    document.getElementById('total-value').innerHTML=total;
}