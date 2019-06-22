
let value = 0;
let costOfApple = 10;
let costOfBanana = 7 ;
let costOfOranges = 5;

function incrementValue()
{
    /* yaha pr parsint is liye use kia he q k incre or dcre ka input
         type text he us ko type number mn change kia he pehle*/
    //  or phir us input ki .value ko equal kia he value veri k
    // or phir us ki inhitial value 0 ki he ..
    value = parseInt(document.querySelector('#number').value);
    value++;
    document.querySelector('#number').value = value;
    // yaha par mene total k input ko  id di he or us bad us ki 
    // value get ki he or us ki value  ko variable  value k equal rakha he
    //   0r us ko multiply kia he cost of apple se..
   document.querySelector('#total').value   = value * costOfApple;
    

}
function decrementValue()
{
    value = parseInt(document.querySelector('#number').value);
    value--;
    document.querySelector('#number').value = value;
    document.querySelector('#total').value   = value * costOfApple;

   
}
function add()
{
    value = parseInt(document.querySelector('#number2').value);
    value++;
    document.querySelector('#number2').value = value;
     document.querySelector('#total').value   = value * costOfOranges; 
    
}
function minus()
{
    value = parseInt(document.querySelector('#number2').value);
    value--;
    document.querySelector('#number2').value = value;
   document.querySelector('#total').value   = value * costOfOranges; 

}
function addition()
{
    value = parseInt(document.querySelector('#number3').value);
    value++;
    document.querySelector('#number3').value = value;
   document.querySelector('#total').value   = value * costOfBanana; 
   
}
function subtract()
{
    value = parseInt(document.querySelector('#number3').value);
    value--;
    document.querySelector('#number3').value = value;
   document.querySelector('#total').value   = value * costOfBanana; 

}
