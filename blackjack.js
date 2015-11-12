function burn() {
  if(score === 13 && cardCount == 2)
  {
    reset();
  }
}

function card(value, imageString) {
  this.value = value;
  this.imageString = imageString;
}

function checkBlackJack() {
  if(score === 21)
  {
	gameOver = true;
    alert("BlackJack!");
  }
}

function checkBust() {
	if(score > 21)
	{
	 gameOver = true;
	 scoreOutput.innerHTML = "Bust! Score: " + parseInt(score);
	}
}

function checkForBurn() {
  if(score === 13)
  {
    alert("Click \"Burn\" to deal again!");
  }
}

function dealClick() {

  if(gameOver)
  {
    return;
  }

  if(!newGame)
  {
	startGame();
	return;
  }

  newGame = true;
  turn();
  
  if(score === 21)
  {
    alert("BlackJack!");
	gameOver = true;
	return;
  }
  
}

function displayScore() {
	scoreOutput.innerHTML = "Score: " + parseInt(score);
}

function generateFullCardDeck() {

//SPADES
fullCardDeck[0] = new card(2, "CardImages/2S.png");
fullCardDeck[1] = new card(3, "CardImages/3S.png");
fullCardDeck[2] = new card(4, "CardImages/4S.png");
fullCardDeck[3] = new card(5, "CardImages/5S.png");
fullCardDeck[4] = new card(6, "CardImages/6S.png");
fullCardDeck[5] = new card(7, "CardImages/7S.png");
fullCardDeck[6] = new card(8, "CardImages/8S.png");
fullCardDeck[7] = new card(9, "CardImages/9S.png");
fullCardDeck[8] = new card(10, "CardImages/10S.png");
fullCardDeck[9] = new card(10, "CardImages/JS.png");
fullCardDeck[10] = new card(10, "CardImages/QS.png");
fullCardDeck[11] = new card(10, "CardImages/KS.png");
fullCardDeck[12] = new card(11, "CardImages/AS.png");

//DIAMONDS
fullCardDeck[13] = new card(2, "CardImages/2D.png");
fullCardDeck[14] = new card(3, "CardImages/3D.png");
fullCardDeck[15] = new card(4, "CardImages/4D.png");
fullCardDeck[16] = new card(5, "CardImages/5D.png");
fullCardDeck[17] = new card(6, "CardImages/6D.png");
fullCardDeck[18] = new card(7, "CardImages/7D.png");
fullCardDeck[19] = new card(8, "CardImages/8D.png");
fullCardDeck[20] = new card(9, "CardImages/9D.png");
fullCardDeck[21] = new card(10, "CardImages/10D.png");
fullCardDeck[22] = new card(10, "CardImages/JD.png");
fullCardDeck[23] = new card(10, "CardImages/QD.png");
fullCardDeck[24] = new card(10, "CardImages/KD.png");
fullCardDeck[25] = new card(11, "CardImages/AD.png");

//CLUBS
fullCardDeck[26] = new card(2, "CardImages/2C.png");
fullCardDeck[27] = new card(3, "CardImages/3C.png");
fullCardDeck[28] = new card(4, "CardImages/4C.png");
fullCardDeck[29] = new card(5, "CardImages/5C.png");
fullCardDeck[30] = new card(6, "CardImages/6C.png");
fullCardDeck[31] = new card(7, "CardImages/7C.png");
fullCardDeck[32] = new card(8, "CardImages/8C.png");
fullCardDeck[33] = new card(9, "CardImages/9C.png");
fullCardDeck[34] = new card(10, "CardImages/10C.png");
fullCardDeck[35] = new card(10, "CardImages/JC.png");
fullCardDeck[36] = new card(10, "CardImages/QC.png");
fullCardDeck[37] = new card(10, "CardImages/KC.png");
fullCardDeck[38] = new card(11, "CardImages/AC.png");

//HEARTS
fullCardDeck[39] = new card(2, "CardImages/2H.png");
fullCardDeck[40] = new card(3, "CardImages/3H.png");
fullCardDeck[41] = new card(4, "CardImages/4H.png");
fullCardDeck[42] = new card(5, "CardImages/5H.png");
fullCardDeck[43] = new card(6, "CardImages/6H.png");
fullCardDeck[44] = new card(7, "CardImages/7H.png");
fullCardDeck[45] = new card(8, "CardImages/8H.png");
fullCardDeck[46] = new card(9, "CardImages/9H.png");
fullCardDeck[47] = new card(10, "CardImages/10H.png");
fullCardDeck[48] = new card(10, "CardImages/JH.png");
fullCardDeck[49] = new card(10, "CardImages/QH.png");
fullCardDeck[50] = new card(10, "CardImages/KH.png");
fullCardDeck[51] = new card(11, "CardImages/AH.png");

}

function reset() {
randomUpperLimit = 51;
cardCount = 2;
score = 0;
newGame = false;
gameOver = false;
displayScore();

var card1 = document.getElementById("card1");
card1.src = "CardImages/b1fv.png";

var card2 = document.getElementById("card2");
card2.src = "CardImages/b1fv.png";

var card3 = document.getElementById("card3");
card3.src = "CardImages/b1fv.png";

generateFullCardDeck();

}

function startGame() {
	score = 0;
	
	randomNumber = Math.round(Math.random()*(randomUpperLimit));
	randomUpperLimit--;
	var randomCard1 = fullCardDeck[randomNumber];
	fullCardDeck.splice(randomNumber, 1);

	randomNumber = Math.round(Math.random()*(randomUpperLimit));
	randomUpperLimit--;
	var randomCard2 = fullCardDeck[randomNumber];
	fullCardDeck.splice(randomNumber, 1);

	var card1 = document.getElementById("card1");
	card1.src = randomCard1.imageString;

	var card2 = document.getElementById("card2");
	card2.src = randomCard2.imageString;

	score = randomCard1.value + randomCard2.value;
	displayScore();
	
	newGame = true;
}

function turn() {
	randomNumber = Math.round(Math.random()*(randomUpperLimit));
	randomUpperLimit--;
	cardCount++;
	var randomCard = fullCardDeck[randomNumber];
	fullCardDeck.splice(randomNumber, 1);
	var card3 = document.getElementById("card3");
	card3.src = randomCard.imageString;
	score += randomCard.value;
	displayScore();
	checkBust();
}

var fullCardDeck = [];
var newGame;
var gameOver;
var score;
var randomUpperLimit;
var cardCount;
var randomNumber;
var scoreOutput = document.getElementById("score");

reset();