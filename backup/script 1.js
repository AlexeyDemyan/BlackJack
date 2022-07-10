// Settings--------------------------------------------------------------------------------------------------------------------------------------------

const jack = 10;
const queen = 10;
const king = 10;
const ace = "Ace";

let fulldeck = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

let deckToPlay = [...fulldeck]; // so I don't over-write the previous deck

let shuffledDeck = [];

const player = {
    hand: [],
};

const dealer = {
    hand: [],
};

let sum = 0;
let dealersum = 0;
let altsum = 0;
let dealeraltsum = 0;

let bet = 0;
let bankroll = 1000;
document.getElementById('bank').innerHTML = bankroll;

function resetting () {
    player.hand = [];
    dealer.hand = [];
    bet = 0;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
};

//shuffling the deck----------------------------------------------------------------------------------------------------------------------------------

function conjureShuffledDeck () {
    while(shuffledDeck.length !== 52){ // Change this once you introduce more decks !
        let i = Math.floor(Math.random()*deckToPlay.length - 1);
        let c = deckToPlay.splice(i,1);
        shuffledDeck.push(c[0]);
    }
}

function shuffle () {
    for (n = 0; n < shuffledDeck.length; n++) {
        let a = Math.floor(Math.random()*shuffledDeck.length - 1);
        let b = shuffledDeck.splice(a,1);
        shuffledDeck.push(b[0]);
    } console.log(shuffledDeck);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Reset button functionality----------------------------------------------------------------------------------------------------------------------------------

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

//===========================================================================================================================================================

// Test Button functionality----------------------------------------------------------------------------------------------------------------------------------

const testButton = document.getElementById('testButton');

testButton.addEventListener('click', (e) => {
    let a = shuffledDeck.pop();
    player.hand.push(a);
    console.log(player.hand);
    console.log(playerHandValue());
});

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Split functionality ---------------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Placing bet functionality----------It's better to re-do them later, cause this is way too unscalable--------------------------------------------------------

const oneButton = document.getElementById('oneEuro');
const fiveButton = document.getElementById('fiveEuro');
const tenButton = document.getElementById('tenEuro');
const hundredButton = document.getElementById('hundredEuro');

oneButton.addEventListener('click', (e) => {
    bet++;
    bankroll -= 1;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
});

fiveButton.addEventListener('click', (e) => {
    bet = bet + 5;
    bankroll -= 5;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
});

tenButton.addEventListener('click', (e) => {
    bet = bet + 10;
    bankroll -= 10;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
});

hundredButton.addEventListener('click', (e) => {
    bet = bet + 100;
    bankroll -= 100;
    document.getElementById('bank').innerHTML = bankroll;
    document.getElementById('moneyBet').innerHTML = bet;
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

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

function deal () {
    console.log("Dealing new hand");
    console.log("................");
    player.hand = [];
    dealer.hand = [];
    let a = shuffledDeck.pop();
    player.hand.push(a);
    let b = shuffledDeck.pop();
    dealer.hand.push(b);
    let c = shuffledDeck.pop();
    player.hand.push(c);
    let d = shuffledDeck.pop();
    dealer.hand.push(d);
    
    console.log('Player hand: ' + player.hand);
    console.log('Dealer hand: ' + dealer.hand);
    console.log(playerHandValue());
};

// Hit Button functionality--------------------------------------------------------------------------------------------------------------------------------

const hitButton = document.getElementById('hitButton');

hitButton.addEventListener('click', (e) => {
    hit();
});

function hit () {
    if (player.hand.length === 0) {
        alert("You gotta deal first, man!");
    } else {
        let a = shuffledDeck.pop();
        player.hand.push(a);
        console.log('Player hand: ' + player.hand);
        console.log(playerHandValue());
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Stand Button functionality----------------------------------------------------------------------------------------------------------------------------------

const standButton = document.getElementById('standButton');

standButton.addEventListener('click', (e) => {
    stand();
});

function stand () {
    if (player.hand.length !== 0){
        console.log("Dealer hand is " + dealer.hand) // This is where dealer reveals his 2nd card
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
        if ((dealersum === 21) & dealer.hand.length === 2) {
            alert("Dealer has blackjack!");
            resetting();
        } else 
            if (dealersum < 17) {
                let b = shuffledDeck.pop();
                dealer.hand.push(b);
                console.log("Dealer hand is " + dealer.hand);
                dealerHandValue();
            }
            else {
                alert("Let's compare hands!")
                compare();
            };                
    }
    else alert("You have to have at least some cards in hand!")
}

function dealerHandValue () {
    let daces = 0;
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

    if (daces >= 1) {
        dealeraltsum = (dealersum - (10 *daces));
        console.log("Alternative dealer hand sum is: " + dealeraltsum);
        if ((dealeraltsum > 16) && (dealeraltsum < 22)) {
            console.log("We are gonna go with alternative sum");
            dealersum = dealeraltsum;
            compare();
        }
    }
    if (dealersum === 21) {
        alert("Dealer has 21 yo!");
        compare();
        return dealersum;
    }
    if (dealersum > 21) {
        if (daces >= 1) {
            dealersum = dealersum - (10*daces);
            if (dealersum > 21) {
               console.log("Dealer is bust!");
               bankroll += bet*2;
               resetting();
            }
            return dealersum;
        }
        if (dealersum === 21) {
            alert("Dealer has 21 yo!");
            compare();
            return dealersum;
        }
        else console.log("Dealer is bust!");
        bankroll += bet*2;
        resetting();
    }
    return dealersum;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

//Double button functionality----------------------------------------------------------------------------------------------------------------------------------

const doubleButton = document.getElementById('doubleButton');

doubleButton.addEventListener('click', (e) => {
    double();
})

function double () {
    if (player.hand.length === 2) {
        bankroll -= bet;
        bet *= 2;        
        document.getElementById('bank').innerHTML = bankroll;
        document.getElementById('moneyBet').innerHTML = bet;
        hit();
        stand();
    }
    else alert("Can only do that with 2 cards in hand!")
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Calculating hand value---------------------------------------------------------------------------------------------------------------------------------------

function playerHandValue () {
    let aces = 0;
    sum = player.hand.reduce((a, b) => {
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

    if (aces >= 1) {
        console.log("Alternative sum is: " + (sum - (10 *aces)))
    }
    if ((sum === 21) & player.hand.length === 2) {
        alert("Player has blackjack!");
        if (dealersum === 21) {
            alert ("That's a push actually!");
            bankroll += bet;
            resetting();
        }
        else {
            bankroll += bet*2.5;
            resetting();
        }
    }
    if (sum === 21) {
        alert("You have 21 yo!");
        stand();
        compare();
        return sum;
    }
    if (sum > 21) {
        if (aces >= 1) {
            sum = sum - (10*aces);
            if (sum > 21) {
               console.log("Bust!");
               resetting();
            }
            return sum;
        }
        if (sum === 21) {
            alert("You have 21 yo!");
            stand();
            compare();
            return sum;
        }
        else console.log("Bust!");
        resetting();
    }
    return sum;
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Comparing hands----------------------------------------------------------------------------------------------------------------------------------------------

function compare () {
    if (dealersum === sum) {
        alert ("That's a push!");
        bankroll += bet;
        resetting(); 
    }
    if (dealersum < sum) {
        alert ("Player wins!");
        bankroll += bet*2;
        resetting();
    }
    else alert("Dealer wins!");
    resetting();
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function game () {
    conjureShuffledDeck ();
    console.log(shuffledDeck);
}

game ();

