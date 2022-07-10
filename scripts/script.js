// SETTINGS==========================================================================================
const jack = 10;
const queen = 10;
const king = 10;
const ace = "Ace";
const pen = 0;

let fulldeck = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
];

let fulldeckSix = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
];

let fulldeckAces = [
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  9,
  10,
  jack,
  queen,
  king,
  ace,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  jack,
  queen,
  king,
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  ace,
  10,
  jack,
  queen,
  king,
  ace,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  jack,
  queen,
  king,
  ace,
];

//let fulldeckAces = [10,10,10,10,10,10,10,10,10,10,2,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];

let deckToPlay = [...fulldeckSix]; // so I don't over-write the previous deck
let deckToCompare = [...deckToPlay];

let shuffledDeck = [];

const player = {
  hand: [],
  sum: null,
  altsum: null,
  sums: [],
};

const dealer = {
  hand: [],
  altsum: null,
  sum: null,
};

let playersum = 0;
let dealersum = 0;
let aces = null;
let daces = null;
let altsum = null;
let dealeraltsum = null;
let newhand = [];
let penCardOut = false;
let amountOfHands = 1;
let betIsDoubled = false;
const deck = document.querySelector(".deck");

function broadcast(message) {
  document.querySelector(".message").innerHTML = message;
}

let bet = 0;
let savedBet = 0;
let pot = 0;
let bankroll = 1000;
document.getElementById("bank").innerHTML = bankroll;

// Rendering visual cards --------------------------------------

const scoretracker = document.querySelector(".scoretracker");
const playerField = document.querySelector(".playercards");
const dealerField = document.querySelector(".dealercards");
//let playerHand = document.querySelector('.playerhand');
let playerHand = document.getElementById("playerHand1");
let cardToSplit = null;

// const renderButton = document.getElementById('renderButton');
// const createSpaceButton = document.getElementById('createSpaceButton');
// const changeSizeButton = document.getElementById('changeSizeButton');
// const createNewHandButton = document.getElementById('createNewHandButton');

// renderButton.addEventListener('click', (e) => {
//     renderVisual();
//     handSize();
//     fieldSize();
// });

// createSpaceButton.addEventListener('click', (e) => {
//     createSpace();
//     fieldSize();
// });

// createNewHandButton.addEventListener('click', (e) => {
//     createSpace();
//     fieldSize();
//     createNewHand();
//     fieldSize();
// });

let handWidth = 80;
let totalHandWidth = 0;
let fieldWidth = 0;
let emptySpaceWidth = 0;
let runCount = 0;
let trueCount = 0;
const pixels = "px";

function runningCount() {}

const runningCountButton = document.getElementById("runningCount").lastChild;
const cardsOutButton = document.getElementById("cardsOut");
const trueCountButton = document.getElementById("trueCount");

runningCountButton.addEventListener("click", (e) => {
  show();
});

function show() {
  console.log("libba");
}

function createNewHand() {
  totalHandWidth += handWidth;
  let newHand = document.createElement("div");
  newHand.className = "playerhand";
  amountOfHands++;
  newHand.id = "playerHand" + amountOfHands;
  playerHand = newHand;
  playerField.append(newHand);
  handWidth = 113;
}

function handSize() {
  handWidth = handWidth + 33;
  let handWidthForCSS = handWidth + pixels;
  playerHand.style.width = handWidthForCSS;
  return handWidth;
}

function fieldSize() {
  fieldWidth = emptySpaceWidth + handWidth + totalHandWidth + 30;
  fieldWidthForCSS = fieldWidth + pixels;
  playerField.style.width = fieldWidthForCSS;
  return fieldWidth;
}

function penetration() {
  let penetrationCard = document.createElement("div");
  penetrationCard.className = "penetration";
  scoretracker.appendChild(penetrationCard);
  penCardOut = true;
  console.log("PenCardOut is " + penCardOut);
  setTimeout(movePenCard, 500);
}

function penetrationCheck() {
  if ((shuffledDeck.length < 104) & (penCardOut === false)) {
    penetration();
  }
}

function movePenCard() {
  document.querySelector(".penetration").style.marginLeft = "0px";
}

// Trying to remove class from element --------------------------------------------

// --------------------------------------------------------------------------------

function renderVisual() {
  let kard = {
    Value: "King",
    Suit: "clubs",
  };
  let card = document.createElement("div");
  let value = document.createElement("div");
  let suit = document.createElement("div");
  card.className = "card";
  value.className = "value";
  suit.className = "suit " + kard.Suit;
  value.innerHTML = kard.Value;
  card.appendChild(value);
  card.appendChild(suit);
  playerHand.append(card);
}

function createSpace() {
  //const lastCard = document.querySelector("fielddiv:lastChild");
  //console.log(lastCard);
  // playerField.insertAdjacentHTML('afterbegin', 'libba');
  // const lst = document.getElementById("mylist");
  // const first = lst.firstChild;
  // console.log(first.innerText);

  let emptySpace = document.createElement("div");
  emptySpace.className = "emptySpace";
  emptySpaceWidth += 113;
  playerField.append(emptySpace);
}

function moveSplitCard() {
  cardToSplit = playerHand.lastChild;
  playerHand.lastChild.remove();
  handWidth = 133;
  let handWidthForCSS = handWidth + pixels;
  playerHand.style.width = handWidthForCSS;
  console.log(cardToSplit);
}

// -------------------------------------------------------------

// Rendering cards in play--------------------------------------

function chooseSuit(suit) {
  let i = Math.floor(Math.random() * 4 + 1);
  switch (i) {
    case 1:
      suit = "suit";
      break;
    case 2:
      suit = "diamonds";
      break;
    case 3:
      suit = "hearts";
      break;
    case 4:
      suit = "clubs";
      break;
  }
  return suit;
}

function renderCard(kard) {
  let card = document.createElement("div");
  let value = document.createElement("div");
  let suit = document.createElement("div");
  card.className = "card";
  value.className = "value";
  suit.className = "suit " + chooseSuit();
  value.innerHTML = kard;
  card.appendChild(value);
  card.appendChild(suit);

  let cardBack = document.createElement("div");
  cardBack.className = "cardback";

  let fullcard = document.createElement("div");
  fullcard.className = "fullcard";

  fullcard.appendChild(card);
  fullcard.appendChild(cardBack);

  return fullcard;
}

//--------------------------------------------------------------

function conjureShuffledDeck() {
  penCardOut = false;
  shuffledDeck = [];
  deckToPlay = [...fulldeckSix]; // Also have to change it every time
  while (shuffledDeck.length !== deckToCompare.length) {
    // You have to change it every time when you adjust the deck length;
    let i = Math.floor(Math.random() * deckToPlay.length - 1);
    let c = deckToPlay.splice(i, 1);
    shuffledDeck.push(c[0]);
  }
  console.log(shuffledDeck);
}

// =============================================================================================================================

function resetting() {
  player.hand = [];
  dealer.hand = [];
  player.sums = [];
  bet = 0;
  splitButton.disabled = true;

  function moveCards() {
    let allcards = document.querySelectorAll(".fullcard");
    for (let i = 0; i < allcards.length; i++) {
      allcards[i].style.marginLeft = "1000px";
    }
  }

  function clearBoard() {
    scoretracker.innerHTML = "";
    dealerField.innerHTML = "";
    playerField.innerHTML = "";
    playerHand = document.createElement("playerhand");
    playerHand.className = "playerhand";
    playerHand.id = "playerHand1";
    handWidth = 80;
    totalHandWidth = 0;
    fieldWidth = 0;
    emptySpaceWidth = 0;
    let fieldWidthForCSS = 103 + pixels;
    playerField.style.width = fieldWidthForCSS;
    playerField.append(playerHand);
    document.getElementById("bank").innerHTML = bankroll;
    document.getElementById("moneyBet").innerHTML = bet;
    placeBet(savedBet);
  }

  if (penCardOut === true) {
    //console.log("PencardOut is " + penCardOut);
    conjureShuffledDeck();
  }

  setTimeout(moveCards, 1000);
  setTimeout(clearBoard, 2000);
}

function playerTakeCard() {
  penetrationCheck();
  let a = shuffledDeck.pop();
  player.hand.push(a);
  let card = renderCard(a);
  handSize();
  fieldSize();
  playerHand.append(card);
  card.style.marginLeft = "-645px";
  console.log("Player hand: " + player.hand);

  function moveThenFlip() {
    playerHand.lastChild.position = "absolute";
    playerHand.lastChild.style.transform = "rotateY(180deg)";
    playerHand.lastChild.style.marginLeft = "0px";
  }

  setTimeout(moveThenFlip, 50);
}

function dealerTakeCard() {
  penetrationCheck();
  let a = shuffledDeck.pop();
  dealer.hand.push(a);
  let card = renderCard(a);
  dealerField.append(card);
  if (dealer.hand.length === 2) card.className = "concealed";
  card.style.marginLeft = "613px";
  console.log("Dealer hand: " + dealer.hand);

  function moveAndFlip() {
    dealerField.lastChild.style.position = "absolute";
    dealerField.lastChild.style.marginLeft = dealer.hand.length * 33 + pixels;
    dealerField.lastChild.style.transform = "rotateY(180deg)";
  }

  setTimeout(moveAndFlip, 50);
}

// Split functionality ---------------------------------------------------------------------------------------------------------------------------------------

const splitButton = document.getElementById("splitButton");
splitButton.addEventListener("click", (e) => {
  split();
});

function split() {
  let a = player.hand.pop();
  newhand.push(a);
  console.log(player.hand);
  console.log(newhand);
  placeBet(savedBet);
  moveSplitCard();
  createSpace();
  fieldSize();
  createNewHand();
  fieldSize();
  playerHand.append(cardToSplit);
  playerTakeCard();
  splitCheck();
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Deal Button functionality-----------------------------------------------------------------------------------------------------------------------------------

const dealButton = document.getElementById("dealButton");

document.body.addEventListener("keydown", (e) => {
  //console.log(e.code);
});

// Adding keyboard shortcuts=-----------------------------------------------------------
document.addEventListener("keydown", (e) => {
  // SpaceBar - deal ()

  if (bet > 0) {
    if (player.hand.length === 0) {
      if (e.code === "Space") {
        deal();
      }
    }
  }

  // Button H - hit ()
  if (e.code === "KeyH") {
    if (player.hand.length === 0) {
      alert("You gotta deal first, man!");
    } else {
      hit();
    }
  }
  // Button D - double ()
  if (e.code === "KeyD") {
    if (player.hand.length === 2) {
      double();
    } else alert("Can only do that with 2 cards in hand!");
  }
  // Button S - stand ()
  if (e.code === "KeyS") {
    if (player.hand.length > 1) {
      stand();
    } else alert("You have to have at least some cards in hand!");
  }
  if ((splitButton.disabled = false)) {
    if (e.code === "KeyQ") {
      split();
    }
  }
});

dealButton.addEventListener("click", (e) => {
  if (bet > 0) {
    if (player.hand.length === 0) {
      deal();
    } else alert("You are already mid-game!");
  } else alert("Place bet first!");
});

function splitCheck() {
  // if (player.hand[0] === player.hand[1]) {
  //     if(confirm("Your hand is " + player.hand + "   " + "Dealer upcard is " + dealer.hand[0] + "   " + "Would you like a splt?")) {
  //         split();
  //         console.log(playerHandValue());
  //     }
  //     else {
  //         alert("Aha, so it's a NO, let's move one then");
  //     }
  // }
  if (player.hand[0] === player.hand[1]) {
    splitButton.disabled = false;
  } else splitButton.disabled = true;
}

function deal() {
  savedBet = bet;
  console.log("Dealing new hand");
  playerTakeCard();
  setTimeout(dealerTakeCard, 500);
  setTimeout(playerTakeCard, 1000);
  setTimeout(dealerTakeCard, 1500);
  setTimeout(splitCheck, 1550);
  setTimeout(playerHandValue, 1600);
  //console.log(playerHandValue());
}

// Hit Button functionality---------------------------------------------------------

const hitButton = document.getElementById("hitButton");

hitButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    alert("You gotta deal first, man!");
  } else {
    hit();
  }
});

function hit() {
  playerTakeCard();
  setTimeout(playerHandValue, 1000);
}

//--------------------------------------------------------------------------------

// Stand Button functionality------------------------------------------------------

const standButton = document.getElementById("standButton");

standButton.addEventListener("click", (e) => {
  if (player.hand.length > 1) {
    stand();
  } else alert("You have to have at least some cards in hand!");
});

function stand() {
  player.sums.push(playersum);
  console.log("Playersums are: " + player.sums);
  player.hand = [];
  if (newhand.length === 0) {
    setTimeout(dealerPlay, 1000);
    //dealerPlay();
  } else {
    let a = newhand.pop(); // taking card from the array of split cards
    player.hand.push(a);
    let currentHandId = "playerHand" + (amountOfHands - 1);
    playerHand = document.getElementById(currentHandId);
    amountOfHands--;
    handWidth = 80;
    setTimeout(playerTakeCard, 500);
    setTimeout(splitCheck, 1000);
    setTimeout(playerHandValue, 1500);
    // playerTakeCard();
    // splitCheck();
    // console.log(playerHandValue());
  }
}

function dealerPlay() {
  console.log("Dealer hand is " + dealer.hand);
  dealerField.lastChild.className = "fullcard";
  daces = 0;
  let playerHasSomethingToCompare = true;
  console.log("Player sums are " + player.sums);
  for (n = 0; n < player.sums.length; n++) {
    if (player.sums[n] === 0 || player.sums[n] === 100) {
      playerHasSomethingToCompare = false;
    } else playerHasSomethingToCompare = true;
  }
  dealersum = dealer.hand.reduce((a, b) => {
    if (a === ace) {
      a = 11;
      daces++;
    }
    if (b === ace) {
      b = 11;
      daces++;
    }
    return a + b;
  });
  if (dealersum === 21 && dealer.hand.length === 2) {
    broadcast("Dealer has blackjack! Let's compare hands");
    dealersum = 100;
    console.log("Dealer has blackjack!");
    console.log("Comparing hands");
    setTimeout(compare, 1000);
    //compare();
  } else if (playerHasSomethingToCompare === false) {
    broadcast("Let's compare hands");
    console.log("Comparing hands");
    setTimeout(compare, 1000);
    //compare(); // if dealer does NOT have a blackjack, but player.sums only has blackjacks and / or busts, we go to compare();
  } else {
    if (dealersum < 17 || daces === 2) {
      setTimeout(dealerTakeCard, 1000);
      setTimeout(dealerHandValue, 1500);
      //dealerTakeCard();
      //dealerHandValue();
    } else {
      broadcast("Let's compare hands!");
      console.log("Comparing hands");
      setTimeout(compare, 1000);
      //compare();
    }
  }
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

//Double button functionality----------------------------------------------------------------------------------------------------------------------------------

const doubleButton = document.getElementById("doubleButton");

doubleButton.addEventListener("click", (e) => {
  if (player.hand.length === 2) {
    double();
  } else alert("Can only do that with 2 cards in hand!");
});

function double() {
  placeBet(savedBet);
  betIsDoubled = true;
  hit();
  setTimeout(stand, 1500);
  //dealerPlay();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Calculating hand value---------------------

function playerHandValue() {
  let aces = 0;
  playersum = player.hand.reduce((a, b) => {
    if (a === ace) {
      a = 11;
      aces++;
    }
    if (b === ace) {
      b = 11;
      aces++;
    }
    console.log("Player sum is: " + (a + b));
    return a + b;
  });

  dealersum = dealer.hand.reduce((a, b) => {
    if (a === ace) {
      a = 11;
    }
    if (b === ace) {
      b = 11;
    }
    console.log("Dealer sum is: " + (a + b));
    return a + b;
  });

  if ((playersum === 21) & (player.hand.length === 2)) {
    broadcast("Your hand is " + player.hand + " ! You have blackjack!");
    console.log("Player has blackjack!");
    playersum = 100;
    stand();
  } else if (playersum === 21 && player.hand.length > 2) {
    broadcast("You have 21 yo!");
    console.log("Player has 21");
    stand();
  } else if (aces === 1) {
    altsum = playersum - aces * 10;
    console.log("Alternative sum is " + altsum);
    if (playersum > 21) {
      playersum = altsum;
      if (playersum > 21) {
        broadcast("Busted!");
        console.log("Bust!");
        playersum = 0;
        stand();
      } else if (playersum === 21 && player.hand.length !== 2) {
        broadcast("You have 21 yo!");
        console.log("Player has 21");
        stand();
      } else return playersum;
    } else {
      return playersum;
    }
  } else if (aces >= 2) {
    altsum = playersum - aces * 10;
    console.log("Alternative sum is " + altsum);
    playersum -= (aces - 1) * 10;
    if (playersum > 21) {
      playersum = altsum;
      if (playersum > 21) {
        broadcast("Busted!");
        playersum = 0;
        console.log("Bust!");
        stand();
      } else if (playersum === 21) {
        broadcast("You have 21 yo!");
        console.log("Player has 21");
        stand();
      } else return playersum;
    } else {
      if (playersum === 21) {
        broadcast("You have 21 yo!");
        console.log("Player has 21");
        stand();
      } else return playersum;
    }
  } else if (playersum > 21) {
    console.log("Bust!");
    playersum = 0;
    stand();
  }
  console.log("Player sum is calculated"); // So that I don't rush
  return playersum;
}

function dealerHandValue() {
  daces = 0;
  dealersum = dealer.hand.reduce((a, b) => {
    if (a === ace) {
      a = 11;
      daces++;
    }
    if (b === ace) {
      b = 11;
      daces++;
    }
    return a + b;
  });

  if (dealersum < 17) {
    dealerTakeCard();
    setTimeout(dealerHandValue, 1000);
    //dealerHandValue();
  } else if (dealersum > 21) {
    if (daces === 1) {
      dealersum = dealersum - 10 * daces;
      if (dealersum > 21) {
        broadcast("Dealer is bust!");
        console.log("Dealer is bust!");
        dealersum = 1;
        bankroll += savedBet * 2;
        console.log(betIsDoubled);
        if (betIsDoubled === true) {
          bankroll += savedBet;
        }
        betIsDoubled = false;
        console.log("Resetting");
        resetting();
      } else if (dealersum < 17) {
        dealerTakeCard();
        setTimeout(dealerHandValue, 1000);
        //dealerHandValue();
      } else {
        console.log("Comparing hands");
        setTimeout(compare, 1000);
        //compare();
      }
    } else if (daces >= 2) {
      dealeraltsum = dealersum - daces * 10;
      dealersum -= (daces - 1) * 10;
      if (dealersum > 16 && dealersum < 22) {
        broadcast("Let's compare hands!");
        console.log("Comparing hands");
        setTimeout(compare, 1000);
        //compare();
      } else if (dealeraltsum > 16 && dealeraltsum < 22) {
        dealersum = dealeraltsum;
        broadcast("Let's compare hands!");
        console.log("Comparing hands");
        setTimeout(compare, 1000);
        //compare();
      } else if (dealersum > 21 && dealeraltsum > 21) {
        console.log("Dealer is bust!");
        dealersum = 1;
        bankroll += savedBet * 2;
        console.log(betIsDoubled);
        if (betIsDoubled === true) {
          bankroll += savedBet;
        }
        betIsDoubled = false;
        console.log("Resetting");
        resetting();
      } else if (dealersum < 17 || dealeraltsum < 17) {
        dealerTakeCard();
        setTimeout(dealerHandValue, 1000);
        //dealerHandValue();
      } else {
        alert("WTF?? That's impossible! I used all possible scenarios!");
        setTimeout(compare, 1000);
        //compare(); // I think I don't need it here...
      }
    } else {
      broadcast("Dealer is bust");
      console.log("Dealer is bust!");
      dealersum = 1;
      bankroll += savedBet * 2;
      console.log(betIsDoubled);
      if (betIsDoubled === true) {
        bankroll += savedBet;
      }
      betIsDoubled = false;
      console.log("Resetting");
      resetting();
    }
  } else {
    //broadcast("Let's compare hands!");
    console.log("Comparing hands");
    setTimeout(compare, 1000);
    //compare();
  }
}

//------------------------------

//Comparing hands---------------
function compare() {
  for (n = 0; n < player.sums.length; n++) {
    if (dealersum === player.sums[n]) {
      broadcast("That's a push");
      console.log("That's a push, bankroll now is: " + bankroll);
      bankroll += savedBet;
      console.log(betIsDoubled);
      if (betIsDoubled === true) {
        bankroll += savedBet;
      }
      betIsDoubled = false;
    } else if (dealersum < player.sums[n]) {
      if (player.sums[n] === 100) {
        console.log(
          "Player wins with a blackjack, bankroll now is: " + bankroll
        );
        broadcast("Player wins with a blackjack");
        bankroll += Math.floor(savedBet * 2.5);
      } else {
        broadcast("Player wins, bankroll now is: " + bankroll);
        console.log("Player wins, bankroll now is: " + bankroll);
        bankroll += savedBet * 2;
        console.log(betIsDoubled);
        if (betIsDoubled === true) {
          bankroll += savedBet;
        }
        betIsDoubled = false;
      }
    } else if (dealersum > player.sums[n]) {
      broadcast(" Dealer wins");
      console.log("Dealer wins, bankroll now is: " + bankroll);
    }
  }
  console.log("Resetting");
  resetting();
}

//-----------------------------===================================

const shuffleButton = document.getElementById("applyNumberOfDecks");
let size = "6";

function getSelectedValue() {
  let selectedValue = document.getElementById("size").value;
  size = selectedValue;
  console.log(size);
}

shuffleButton.addEventListener("click", (e) => {
  console.log(size);
  if (size === "aces") {
    deckToPlay = [...fulldeckAces];
    shuffledDeck = [...deckToPlay];
    shuffle();
  } else if (size === "1") {
    deckToPlay = [...fulldeck];
    shuffledDeck = [...deckToPlay];
    shuffle();
  } else if (size === "6") {
    deckToPlay = [...fulldeckSix];
    shuffledDeck = [...deckToPlay];
    shuffle();
  }
});

function shuffle() {
  let m = 0;
  while (m < 11) {
    for (n = 0; n < shuffledDeck.length; n++) {
      let a = Math.floor(Math.random() * shuffledDeck.length - 1);
      let b = shuffledDeck.splice(a, 1);
      shuffledDeck.push(b[0]);
    }
    m++;
  }
  console.log(shuffledDeck);
}

const oneButton = document.getElementById("oneEuro");
const fiveButton = document.getElementById("fiveEuro");
const tenButton = document.getElementById("tenEuro");
const hundredButton = document.getElementById("hundredEuro");

function placeBet(amount) {
  bet = bet + amount;
  bankroll -= amount;
  document.getElementById("bank").innerHTML = bankroll;
  document.getElementById("moneyBet").innerHTML = bet;
}

oneButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    placeBet(1);
  } else {
    alert("You cannot adjust bet mid-game");
  }
});

fiveButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    placeBet(5);
  } else {
    alert("You cannot adjust bet mid-game");
  }
});

tenButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    placeBet(10);
  } else {
    alert("You cannot adjust bet mid-game");
  }
});

hundredButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    placeBet(100);
  } else {
    alert("You cannot adjust bet mid-game");
  }
});

// ---------------

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", (e) => {
  if (player.hand.length === 0) {
    bankroll += bet;
    bet = 0;
    savedBet = 0;
    document.getElementById("bank").innerHTML = bankroll;
    document.getElementById("moneyBet").innerHTML = bet;
  } else alert("You cannot reset bet while in-game");
});

// Test Button functionality----------------------------------

const testButton = document.getElementById("testButton");

testButton.addEventListener("click", (e) => {
  penetration();
});

// ----------------------------------------------------------------

function game() {
  conjureShuffledDeck();
  placeBet(6);
  //deal();
}

game();

// To-do list:
// Need to arrange timings - now need to arrange the message !
// Having split the Aces, don't you automatically taken one card per Ace and that's it?
// Careful not to allow split on for example 10 and King
// Try "defer" in the script as opposeed to placing it in the bottom
// Double functionality does not adjust the bet, it just places more money - I think I fixed it
// Need to detach animations from calculations
// Need to test the Double functionality, how it would react with 2 Stand functions
// Need to add like a test functionality, where I would choose next cards
// Need to catch betIsDoubled since I believe it was not dropped properly
// Caught a bug with 3 split-hands where one playersum was "6" for some reason
// Dealer drew over 17 for some reason, and then again, followed by an empty array error
// Need to implement unit-tests
// If you get A-10 after split - nothing happens, although you should win an go to next hand
// Actually check complete rules, cause there are some questionablee parts, like calculations of wins with blackjack hands
// How is blackjack win paid out on a 5-EUR bet in real Casino? When 5 EUR is minimum?
// Need to separate bets by hand, otherwise calculations are confusing and incorrect
// - Need to run some Unity-tests to catch some errors
// - Still looks meh when splitting
// - Add hints for Basic Strategy - preferably as popup component
// - Check Browser Events section on "javascript.info" to maybe change some scripts
// - Create a journal for what's happening, WoW-style
// - Try Promises for some functionalities
// - Check if 'hidden' property would affect the DOM
// - Do animation to flip dealer's second card
// - Re-do it with Flex later so the cards can appear properly
// - Do number counter animation later, try all different ways to learn
// - Try using setInterval to remove cards one by one, should look cooler
// - Do insurance and surrender. In the app, insurance is offered only on Aces
// - Add animation to CreateSpace so Split looks better - actually scratch that, look all right
// - When playing splits, make one-to-one hand comparisons more illustrative
// - Should try Visibility Hidden and Display None - seem good


// - Add pop-up messages Bootstrap-style
// - Migrate everything to React
// - Change to Grid / FlexBox
// - Upload to a hosting
// - Add BootStrap functionality

// -------------------------------------------------------
