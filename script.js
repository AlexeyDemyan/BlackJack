
function resetting () {
    if (newhand.length === 0) {
        console.log("new hand is " + newhand);
        player.hand = [];
        dealer.hand = [];
        render();
        bet = 0;
        document.getElementById('bank').innerHTML = bankroll;
        document.getElementById('moneyBet').innerHTML = bet;
    } 
    else {
        player.hand = newhand;
        newhand = [];
        let a = shuffledDeck.pop();
        // checkPenetrationcard(a);
        player.hand.push(a);
        console.log('Player hand: ' + player.hand);
        console.log('Dealer hand: ' + dealer.hand);
        playerField.textContent = player.hand;
        if (player.hand[0] === player.hand[1]) {
            if(confirm("Your hand is " + player.hand + "   " + "Dealer upcard is " + dealer.hand[0] + "   " + "Would you like a split?")) {
                split();
                console.log(playerHandValue());
            }
            else {
                alert("Aha, so it's a NO, let's move on then");
            }
        }
        else {
            console.log(playerHandValue());
        }
    }
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};


// Split functionality ---------------------------------------------------------------------------------------------------------------------------------------

// not working correctly, e.g. if dealer is bust
function split () {
    newhand = [];
    let splitcard = player.hand.pop();
    newhand.push(splitcard);
    console.log(player.hand);
    console.log(newhand);
    let a = shuffledDeck.pop();
    player.hand.push(a);
    console.log(player.hand);
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
    playerField.textContent = player.hand;
    dealerField.textContent = dealer.hand[0] + "<second dealer card>";
    if (player.hand[0] === player.hand[1]) {
        if(confirm("Your hand is " + player.hand + "   " + "Dealer upcard is " + dealer.hand[0] + "   " + "Would you like a splt?")) {
            split();
            console.log(playerHandValue());
        }
        else {
            alert("Aha, so it's a NO, let's move one then");
        }
    }
    else {
        console.log(playerHandValue());
    }
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
        render();
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
    if (newhand.length === 0) {
        console.log("Dealer hand is " + dealer.hand);
        render();
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
            dealersum = 100;
            console.log("Dealer has blackjack!");
            if (sum === dealersum) {
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
    else {

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
    stand();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------



function game () {
    conjureShuffledDeck ();
    console.log(shuffledDeck);
}

game ();

