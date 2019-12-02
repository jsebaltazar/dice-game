//Pseudo-random number generator 1-6
function roll(){
  return Math.floor(Math.random()*6) + 1;
  }

//change image for player 
var p1 = roll();
var p2 = roll();
document.querySelector("img.img1").src=`images/dice${p1}.png`;
document.querySelector("img.img2").src=`images/dice${p2}.png`;
if( p1 == p2){
  document.querySelector("h1").innerText = "Its a Draw!";
} else if (p1 > p2){
  document.querySelector("h1").innerText = "Player 1 Wins!";
}
else{
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
