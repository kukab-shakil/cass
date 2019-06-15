//////////////////////
/*
varibles
----------------
- Amount available 
- Amount buying
-----------------

*/
//////////////////////


var i = 0;
let amount = document.getElementById("userAmount");

function buttonClick() {
    let money=document.getElementById("userAmount").value;
    
    if(!(x>money)){
        i++;
        document.getElementById('inc').value = i;    

    }

}
    
   var e = 0;
   function buttondecClick(){
    i--;
     document.getElementById('inc').value = i;

   }
   var x = 0;
function oClick() {
    let money=document.getElementById("userAmount").value;
    x += 10;

    if(x>money){
        alert('Insufficient account balance');
    }else{  
        document.getElementById('total').value = x;
    }
    

}
function button(){
    alert('button herer');
    var z = (+buttonClick())+(+oClick());

}
function minusClick() {
    
    x -= 10;
    document.getElementById('total').value = x;
    

}
function minusbutton(){
    var z = (-buttondecClick())-(-minusClick());

}

// orange cost

var i = 0;
function orangebuttonClick() {
    
    i++;
    document.getElementById('orangeMinus').value = i;

}
    
   var e = 0;
   function orangebuttondecClick(){
    i--;
     document.getElementById('orangeMinus').value = i;

   }
   var x = 0;
function orangeClick() {
    
    x += 15;
    document.getElementById('total').value = x;
    

}
function orangebutton(){
    var z = (+orangebuttonClick())+(+orangeClick());

}
function orangeminusClick() {
    
    x -= 15;
    document.getElementById('total').value = x;
    

}
function orangeminusbutton(){
    var z = (-orangebuttondecClick())-(-orangeminusClick());

}
// banana
var i = 0;
function bananabuttonClick() {
    
    i++;
    document.getElementById('orangeMinus').value = i;

}
    
   var e = 0;
   function bananabuttondecClick(){
    i--;
     document.getElementById('orangeMinus').value = i;

   }
   var x = 0;
function bananaClick() {
    
    x += 7;
    document.getElementById('total').value = x;
    

}
function bananabutton(){
    var z = (+bananabuttonClick())+(+bananaClick());

}
function bananaminusClick() {
    
    x -= 7;
    document.getElementById('total').value = x;
    

}
function appleminusbutton(){
    var z = (-bananabuttondecClick())-(-bananaminusClick());

}


    



function userAmountCheck(){
    console.log(document.getElementById('userAmount').value);
    
    if(document.getElementById('userAmount').value < document.getElementById('total').value ){
        alert( 'hello world')
    }
    console.log(document.getElementById('total').value)

}
