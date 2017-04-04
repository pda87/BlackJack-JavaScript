var blackjackModule = (
function() {
	return {
		PageLoad: function() {
			$("#blackjack-deal").on('click', function() {
				blackjackModule.Deal();
			});

			$("#blackjack-burn").on('click', function() {
				blackjackModule.Burn();
			});

			$("#blackjack-reset").on('click', function() {
				blackjackModule.Reset();
			});
				
			this.fullCardDeck = [];
			this.newGame = false;
			this.gameOver = false;
			this.score = 0;
			this.randomUpperLimit = 51;
			this.cardCount = 2;
			this.randomNumber = 0;
			blackjackModule.Reset();
		},	
		Burn: function() {
		  if(this.score === 13 && this.cardCount == 2)
		  {
			blackjackModule.Reset();
		  }
		},
		Card: function(value, imageString) {
		  this.value = value;
		  this.imageString = imageString;
		},
		CheckBlackJack: function() {
		  if(this.score === 21)
		  {
			this.gameOver = true;
			alert("BlackJack!");
		  }
		},
		CheckBust: function() {
			if(this.score > 21)
			{
				this.gameOver = true;
				$("#blackjack-score").html("Bust! Score: " + parseInt(this.score));
			}
		},
		CheckForBurn: function() {
			if(score === 13)
			{
			alert("Click \"Burn\" to deal again!");
			}
		},
		Deal: function() {
		  blackjackModule.CheckBlackJack();

		  if(this.gameOver)
		  {
			return;
		  }

		  if(!this.newGame)
		  {
			blackjackModule.StartGame();
			return;
		  }

		  this.newGame = true;
		  blackjackModule.Turn();
		  
		  if(this.score === 21)
		  {
			alert("BlackJack!");
			this.gameOver = true;
			return;
		  }
		},
		DisplayScore: function() {
			$("#blackjack-score").html("Score: " + parseInt(this.score));
		},
		GenerateFullCardDeck: function() {
			var suits = ["S", "D", "C", "H"];
			
			for(var suit = 0; suit < suits.length; suit++) {
				
				for(var i = 2; i < 11; i++) {
					this.fullCardDeck.push(new blackjackModule.Card(i, "CardImages/" + i + suits[suit] + ".png"));
				}
					
				this.fullCardDeck.push(new blackjackModule.Card(10, "CardImages/J" + suits[suit] + ".png"));
				this.fullCardDeck.push(new blackjackModule.Card(10, "CardImages/Q" + suits[suit] + ".png"));
				this.fullCardDeck.push(new blackjackModule.Card(10, "CardImages/K" + suits[suit] + ".png"));
				this.fullCardDeck.push(new blackjackModule.Card(11, "CardImages/A" + suits[suit] + ".png"));
				
			}		
		},
		Reset: function() {
			this.randomUpperLimit = 51;
			this.cardCount = 2;
			this.score = 0;
			this.newGame = false;
			this.gameOver = false;
			blackjackModule.DisplayScore();

			$("#card1").attr("src", "CardImages/b1fv.png");
			$("#card2").attr("src", "CardImages/b1fv.png");
			$("#card3").attr("src", "CardImages/b1fv.png");

			blackjackModule.GenerateFullCardDeck();
		},
		StartGame: function() {
			this.score = 0;
			
			this.randomNumber = Math.round(Math.random()*(this.randomUpperLimit));
			this.randomUpperLimit--;
			var randomCard1 = this.fullCardDeck[this.randomNumber];
			this.fullCardDeck.splice(this.randomNumber, 1);

			this.randomNumber = Math.round(Math.random()*(this.randomUpperLimit));
			this.randomUpperLimit--;
			var randomCard2 = this.fullCardDeck[this.randomNumber];
			this.fullCardDeck.splice(this.randomNumber, 1);

			$("#card1").attr("src", randomCard1.imageString);
			$("#card2").attr("src", randomCard2.imageString);
			
			this.score = randomCard1.value + randomCard2.value;
			blackjackModule.DisplayScore();
			
			this.newGame = true;
		},
		Turn: function() {
			this.randomNumber = Math.round(Math.random()*(this.randomUpperLimit));
			this.randomUpperLimit--;
			this.cardCount++;
			var randomCard = this.fullCardDeck[this.randomNumber];
			this.fullCardDeck.splice(this.randomNumber, 1);

			$("#card3").attr("src", randomCard.imageString);
			
			this.score += randomCard.value;
			blackjackModule.DisplayScore();
			blackjackModule.CheckBust();
		}		
}})();

blackjackModule.PageLoad();	