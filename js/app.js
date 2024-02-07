
/*----- constants -----*/
const cardArray = [
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
//Event listener for game
gameBoard.addEventListener('click', handleClick);
//pulls all cards on the gameBoard
const cards = document.querySelectorAll('.card');
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
    availableCards.innerHTML = counter;
    
    shuffle(currentCards).forEach((el, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgFront = document.createElement('img');
        imgFront.src = el.imgFront;
        imgFront.alt = el.jeep;
        imgFront.classList.add('card-front');

        const imgBack = document.createElement('img');
        imgBack.src = el.imgBack;
        imgBack.classList.add('card-back');

        card.appendChild(imgBack);
        card.appendChild(imgFront);
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
    
    function flipCard(card) {
        //console.log(card,"this is the card")
        card.classList.toggle('flipped');
    }
    //varaible to track the number of matches
    let matchedCount = 0;
    function checkForMatch() {
        const [firstCard, secondCard] = selectedCards;
        //check jeep name in array to determine match
        if (firstCard.name === secondCard.name) {
            console.log('Match!');
            matchedCount++;
            // Handle match (e.g., disable further clicks on these cards)
        } else {
            console.log('Not a match');
            // Flip back the cards after a short delay
            setTimeout(() => {
                flipCard(firstCard.element);
                flipCard(secondCard.element);
            }, 1500);
        }
    
        if(matchedCount === cardArray.length) {
            console.log('All matches found! Game over!')
            //create message for winner
            messageElement = document.createElement('div');
            messageElement.textContent = 'Congratulations! You have matched all Jeepneys!'
            //append message element to the DOM
            document.body.appendChild(messageElement);
        }
        // Reset selectedCards and isChecking for the next turn
        selectedCards = [];
        isChecking = false;
    }

//celebrateWinner (when all pairs matched)


//----------RESET GAME--------------------.
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    drawCards();
});
/*-------ice box items-----*/
//Easy option of only 4 pairs
//Medium option of only 8 pairs)
//Hard option of all 12 pairs
//timer
//guess counter