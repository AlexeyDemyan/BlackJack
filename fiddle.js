const jack = "Jack";
const queen = "Queen";
const king = "King";
const ace = "Ace";

// let deck = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

let fulldeck = [2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace,2,3,4,5,6,7,8,9,10,jack,queen,king,ace];

let deckToPlay = [...fulldeck]; // so I don't over-write the previous deck

let shuffledDeck = [];

const player = {
    hand: [],
};

const dealer = {
    hand: [],
};

// Checking the deck----------------------------------------------------------------------------------------------------------------------------------

function showDeck () {
    console.log(deckToPlay);
    console.log(deckToPlay.length);
}

//shuffling the deck----------------------------------------------------------------------------------------------------------------------------------

function conjureShuffledDeck () {
    while(shuffledDeck.length !== 52){
        let i = Math.floor(Math.random()*deckToPlay.length - 1);
        let c = deckToPlay.splice(i,1);
        shuffledDeck.push(c[0]);
    }
}

conjureShuffledDeck();

function shuffle () {
    for (n = 0; n < shuffledDeck.length; n++) {
        let a = Math.floor(Math.random()*shuffledDeck.length - 1);
        let b = shuffledDeck.splice(a,1);
        shuffledDeck.push(b[0]);
    } console.log(shuffledDeck);
}

console.log(shuffledDeck);

// Test Button functionality----------------------------------------------------------------------------------------------------------------------------------

const testButton = document.getElementById('testButton');

testButton.addEventListener('click', (e) => {
    shuffle();
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Deal Button functionality-----------------------------------------------------------------------------------------------------------------------------------

function deal () {
    if (shuffledDeck.length === 52) {

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
    } else alert("No can do!");
}

const dealButton = document.getElementById('dealButton');

dealButton.addEventListener('click', (e) => {
    deal();
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Taking cards from deck
// function nextCard() {
//     return Math.floor(Math.random()*deckToPlay.length);
// }


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Hit Button functionality

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
