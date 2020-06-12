var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomImgages = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgages);


var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomImgages = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgages);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won!";

}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Won!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
 }
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + Math.floor(Math.random() * 6) + 1 + ".png");
