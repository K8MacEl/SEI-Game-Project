console.log("Tayo-na!-Let's play!")
/*----- constants -----*/
const cardArray = [
    {
        name: 'jeepney 1',
        //img: src="/Users/trevormcelhaney/code/SEI-Game-Project/Images/1 Jeepney.png"
    },

    {
        name: 'jeepney 2',
        //img: src="/Users/trevormcelhaney/code/SEI-Game-Project/Images/2 Jeepney.png"
    },
    
    {
        name: 'jeepney 3',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/3 Jeepney.png"
    },

    {
        name: 'jeepney 4',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/4 Jeepney.png"
    },

    {
        name: 'jeepney 5',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/5 Jeepney.png"
    },

    {
        name: 'jeepney 6',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/6 Jeepney.png"
    },

    {
        name: 'jeepney 7',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/7 Jeepney.png"

    },

    {
        name: 'jeepney 8',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/8 Jeepney.png"

    },

    {
        name: 'jeepney 9',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/9 Jeepney.png"

    },

    {
        name: 'jeepney 10',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/10 Jeepney.png"

    },

    {
        name: 'jeepney 11',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/11 Jeepney.png"
    },

    {
        name: 'jeepney 12',
        //img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/12 Jeepney.png"
    },

]

const gameBoard = document.querySelector('.game-board');
const available = document.querySelector('#available');
const modalTitle = document.querySelector('#modal-title');
const modal = document.querySelector('#modal');
let currentCards = [...cardArray, ...cardArray];
let isPaused = false;
let counter = cardArray.length + 10;
let isLose = false;


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
/*----- app's state (variables) -----*/


//event listener to reset game
document.getElementById('reset').addEventListener('click', function(){
    drawCards(); // Call the drawCards() function when the "Reset" button is clicked
});

function handleClick(event) {
    const clickedCard = event.target;
    if(clickedCard.classList.contains('card')){
        console.log('Card clicked:', clickedCard);
    }
}

function drawCards(){
    gameBoard.innerHTML = ''; //clears existing cards
    available.innerHTML = counter;

    shuffle(currentCards).forEach((el, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', index);
        //creating image for each card
        const img = document.createElement('img');
        img.src = el.img; //set image source laid out in cardArray
        img.alt = el.name; //set the alt text
        card.appendChild(img);//append image to card element
     
    card.addEventListener('click',handleClick);
    gameBoard.appendChild(card);
    });
}

drawCards();

//flipCard
const cards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

//let hasFlippedCard 
//let firstCard, secondCard...
//let matchesMade
//let movesUsed
//let movesRemaining (48-movesUsed)
//let win
//let lose

/*----- cached element references -----*/
//firstCardPicked
//secondCardPicked

/*----- event listeners -----*/
//playGame
//flipCard
//easyTimer
//mediumTimer
//hardTimer

/*----- functions -----*/

//disableCard (when matched)
//checkForMatch
//unflipCard (when two unmacthed cards are flipped)
//shuffleCards (activated at play game and reset)
//timerEasy (icebox features)
//timerMedium (icebox features)
//timerHard(icebox features)
//timesUp (icebox features)
//noMoreTurns (when turns =48)
//celebrateWinner (when all 12 pairs matched)