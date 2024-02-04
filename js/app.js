console.log("Tayo-na!-Let's play!")
/*----- constants -----*/
const cardArray = [
    {
        name: 'jeepney 1',
        img: 'https://imgur.com/JrCsl4n'
    },

    {
        name: 'jeepney 2',
        img: 'https://imgur.com/Kxm0slg'
    },
    
    {
        name: 'jeepney 3',
        img: 'https://imgur.com/tahpPts'
    },

    {
        name: 'jeepney 4',
        img: 'https://imgur.com/pajwPtQ'
    },

    {
        name: 'jeepney 5',
        img: 'https://imgur.com/WBwd68J'
    },

    {
        name: 'jeepney 6',
        img: 'https://imgur.com/zMWYILX'
    },

    {
        name: 'jeepney 7',
        img: 'https://imgur.com/z8c8iVY'

    },

    {
        name: 'jeepney 8',
        img: 'https://imgur.com/6XidTHu'

    },

    {
        name: 'jeepney 9',
        img: 'https://imgur.com/JVqFyGN'

    },

    {
        name: 'jeepney 10',
        img: 'https://imgur.com/DtIxuNW'

    },

    {
        name: 'jeepney 11',
        img: 'https://imgur.com/SPaQFFu'
    },

    {
        name: 'jeepney 12',
        img: 'https://imgur.com/a/GV6BpXv'
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
function win(){
    isPaused = true;
    modalTitle.innerHTML = 'Well done, you win';
    modal.classList.add('modal--open');
}

function lose() {
    isLose = true;
    modalTitle.innerHTML = 'Too bad, you lose.';
    modal.classList.add('modal--open');
  }

//event listener to set game
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
//resetGame


        //reset player and computer choices
  

/*----- functions -----*/


    //get cards on the board using DOM Element innerHTML
      
 


  




//flipCard
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