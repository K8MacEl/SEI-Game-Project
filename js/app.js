
/*----- constants -----*/
const cardArray = [

   //format of array: jeep 1: identifer for jeep, imgFront: front of card to be flipped imgBack: same for all, back of card not flipped         
    {
        jeep: 'jeepney 1',
        imgFront: "images/Jeepney 1.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 2',
        imgFront: "images/Jeepney 2.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 3',
        imgFront: "images/Jeepney 3.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 4',
        imgFront: "images/Jeepney 4.png",
        imgBack: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 5',
        imgFront: "images/Jeepney 5.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 6',
        imgFront: "images/Jeepney 6.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 7',
        imgFront: "images/Jeepney 7.png",
        imgBack: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 8',
        imgFront: "images/Jeepney 8.png",
        imgBack: "images/Back of Cards.png"


    },

    {
        jeep: 'jeepney 9',
        imgFront: "images/Jeepney 9 .png",
        imgBack: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 10',
        imgFront: "images/Jeepney 10.png",
        imgBack: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 11',
        imgFront: "images/Jeepney 11.png",
        imgBack: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 12',
        imgFront: "images/Jeepney 12.png",
        imgBack: "images/Back of Cards.png"
    },

]
//Set the game board with the array
const gameBoard = document.querySelector('.card');
//Event listener for entire game
gameBoard.addEventListener('click', handleClick);
//all unmatched cards
const availableCards = document.querySelector('#available-cards');
//shows avaialble cards in array
let currentCards = [...cardArray, ...cardArray];
//counts moves
let counter = cardArray.length;
// const drawCards
let cardsChosen = []
//flag to prevemt player from double selecting same card
let isChecking = false;
//array to store current cards 
let selectedCards = [];
//varaible to track the number of matches and later function pushes to the DOM
let matchedCount = 0;
//varaible to track number of pairs guess and later function pushes to the DOM
let guessCount = 0;

//------------SHUFFLE CARDS IN ARRAY---------------->
//generate and array of random jeepneys then through the array 
// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
const shuffle = function shuffle(cardArray) {
    let counter = cardArray.length, t, i;
    //while there remain elements to shuffle
    while (counter) {
        //pick a remaining element
        i = Math.floor(Math.random() * counter--);

        //and swap it with the current element
        t = cardArray[counter];
        cardArray[counter] = cardArray[i];
        cardArray[i] = t;
    }
    return cardArray;
}
//-------------MAKE THE GAME BOARD------------------->
// Update the drawCards function to set imgBack source for each card
function drawCards() {
    gameBoard.innerHTML = '';

    shuffle(currentCards).forEach((el, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        //sets the front of card behind imgFront
        const imgFront = document.createElement('img');
        imgFront.src = el.imgFront;
        imgFront.alt = el.jeep;
        imgFront.classList.add('card-front');
        //sets up back of card so the imgBack is on top at drawCards
        const imgBack = document.createElement('img');
        imgBack.src = el.imgBack;
        imgBack.classList.add('card-back');

        card.appendChild(imgBack);
        card.appendChild(imgFront);
        //inserts and index so that its an invalid click if the user double selects the same card in a move
        card.dataset.id = index;

        gameBoard.appendChild(card);
    });
}
//--------START THE GAME----------------------->
function startGame() {
    drawCards();
}

startGame();

function handleClick(event) {
    if (isChecking) return;
    //event handler for the card closest to the point
    let clickedCard = event.target.closest('.card');
    //adds first card flipped to clickedCard
    if (!clickedCard || clickedCard.classList.contains('flipped')) return;
    // Flip the clicked card
    flipCard(clickedCard);
    // Add the clicked card to the selectedCards array
    const cardName = clickedCard.querySelector('.card-front').alt;
    //adds an id to each card so disables the ability to click one card twice
    const cardId = clickedCard.dataset.id;
    const cardSelected = { name: cardName, id: cardId, element: clickedCard };
    //pushes matched cards into selectedCards array
    selectedCards.push(cardSelected);

    // Check if this is the second card
    if (selectedCards.length === 2) {
        isChecking = true;
        checkForMatch();
    }
}
//removes the imgBack to reveal the imgFront
function flipCard(card) {
    card.classList.toggle('flipped');
}

function checkForMatch() {
    const [firstCard, secondCard] = selectedCards;
    guessCount++;
    updateGuessCount()
    //check jeep name in array to determine match
    if (firstCard.name === secondCard.name) {
        console.log('Match!');
        matchedCount++;
        updateMatchedCount()
        //count number of guesses
        // Handle match (e.g., disable further clicks on these cards)
    } else {
        console.log('Not a match');
        // Flip back the cards after a short delay
        setTimeout(() => {
            flipCard(firstCard.element);
            flipCard(secondCard.element);
        }, 500);
    }

    if (matchedCount === cardArray.length) {
        console.log('All matches found! Game over!')
        //create message for winner
        //get modal from HTML
        let modal = document.getElementById('winnerModal');
        let message = document.getElementById("winnerMessage");
        //set the winner message for modal
        message.textContent = 'Congratulations! You have matched all Jeepneys!'
        //display the modal message
        modal.style.display = "block";

        //get the <span> element that closes the model
        let span = document.getElementsByClassName('close')[0];

        //when the player clicks on <span> 9x), close the modal
        span.onclick = function () {
            modal.style.display = 'none';
        }
        //when the user clicks anywhere outside of modal close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
    // Reset selectedCards and isChecking for the next turn
    selectedCards = [];
    isChecking = false;
}
//updates the guesses-made on the DOM
function updateGuessCount() {
    const guessesMadeElement = document.getElementById('guesses-made');
    guessesMadeElement.textContent = `Guesses made: ${guessCount}`;
    console.log(guessCount, "Guess count logged")
}

// Update the matched count on the DOM
function updateMatchedCount() {
    const matchedCountElement = document.getElementById('matches-made');
    matchedCountElement.textContent = `Matches made: ${matchedCount}`;
    console.log(matchedCount, "This is matched count")
}

//----------RESET GAME--------------------.
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    //resets the DOM so the matches made and guesses made boxes empty 
    guessCount = 0;
    matchedCount = 0;
    updateGuessCount();
    updateMatchedCount();
    drawCards();
});
/*-------ice box items-----*/
//celebrateWinner (when all pairs matched)
//Easy option of only 4 pairs
//Medium option of only 8 pairs)
//Hard option of all 12 pairs

