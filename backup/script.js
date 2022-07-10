// SETTINGS==========================================================================================
const jack = 10;
const queen = 10;
const king = 10;
const ace = "Ace";
const pen = 0;

let fulldeck = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

let fulldeckSix = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,
    2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,
    2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,
    2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,
    2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,
    2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

let fulldeckAces = [ace,ace,ace,ace,ace,ace,ace,9,10,jack,queen,king,ace,10,10,10,10,10,10,10,10,10,jack,queen,king,ace,ace,ace,ace,ace,ace,ace,ace,ace,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

//let fulldeckAces = [10,10,10,10,10,10,10,10,10,10,2];

let deckToPlay = [...fulldeckAces]; // so I don't over-write the previous deck
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
let pendeck = [];

let bet = 0;
let bankroll = 1000;
document.getElementById('bank').innerHTML = bankroll;

function checkPenetrationcard(card) {
    if (card === pen) {
        pendeck.push(card);
        shuffledDeck.pop(z);
        return z;
    }
    else return card;
};

// Rendering visual cards --------------------------------------

const playerField = document.querySelector('.playercards');
const dealerField = document.querySelector('.dealercards');
let playerHand = document.querySelector('.playerhand');

const renderButton = document.getElementById('renderButton');
const createSpaceButton = document.getElementById('createSpaceButton');
const changeSizeButton = document.getElementById('changeSizeButton');
const createNewHandButton = document.getElementById('createNewHandButton');

renderButton.addEventListener('click', (e) => {
    renderVisual();
    handSize();
    fieldSize();
});

createSpaceButton.addEventListener('click', (e) => {
    createSpace();
    fieldSize();
});

changeSizeButton.addEventListener('click', (e) => {
    changeSize();
});

createNewHandButton.addEventListener('click', (e) => {
    createSpace();
    fieldSize();
    createNewHand();
    fieldSize();
});

let amountOfCardsInHand = 0;
let handWidth = 80;
let totalHandWidth = 0;
let fieldWidth = 0;
let emptySpaceWidth = 0;
const pixels = "px";

function createNewHand() {
    totalHandWidth += handWidth;
    let newHand = document.createElement("div");
    newHand.className = "playerhand";
    playerHand = newHand;
    playerField.append(newHand);
    handWidth = 113;
};

function handSize () {
    handWidth = handWidth + 23;
    let handWidthForCSS = (handWidth + pixels);
    playerHand.style.width= handWidthForCSS;
    return handWidth;
};

function fieldSize () {
    fieldWidth = emptySpaceWidth + handWidth + totalHandWidth + 10;
    fieldWidthForCSS = (fieldWidth + pixels);
    playerField.style.width= fieldWidthForCSS;
    console.log(fieldWidth);  
    return fieldWidth;
};

// function changeSize () {
//     const pixels = "px";
//     width = 80 + (amountOfCardsInHand * 23);
//     let handWidth = (width + pixels);
//     playerHand.style.width= handWidth;
//     width = ((width*amountOfHands) + 100);
//     let fieldWidth = (width + pixels);
//     playerField.style.width= fieldWidth;
// }

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
    amountOfCardsInHand++;
  };
  
  function createSpace () {
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
  };

// -------------------------------------------------------------

// Rendering cards in play--------------------------------------

function chooseSuit(suit) {
    let i = Math.floor(Math.random()*4 + 1);
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
    };
    console.log(suit);
    return suit;
};

function renderCard (kard) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + chooseSuit();
    value.innerHTML = kard;
    card.appendChild(value);
    card.appendChild(suit);
    playerHand.append(card);
};

// Choosing value based on card

//--------------------------------------------------------------

//--------------------------------------------------------------

function render () {
    // mmm not worth making a function out of just 2 lines maybe
    playerField.textContent = player.hand;
    dealerField.textContent = dealer.hand;
}

function conjureShuffledDeck () {
    while(shuffledDeck.length !== deckToCompare.length){ // You have to change it every time when you adjust the deck length;
        let i = Math.floor(Math.random()*deckToPlay.length - 1);
        let c = deckToPlay.splice(i,1);
        shuffledDeck.push(c[0]);
    }
}

function game () {
    conjureShuffledDeck ();
    console.log(shuffledDeck);
}

game ();

// Do insurance and surrender. In the app, insurance is offered only on Aces

// =============================================================================================================================

function resetting () {
    player.hand = [];
    dealer.hand = [];
    player.sums = [];
    render();
    bet = 0;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
};

function playerTakeCard () {
    let a = shuffledDeck.pop();
    player.hand.push(a);
    renderCard(a);
    console.log('Player hand: ' + player.hand);
};

function dealerTakeCard() {
    let a = shuffledDeck.pop();
    dealer.hand.push(a);
    console.log('Dealer hand: ' + dealer.hand);
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};


// Split functionality ---------------------------------------------------------------------------------------------------------------------------------------

function split () {
    let a = player.hand.pop();
    newhand.push(a);
    console.log(player.hand);
    console.log(newhand);
    playerTakeCard();
    splitCheck();    
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------


// Deal Button functionality-----------------------------------------------------------------------------------------------------------------------------------

const dealButton = document.getElementById('dealButton');

dealButton.addEventListener('click', (e) => {
    if (bet > 0) {
        if (player.hand.length === 0) { 
            deal ();
        }
        else alert("You are already mid-game!");
    }
    else alert("Place bet first!");
});

function splitCheck () {
    if (player.hand[0] === player.hand[1]) {
        if(confirm("Your hand is " + player.hand + "   " + "Dealer upcard is " + dealer.hand[0] + "   " + "Would you like a splt?")) {
            split();
            console.log(playerHandValue());
        }
        else {
            alert("Aha, so it's a NO, let's move one then");
        }
    }
};

function deal () {
    console.log("Dealing new hand");
    playerTakeCard();
    dealerTakeCard();
    playerTakeCard();
    dealerTakeCard();

    console.log('Player hand: ' + player.hand);
    console.log('Dealer hand: ' + dealer.hand);

    playerField.textContent = player.hand;
    dealerField.textContent = dealer.hand[0] + "<second dealer card>";
    splitCheck();
    console.log(playerHandValue());
};

// Hit Button functionality--------------------------------------------------------------------------------------------------------------------------------

const hitButton = document.getElementById('hitButton');

hitButton.addEventListener('click', (e) => {
    if (player.hand.length === 0) {
        alert("You gotta deal first, man!");
    }
    else {
        hit();
    }
});

function hit () {
    playerTakeCard();
    playerField.textContent = player.hand;
    // value check
    console.log(playerHandValue());
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Stand Button functionality----------------------------------------------------------------------------------------------------------------------------------

const standButton = document.getElementById('standButton');

standButton.addEventListener('click', (e) => {
    if (player.hand.length > 1){
        stand ();
    }
    else alert("You have to have at least some cards in hand!");
});

function stand () {
    player.sums.push(playersum);
        player.hand = [];
        if (newhand.length === 0) {
            dealerPlay();
        }
        else {
            let a = newhand.pop(); // taking card from the array of split cards
            player.hand.push(a);
            playerTakeCard();
            splitCheck();
            console.log(playerHandValue());
        }
}

function dealerPlay () {
    console.log("Dealer hand is " + dealer.hand);
    dealerField.textContent = dealer.hand;
    daces = 0;
    let playerHasSomethingToCompare = true;
    for (n=0; n < player.sums.length; n++) {
        if ((player.sums[n] === 0) || (player.sums[n] === 100)) {
            playerHasSomethingToCompare = false;
        }
        else playerHasSomethingToCompare = true;
    }
    dealersum = dealer.hand.reduce((a,b) => {
        if (a === ace) {
            a = 11;
            daces++;
        };
        if (b === ace) {
            b = 11;
            daces++;
        };
        return (a+b);
    });
    if ((dealersum === 21) && dealer.hand.length === 2) {
        alert("Dealer has blackjack!");
        dealersum = 100;
        console.log("Dealer has blackjack!");
        alert("Let's compare hands!");
        console.log("Comparing hands");
        compare();
    }
    else if (playerHasSomethingToCompare === false) {
        console.log("Comparing hands");
        compare(); // if dealer does NOT have a blackjack, but player.sums only has blackjacks and / or busts, we go to compare();
    }
    else {
        if ((dealersum < 17) || daces === 2) {
            let b = shuffledDeck.pop();
            dealer.hand.push(b);
            render();
            console.log("Dealer hand is " + dealer.hand);
            dealerHandValue();
        }
        else {
            alert("Let's compare hands!");
            console.log("Comparing hands");
            compare();
        };  
    }  
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

//Double button functionality----------------------------------------------------------------------------------------------------------------------------------

const doubleButton = document.getElementById('doubleButton');

doubleButton.addEventListener('click', (e) => {
    if (player.hand.length === 2) {
        double(); 
    }
    else alert("Can only do that with 2 cards in hand!");
})

function double () {
    bankroll -= bet;
    bet *= 2;        
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
    hit();
    dealerPlay();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Calculating hand value---------------------

function playerHandValue () {
    let aces = 0;
    playersum = player.hand.reduce((a, b) => {
        if (a === ace) {
            a = 11;
            aces++;
        };
        if (b === ace) {
            b = 11;
            aces++;
        };
        return (a + b);
    });

    dealersum = dealer.hand.reduce((a,b) => {
        if (a === ace) {
            a = 11;
        };
        if (b === ace) {
            b = 11;
        };
        return (a+b);
    });

    if ((playersum === 21) & player.hand.length === 2) {
        alert("Your hand is " + player.hand + " ! You have blackjack!");
        console.log("Player has blackjack!");
        playersum = 100;
        stand ();
    }

    else if ((playersum === 21) && (player.hand.length > 2)) {
        alert("You have 21 yo!");
        console.log("Player has 21");
        stand ();
    }

    else if (aces === 1) {
        altsum = (playersum - aces*10);
        console.log("Alternative sum is " + altsum);
        if (playersum > 21) {
            playersum = altsum;
            if (playersum > 21) { 
                console.log("Bust!");
                playersum = 0;
                stand ();
            }
            else if ((playersum === 21) && (player.hand.length !== 2)) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand ();
            }
            else return playersum;
        }
        else {
            return playersum;
        }
    }

    else if (aces >= 2) {
        altsum = (playersum - aces*10);
        console.log("Alternative sum is " + altsum);
        playersum -= ((aces - 1) * 10);
        if (playersum > 21) {
            playersum = altsum;
            if (playersum > 21) {
                alert("Busted!");
                playersum = 0;
                console.log("Bust!");
                stand ();
            }
            else if (playersum === 21) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand ();
            }
            else return playersum;
        }
        else {
            if (playersum === 21) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand ();
            }
            else return playersum;
        }
    }

    else if (playersum > 21) {
        console.log("Bust!");
        playersum = 0;
        stand ();
    }
    
    return playersum;
};


function dealerHandValue () {
    daces = 0;
    dealersum = dealer.hand.reduce((a,b) => {
        if (a === ace) {
            a = 11;
            daces++;
        };
        if (b === ace) {
            b = 11;
            daces++;
        };
        return (a+b);
    });

    if (dealersum < 17) {
        let b = shuffledDeck.pop();
        dealer.hand.push(b);
        render();
        console.log("Dealer hand is " + dealer.hand);
        dealerHandValue();
    }
    else if (dealersum > 21) {
        if (daces === 1) {
            dealersum = dealersum - (10*daces);
            if (dealersum > 21) {
               console.log("Dealer is bust!");
               dealersum = 1;
               bankroll += bet*2;
               console.log("Resetting");
               resetting();
            }
            else if (dealersum < 17) {   
                let b = shuffledDeck.pop();
                dealer.hand.push(b);
                render();
                console.log("Dealer hand is " + dealer.hand);
                dealerHandValue();
            }
            else {
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
        }
        else if (daces >= 2) {
            dealeraltsum = (dealersum - daces*10);
            dealersum -= ((daces - 1) * 10); 
            if ((dealersum > 16) && (dealersum < 22)) {
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
            else if ((dealeraltsum > 16) && (dealeraltsum < 22)) {
                dealersum = dealeraltsum;
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
            else if ((dealersum > 21) && (dealeraltsum > 21)) {
               console.log("Dealer is bust!");
               dealersum = 1;
               bankroll += bet*2;
               console.log("Resetting");
               resetting();
            }
            else if ((dealersum < 17) || (dealeraltsum < 17)) {
                let b = shuffledDeck.pop();
                dealer.hand.push(b);
                render();
                console.log("Dealer hand is " + dealer.hand);
                dealerHandValue();
            }
            else {
                alert("WTF?? That's impossible! I used all possible scenarios!");
                compare(); // I think I don't need it here...
            }
        }
        else {
            alert("Dealer is bust");                
            console.log("Dealer is bust!");
            dealersum = 1;
            bankroll += bet*2;
            console.log("Resetting");
            resetting();
        };
    }
    else {
        alert("Let's compare hands!");
        console.log("Comparing hands");
        compare();
    };
};

//------------------------------

//Comparing hands---------------
function compare () {
    for (n = 0; n < player.sums.length; n++) {
        if (dealersum === player.sums[n]) {
            alert ("That's a push!");
            console.log("That's a push, bankroll now is: " + bankroll);
            bankroll += bet;
        }
        else if (dealersum < player.sums[n]) {
            if (player.sums[n] === 100){
                console.log("Player wins with a blackjack, bankroll now is: " + bankroll);
                bankroll += Math.floor(bet*2.5);
            }
            else {
                alert ("Player wins!");
                console.log("Player wins, bankroll now is: " + bankroll);
                bankroll += bet*2;
            }
        }
        else if (dealersum > player.sums[n]) {
            alert("Dealer wins!");
            console.log("Dealer wins, bankroll now is: " + bankroll);
        } 
    }
    console.log("Resetting");
    resetting();
};

//-----------------------------===================================


const shuffleButton = document.getElementById('applyNumberOfDecks');
let size = 'aces';

function getSelectedValue() {
    let selectedValue = document.getElementById('size').value;
    size = selectedValue;
    console.log(size);
}

shuffleButton.addEventListener('click', (e) => {
    console.log(size);
    if (size === 'aces') {
        deckToPlay = [...fulldeckAces];
        shuffledDeck = [...deckToPlay];
        shuffle();
    }
    else if (size === '1') {
        deckToPlay = [...fulldeck];
        shuffledDeck = [...deckToPlay];
        shuffle();
    }
    else if (size === '6') {
        deckToPlay = [...fulldeckSix];
        shuffledDeck = [...deckToPlay];
        shuffle();
    }
})

function shuffle () {
    let m = 0;
    while (m < 11) {
        for (n = 0; n < shuffledDeck.length; n++) {
            let a = Math.floor(Math.random()*shuffledDeck.length - 1);
            let b = shuffledDeck.splice(a,1);
            shuffledDeck.push(b[0]);
        } 
        m++;
    }
    console.log(shuffledDeck);
};

const oneButton = document.getElementById('oneEuro');
const fiveButton = document.getElementById('fiveEuro');
const tenButton = document.getElementById('tenEuro');
const hundredButton = document.getElementById('hundredEuro');

function placeBet (amount) {
    if (player.hand.length === 0) {
        bet = bet + amount;
        bankroll -= amount;
        document.getElementById('bank').innerHTML = bankroll;
        document.getElementById('moneyBet').innerHTML = bet;
    }
    else {
        alert("You cannot adjust bet mid-game");
    }
}

oneButton.addEventListener('click', (e) => {
    placeBet(1);
});

fiveButton.addEventListener('click', (e) => {
    placeBet(5);
});

tenButton.addEventListener('click', (e) => {
    placeBet(10);
});

hundredButton.addEventListener('click', (e) => {
    placeBet(100);
});

// ---------------

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', (e) => {
    if (player.hand.length === 0) {
    bankroll += bet;
    bet = 0;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
    }
    else (alert("You cannot reset bet while in-game"))
});

// Test Button functionality----------------------------------

const testButton = document.getElementById('testButton');

 testButton.addEventListener('click', (e) => {
    playerTakeCard();    
    //document.querySelector('.playercards').insertAdjacentHTML('afterbegin', '<div><i>Y-ello!</i></div>');
 })

// ------------------------------------------------------


