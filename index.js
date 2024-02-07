var dice1; 
var dice2;
dice2 = Math.floor(Math.random() * 6 + 1);
dice1 = Math.floor(Math.random() * 6 + 1);
console.log(dice1);
console.log(dice2);
if(dice1>dice2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 wins !";
}
else if(dice1<dice2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 wins !";
}
else if(dice1==dice2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="It's A Draw !";
}

var randomDiceImage = "Images/" + dice1 + ".jpg";
myImage.setAttribute("src", randomDiceImage);

var randomDiceImage = "Images/" + dice2 + ".jpg";
myImage1.setAttribute("src", randomDiceImage);