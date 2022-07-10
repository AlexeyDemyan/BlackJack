// Settings--------------------------------------------------------------------------------------------------------------------------------------------

const jack = 10;
const queen = 10;
const king = 10;
const ace = "Ace";

// let fulldeck = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];
let fulldeck = [ace,ace,ace,ace,ace,ace,ace,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,ace,ace,ace,ace,ace,ace,ace,ace,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

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
let aces = null;
let daces = null;
let altsum = null;
let dealeraltsum = null;

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
    if (player.hand.length === 0) {
        deckToPlay = [...fulldeck]; 
        shuffledDeck = [];

        conjureShuffledDeck();
        console.log(shuffledDeck);
    };
    let a = shuffledDeck.pop();
    player.hand.push(a);
    console.log(player.hand);
    console.log(testValue());
});

// function testValue () {
//     aces = 0;
//     sum = player.hand.reduce((a, b) => {
//         if (a === ace) {
//             a = 11;
//             aces++;
//         };
//         if (b === ace) {
//             b = 11;
//             aces++;
//         };
//         return (a + b);
//     });

//     if ((sum === 21) & player.hand.length === 2) {
//         console.log("Player has blackjack!");
//         resetting();
//     }
    
//     if (sum === 21) {
//         alert("You have 21 yo!");
//         console.log(player.hand);
//         resetting();
//     }
//     if (sum > 21) {
//         if (aces >= 1) {
//             sum = sum - (10*aces);
//             if (sum > 21) {
//                console.log("Bust!");
//                resetting();
//             }
//             return sum;
//         }
//         if (sum === 21) {
//             alert("You have 21 yo!");
//             resetting();
//         }
//         else console.log("Bust!");
//         resetting();
//     }
//     return sum;
// };

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
    if (player.hand.length > 1){
    stand();
    }
    else alert("You have to have at least some cards in hand!");
});

function stand () {
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
    if ((dealersum === 21) && dealer.hand.length === 2) {
        alert("Dealer has blackjack!");
        console.log("Dealer has blackjack!");
        if ((sum === 21) && player.hand.length === 2) {
            alert("Actually you both have blackjacks!");
            console.log("Actually you both have blackjacks!");
            bankroll += bet;
            console.log("Resetting");
            resetting();
        }
        else {
            console.log("Resetting");
            resetting();
        }
    } else
        if ((dealersum < 17) || daces === 2) {
            let b = shuffledDeck.pop();
            dealer.hand.push(b);
            console.log("Dealer hand is " + dealer.hand);
            dealerHandValue();
        }
        else {
            alert("Let's compare hands!");
            console.log("Comparing hands");
            compare();
        };             
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
    stand();
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

    dealersum = dealer.hand.reduce((a,b) => {
        if (a === ace) {
            a = 11;
        };
        if (b === ace) {
            b = 11;
        };
        return (a+b);
    });

    if ((sum === 21) & player.hand.length === 2) {
        alert("Player has blackjack!");
        console.log("Player has blackjack!");
        if (dealersum === 21) {
            alert ("That's a push actually!");
            console.log("That's a push actually!");
            bankroll += bet;
            console.log("Resetting");
            resetting();
        }
        else {
            bankroll += bet*2.5;
            console.log("Resetting");
            resetting();
        }
    }

    if ((sum === 21) && (player.hand.length > 2)) {
        alert("You have 21 yo!");
        console.log("Player has 21");
        stand();
        compare();
        //return sum;
    }

    if (aces === 1) {
        altsum = (sum - aces*10);
        console.log("Alternative sum is " + altsum);
        if (sum > 21) {
            sum = altsum;
            if (sum > 21) {
                console.log("Bust!");
                console.log("Resetting");
                resetting();
            }
            if ((sum === 21) && (player.hand.length !== 2)) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand();
                compare();
                //return sum;
            }
            else return sum;
        }
        else {
            return sum;
        }
    }

    if (aces >= 2) {
        altsum = (sum - aces*10);
        console.log("Alternative sum is " + altsum);
        sum -= ((aces - 1) * 10);
        if (sum > 21) {
            sum = altsum;
            if (sum > 21) {
                console.log("Bust!");
                console.log("Resetting");
                resetting();
            }
            if (sum === 21) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand();
                compare();
                //return sum;
            }
            else return sum;
        }
        else {
            if (sum === 21) {
                alert("You have 21 yo!");
                console.log("Player has 21");
                stand();
                compare();
                //return sum;
            }
            else return sum;
        }
    }

    if (sum > 21) {
        console.log("Bust!");
        console.log("Resetting");
        resetting();
    }
    
    return sum;
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
        console.log("Dealer hand is " + dealer.hand);
        dealerHandValue();
    }
    if (dealersum > 21) {
        if (daces === 1) {
            dealersum = dealersum - (10*daces);
            if (dealersum > 21) {
               console.log("Dealer is bust!");
               bankroll += bet*2;
               console.log("Resetting");
               resetting();
            }
            if (dealersum < 17) {   
                let b = shuffledDeck.pop();
                dealer.hand.push(b);
                console.log("Dealer hand is " + dealer.hand);
                dealerHandValue();
            }
            else {
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
        }
        if (daces >= 2) {
            dealeraltsum = (dealersum - daces*10);
            dealersum -= ((daces - 1) * 10); 
            if ((dealersum > 16) && (dealersum < 22)) {
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
            if ((dealeraltsum > 16) && (dealeraltsum < 22)) {
                dealersum = dealeraltsum;
                alert("Let's compare hands!");
                console.log("Comparing hands");
                compare();
            }
            if ((dealersum > 21) && (dealeraltsum > 21)) {
               console.log("Dealer is bust!");
               bankroll += bet*2;
               console.log("Resetting");
               resetting();
            }
            if ((dealersum < 17) || (dealeraltsum < 17)) {
                let b = shuffledDeck.pop();
                dealer.hand.push(b);
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Comparing hands----------------------------------------------------------------------------------------------------------------------------------------------

function compare () {
    if (dealersum === sum) {
        alert ("That's a push!");
        console.log("That's a push, bankroll now is: " + bankroll);
        bankroll += bet;
        console.log("Resetting");
        resetting();
    }
    if (dealersum < sum) {
        alert ("Player wins!");
        console.log("Player wins, bankroll now is: " + bankroll);
        bankroll += bet*2;
        console.log("Resetting");
        resetting();
    }
    if (dealersum > sum) {
        alert("Dealer wins!");
        console.log("Dealer wins, bankroll now is: " + bankroll);
        console.log("Resetting");
        resetting();
    } 
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function game () {
    conjureShuffledDeck ();
    console.log(shuffledDeck);
}

game ();

