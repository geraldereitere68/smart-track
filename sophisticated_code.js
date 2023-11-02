/* 
   Filename: sophisticated_code.js
   Description: This code demonstrates a complex implementation of a card game called "Magic Deck".
   The game involves creating a deck, shuffling it, dealing cards to players, and simulating gameplay.
   It also includes advanced features like custom card classes, player objects, and various game actions.
*/

// Card class represents a single card with properties like suit, rank, and value
class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

// Deck class represents a collection of cards with methods for shuffling and dealing
class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.ranks = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (let suit of this.suits) {
      for (let i = 0; i < this.ranks.length; i++) {
        let value = i + 1;
        this.cards.push(new Card(suit, this.ranks[i], value));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numPlayers, cardsPerPlayer) {
    let players = [];
    for (let i = 0; i < numPlayers; i++) {
      players.push([]);
    }

    for (let i = 0; i < cardsPerPlayer; i++) {
      for (let j = 0; j < numPlayers; j++) {
        players[j].push(this.cards.pop());
      }
    }

    return players;
  }
}

// Player class represents a player with a name and hand of cards
class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
  }

  playCard() {
    return this.hand.pop();
  }
}

// Game class represents a game instance with multiple players
class Game {
  constructor(numPlayers) {
    this.deck = new Deck();
    this.deck.shuffle();

    this.numPlayers = numPlayers;
    this.players = [];

    for (let i = 0; i < numPlayers; i++) {
      let playerHand = this.deck.deal(1, 5);
      this.players.push(new Player(`Player ${i + 1}`, playerHand));
    }
  }

  start() {
    console.log("Game started!");
    console.log("Players:", this.players);

    this.playRound();
  }

  playRound() {
    console.log("Playing a round...");

    for (let player of this.players) {
      let card = player.playCard();
      console.log(`${player.name} played ${card}`);
    }

    console.log("Round finished!");

    if (this.deck.cards.length === 0) {
      console.log("Game over!");
      return;
    }

    this.playRound();
  }
}

// Main program
const game = new Game(4);
game.start();