// get price by id 
function getPrice(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.innerText;
  const input = parseFloat(inputFieldString);
  return input;
}

function couponApply(){
   const input=document.getElementById("input-cupon").value;
   if(input==="SELL200"){
    function giveDiscount(t){
        console.log(t)
    }
   }
   else{
    alert("please Give valid Coupon Code !!!!!!!!!!")
   }
}