
// var name1= prompt("Enter player 1 Name");
//
// document.querySelectorAll("p")[0].innerHTML=name1;
// var name2=prompt("Enter player 2 name");
// document.querySelectorAll("p")[1].innerHTML=name2;
// function rollDice(){
//
// var randomNumber1 =Math.floor(Math.random()*10)+1;
// var diceImage="images/d"+randomNumber1+".png";
// var image=document.querySelector("img.img1");
// image.setAttribute("src",diceImage);
// }
function roll(){

var randomNumber1 =Math.floor(Math.random()*10)+1;
var diceImage="images/d"+randomNumber1+".png";
var image=document.querySelector("img.img1");
image.setAttribute("src",diceImage);
}
function rollDice(){

var randomNumber1 =Math.floor(Math.random()*10)+1;
var diceImage="images/v"+randomNumber1+".png";
var image=document.querySelector("img.img2");
image.setAttribute("src",diceImage);
}





//
// if(randomNumber1>randomNumber2){
//   document.querySelector("h1").innerHTML="🚩"+name1+" Won";
// }
// else if(randomNumber1 < randomNumber2){
//   document.querySelector("h1").innerHTML="🚩" +name2+ " Won";
// }
// else{
// document.querySelector("h1").innerHTML="🏴‍☠️Draw";
// }
// }
