var random1=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


var random2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


if(random1>random2){
  document.querySelector(".change").innerHTML = "Player 1 wins";
}

else if(random2>random1){
  document.querySelector(".change").innerHTML = "Player 2 wins";
}

else {
  document.querySelector(".change").innerHTML = "Match Drawn";
}
