
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
        imgFront: "images/Jeepney 9.png",
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
const cards = document.querySelectorAll('.card');
//all unmatched cards
const availableCards = document.querySelector('#available-cards');
//shows avaialble cards in array
let currentCards = [...cardArray, ...cardArray];
//counts moves
let counter = cardArray.length + 20;
// const drawCards
let cardsChosen = []
//flag to prevemt player from double selecting same card
let isChecking = false;
//array to store current cards 
let selectedCards = [];


//front and back of card elements--NOT FUNCTIONING
const getFrontandBackFromCard = (card) => {
         const front = card.querySelector('card-front');
         const back = card.querySelector('card-back');
         return [front, back];
     };

     // // //flipCard-NEEDS WORK BACK SIDE IS NOT SHOWING
     
    
    
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

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', flipCard);
    });

    //clears existing cards
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

    drawCards();


// Flip card function
function flipCard() {
    if (this.classList.contains('card')) {
        this.classList.toggle('flipped');
    }
}


//--------START THE GAME----------------------->
    function startGame() {
    
        console.log("Tayo-na! Let's play!");
        drawCards();
    }
    
    startGame();

    function handleClick(event) {
        if (isChecking) return;
    
        let clickedCard = event.target.closest('.card');
        if (!clickedCard || clickedCard.classList.contains('flipped')) return;
    
        // Flip the clicked card
        flipCard(clickedCard);
    
        // Add the clicked card to the selectedCards array
        const cardName = clickedCard.querySelector('.card-front').alt;
        const cardId = clickedCard.dataset.id;
        const cardSelected = { name: cardName, id: cardId, element: clickedCard };
        selectedCards.push(cardSelected);
    
        // Check if this is the second card
        if (selectedCards.length === 2) {
            isChecking = true;
            checkForMatch();
        }
    }
    
    function flipCard(card) {
        card.classList.toggle('flipped');
    }
    
    function checkForMatch() {
        const [firstCard, secondCard] = selectedCards;
    
        if (firstCard.name === secondCard.name) {
            console.log('Match!');
            // Handle match (e.g., disable further clicks on these cards)
        } else {
            console.log('Not a match');
            // Flip back the cards after a short delay
            setTimeout(() => {
                flipCard(firstCard.element);
                flipCard(secondCard.element);
            }, 1000);
        }
    
        // Reset selectedCards and isChecking for the next turn
        selectedCards = [];
        isChecking = false;
    }



//---------PLAYER SELECTS MATCHES------------->
// function handleClick(event) {
//     let clickedCard =  event.target.closest('.card');
//     if(!clickedCard || isChecking) return;
//     if (!event.target.alt || isChecking) return;

//     const cardName = event.target.alt;
//     const cardId = event.target.id;

//     //check if card is already selected
//     const isDoubleClick = selectedCards.find(card => card.id === cardId);
//     if (isDoubleClick) return console.log('invalid click');
//     //this is where information is tracked
//     const cardSelected = { name: cardName, id: cardId }

//     selectedCards.push(cardSelected)
    
//     if (selectedCards.length === 2) {
//         isChecking = true; //prevents further selections until check is completed
                             
//         const isMatch = selectedCards[0].name === selectedCards[1].name
//         if (isMatch) {
//             console.log('Match!');
//             //push selected cards into array
//             selectedCards.forEach(card => {
//                 if (!cardsChosen.includes(card)) {
//                     cardsChosen.push(card);
//                 }
//             });
//             console.log("Updated selectedCards array:",selectedCards); 
//             //check if all cards are chosen
//             if (cardsChosen.length === cardArray.length) {
//                 console.log('Game over, all cards have been selected');
//             }
//          } else {
//             console.log('not a match');
//          }
//          selectedCards = [];
//          isChecking = false;
//     }
//     flipCard.call(clickedCard);
// }

//----------RESET GAME--------------------.
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    drawCards();
});

// function flipCard() {
//     //using flipped will help but check css for flipped
//     this.classList.toggle('flipped');
//     }
//Javascript feature to rotate cards back
        // setTimeout(() => {
        //     //define elements!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //     rotateElements([card-front, card-back, firstFront, firtsBack]);
        //     firstPick = null;
        // },500)
    


//unflipCard (when two unmacthed cards are flipped)
//let hasFlippedCard 


/*-------ice box items-----*/
//Easy option of only 4 pairs
//Medium option of only 8 pairs)
//Hard option of all 12 pairs
//stop timer
//guess counter
//celebrateWinner (when all pairs matched)