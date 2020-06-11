
var name1 = prompt("please enter name of first player.");
var name2 = prompt("please enter name of second player.");
var randomnumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomimagesource1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);


var randomnumber2 = Math.floor(Math.random() * 6)+1;
var randomimagesource2 = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomimagesource2);


if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML =  name1 +" WINS. ";
}
else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML =  name2 + " WINS. ";
}
else {
  document.querySelector("h1").innerHTML = " DRAW";
}
document.getElementById("p1").innerHTML = name1;
document.getElementById("p2").innerHTML= name2;

/*<link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">*/
