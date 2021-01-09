
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImageSource2= "images/dice" + randomNumber2 + ".png";
var randomImageSource1= "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImageSource1);
document.querySelector(".img2").setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player1 is the winner !!!";
}
else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="draw";
}
else {
  document.querySelector("h1").innerHTML="player2 is the winner !!!";
}
