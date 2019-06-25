
var total = 0;
var appleQuantity = 0;
var orangeQuantity = 0;
var bananaQuantity = 0;
var wallet = 0;

 
function cash() {
    wallet = document.querySelector('#cash-value').value;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    if(total>wallet){
        return false;
    }else{
        console.log('else');
        document.getElementById('total-value').innerHTML=total;
        return true;        
    }
  }

function addApple()
{
    if(cash()){
        appleQuantity++;
        document.getElementById('number').value = appleQuantity;
    }else{
        alert('you have insuficient balance');

    }

}
function addOrange()
{
    if(cash()){
        appleQuantity++;
        document.getElementById('number').value = appleQuantity;
    }else{
        alert('you have insuficient balance');

    }
    orangeQuantity++;
    document.getElementById('number2').value = orangeQuantity;
    total= appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML=total;
}
function addBanana()
{
    if(cash()){
        appleQuantity++;
        document.getElementById('number').value = appleQuantity;
    }else{
        alert('you have insuficient balance');

    }
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