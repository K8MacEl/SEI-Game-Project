console.log("Tayo-na!-Let's play!")
/*----- constants -----*/
const cardArray = [
    {
        name: 'jeepney 1',
        img: src="/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 1.png"
    },

    {
        name: 'jeepney 2',
        img: src="/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 2.png"
    },
    
    {
        name: 'jeepney 3',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 3.png"
    },

    {
        name: 'jeepney 4',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 4.png"
    },

    {
        name: 'jeepney 5',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 5.png"
    },

    {
        name: 'jeepney 6',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 6.png"
    },

    {
        name: 'jeepney 7',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 7.png"

    },

    {
        name: 'jeepney 8',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 8.png"

    },

    {
        name: 'jeepney 9',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 9.png"

    },

    {
        name: 'jeepney 10',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 10.png"

    },

    {
        name: 'jeepney 11',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 11.png"
    },

    {
        name: 'jeepney 12',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 12.png"
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
//instead of a flip card function maybe a function that has a render function for cards so when flip card is rendered the front shows
function flipCard(){
    this.classList.toggle('flip');
    console.log(this)
    this.textContent = "Back of Card"
}

cards.forEach(card => card.addEventListener('click', flipCard));
//use card node list to tell the card node list
console.log(cards[3])
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