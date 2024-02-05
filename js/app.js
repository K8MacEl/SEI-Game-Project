console.log("Tayo-na!-Let's play!")
/*----- constants -----*/
const cardArray = [
    {
        name: 'jeepney 1',
        img: src = "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 1.png"
    },

    {
        name: 'jeepney 2',
        img: src = "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 2.png"
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
//sets the game board with the array
const gameBoard = document.querySelector('.game-board');
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


//---------------1. Initiate game:------------------>
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

//-------------Make the game board-------------------->
function drawCards() {
    //clears existing cards
    gameBoard.innerHTML = '';
    availableCards.innerHTML = counter;

    shuffle(currentCards).forEach((el, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        //creating image for each card
        card.setAttribute('data-id', index);
        const img = document.createElement('img');
        //set image source laid out in cardArray
        img.src = el.img;
        //set the alt text
        img.alt = el.name;
        //append image to card element
        card.appendChild(img);

        card.addEventListener('click', handleClick);
        gameBoard.appendChild(card);
    });
}

drawCards();
/*----- app's state (variables) -----*/


//event listener to reset game
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
});

//player selects card
function handleClick(event) {
    //prevents additional clicks while checking
    if (!isChecking) {
        const clickedCard = event.target;
        if (clickedCard.classList.contains('card') && selectedCards.length < 2 && !selectedCards.includes(clickedCard)) {
            //check if clicked card is a valid card
            console.log('Card clicked:', clickedCard);
            //push clicked card in array
            selectedCards.push(clickedCard);
            //flipped clicked card
            clickedCard.classList.add('flipped');
            //once two cards are clicked initiates checking for match
            if (selectedCards.length === 2) {
                //disallows additional clicks
                isChecking = true; 
                //delay check for better visability (!!look this up more!!)
                setTimeout(checkMatch, 1000); 
            }
        }
    }
}
//checks for match
function checkMatch() {
    const [card1, card2] = selectedCards;
    const img1 = card1.querySelector('img').src;
    const img2 = card2.querySelector('img').src;
    if (img1 === img2) {
        //freeze cards if matched
        console.log('Match!');
        selectedCards.forEach(card => card.classList.remove('flipped'))
        selectedCards = [];
    }
    //cards are not match and allow user to keep selecting that card
    isChecking = false; 
}




// //flipCard-NEEDS WORK BACK SIDE IS NOT SHOWING
//
const cards = document.querySelectorAll('.card');
// // //instead of a flip card function maybe a function that has a render function for cards so when flip card is rendered the front shows
//event listener to allow user to select cards
cards.forEach(card => {card.addEventListener('click', flipCard);

});

function flipCard() {
    //using flipped will help but check css for flipped
    this.classList.toggle('flipped');
}






//checkForMatches



//disableCard (when matched)
//unflipCard (when two unmacthed cards are flipped)
//use card node list to tell the card node list
//let hasFlippedCard 
//let firstCard, secondCard...
//let matchesMade



/*----- cached element references -----*/
//firstCardPicked
//secondCardPicked

/*----- event listeners -----*/


/*----- functions -----*/

/*-------ice box items-----*/
//Easy option of only 4 pairs
//Medium option of only 8 pairs)
//Hard option of all 12 pairs
//stop timer
//guess counter
//celebrateWinner (when all pairs matched)