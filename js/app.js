
/*----- constants -----*/
const cardArray = [
    {
        jeep: 'jeepney 1',
        img: "Images/Jeepney 1.png"
    },

    {
        jeep: 'jeepney 2',
        img: "Images/Jeepney 2.png"
    },

    {
        jeep: 'jeepney 3',
        img: "Images/Jeepney 3.png"
    },

    {
        jeep: 'jeepney 4',
        img: "Images/Jeepney 4.png"
    },

    {
        jeep: 'jeepney 5',
        img: "Images/Jeepney 5.png"
    },

    {
        jeep: 'jeepney 6',
        img: "Images/Jeepney 6.png"
    },

    {
        jeep: 'jeepney 7',
        img: "Images/Jeepney 7.png"

    },

    {
        jeep: 'jeepney 8',
        img: "Images/Jeepney 8.png"

    },

    {
        jeep: 'jeepney 9',
        img: "Images/Jeepney 9.png"

    },

    {
        jeep: 'jeepney 10',
        img: "Images/Jeepney 10.png"

    },

    {
        jeep: 'jeepney 11',
        img: "Images/Jeepney 11.png"
    },

    {
        jeep: 'jeepney 12',
        img: "Images/Jeepney 12.png"
    },

]
//Set the game board with the array
const gameBoard = document.querySelector('.game-board');
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
         const front = card.querySelector('.card-front');
         const back = card.querySelector('.card-back');
         return [front, back];
     };

     // // //flipCard-NEEDS WORK BACK SIDE IS NOT SHOWING
document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', flipCard);
});
    


function flipCard() {
//using flipped will help but check css for flipped
this.classList.toggle('flipped');
}    
//toogle the cards back and forth 
    
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
    function drawCards() {
        //clears existing cards
        gameBoard.innerHTML = '';
        availableCards.innerHTML = counter;
        
        shuffle(currentCards).forEach((el, index) => {
            const img = document.createElement('img');
            //adding image to image source
            img.src = el.img;
            //set the alt text
            img.alt = el.jeep;
            img.id = index;
            img.classList.add('.card-front');
            img.classList.add('.card-back');
            //append image to card element
            //taking the game board and appending child with img
            gameBoard.appendChild(img,'card-back');
        });
    }
    drawCards('.card-back');

//--------START THE GAME----------------------->
    function startGame() {
    
        console.log("Tayo-na! Let's play!");
        drawCards();
    }
    
    startGame();

//---------PLAYER SELECTS MATCHES------------->
function handleClick(event) {
    if (!event.target.alt || isChecking) return;

    const cardName = event.target.alt;
    const cardId = event.target.id;

    //check if card is already selected
    const isDoubleClick = selectedCards.find(card => card.id === cardId);
    if (isDoubleClick) return console.log('invalid click');
    //this is where information is tracked
    const cardSelected = { name: cardName, id: cardId }

    selectedCards.push(cardSelected)
    
    if (selectedCards.length === 2) {
        isChecking = true; //prevents further selections until check is completed
                             
        const isMatch = selectedCards[0].name === selectedCards[1].name
        if (isMatch) {
            console.log('Match!');
            //push selected cards into array
            selectedCards.forEach(card => {
                if (!cardsChosen.includes(card)) {
                    cardsChosen.push(card);
                }
            });
            console.log("Updated selectedCards array:",selectedCards); 
            //check if all cards are chosen
            if (cardsChosen.length === cardArray.length) {
                console.log('Game over, all cards have been selected');
            }
         } else {
            console.log('not a match');
         }
         selectedCards = [];
         isChecking = false;
    }
}

//----------RESET GAME--------------------.
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    drawCards();
});

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