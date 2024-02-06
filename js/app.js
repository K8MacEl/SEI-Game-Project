console.log("Tayo-na!-Let's play!")
/*----- constants -----*/
const cardArray = [
    {
        jeep: 'jeepney 1',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 1.png"
    },

    {
        jeep: 'jeepney 2',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 2.png"
    },

    {
        jeep: 'jeepney 3',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 3.png"
    },

    {
        jeep: 'jeepney 4',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 4.png"
    },

    {
        jeep: 'jeepney 5',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 5.png"
    },

    {
        jeep: 'jeepney 6',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 6.png"
    },

    {
        jeep: 'jeepney 7',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 7.png"

    },

    {
        jeep: 'jeepney 8',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 8.png"

    },

    {
        jeep: 'jeepney 9',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 9.png"

    },

    {
        jeep: 'jeepney 10',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 10.png"

    },

    {
        jeep: 'jeepney 11',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 11.png"
    },

    {
        jeep: 'jeepney 12',
        img: "/Users/trevormcelhaney/code/SEI-Game-Project/Images/Jeepney 12.png"
    },

]
//sets the game board with the array
const gameBoard = document.querySelector('.game-board');
//event listener for game
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
//------------SHUFFLE CARDS IN ARRAY---------------->
//front and back of card elements--NOT FUNCTIONING
// const getFrontandBackFromCard = (card) => {
//     const front = card.querySelector(',card-front');
//     const back = card.querySelector(',card-back');
//     return [front, back];
// };

//toogle the cards back and forth 

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
        const img = document.createElement('img');
        //adding image to image source
        img.src = el.img;
        //set the alt text
        img.alt = el.jeep;
        img.id = index;
        //append image to card element
        //taking the game board and appending child with img
        gameBoard.appendChild(img);
    });
}
drawCards();


const rotateElements = (elements) => {
    if (typeof elements !== "object" || !elements.length) return;
    elements.forEach((element) => element.classList.toggle("rotated"));
  };
/*----- app's state (variables) -----*/


//event listener to reset game
// Call the drawCards() function when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    drawCards();
});

//player selects card
function handleClick(event) {
    if (!event.target.alt) return
    const cardName = event.target.alt
    const cardId = event.target.id
    //this is where information is tracked
    const cardSelected = { name: cardName, id: cardId }
    const isDoubleClick = selectedCards.find(function (card) {
        return card.id === cardId
    })
    if (isDoubleClick) return
    console.log('valid click')
    if (selectedCards.length >= 2) return                           

    selectedCards.push(cardSelected)

    if (selectedCards.length === 2) {

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
         } else {
            console.log('not a match');
         }
      
    }
}

//Javascript feature to rotate cards back
        // setTimeout(() => {
        //     //define elements!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //     rotateElements([card-front, card-back, firstFront, firtsBack]);
        //     firstPick = null;
        // },500)
    
   



//next decide the existing array
  

   
    //prevents additional clicks while checking
    // if (!isChecking) {
    //     const clickedCard = event.target;
    //     console.log(clickedCard)
    //         //check if clicked card is a valid card
    //         console.log('Card clicked:', clickedCard);
    //         //push clicked card into clickedCard array
    //         selectedCards.push(clickedCard);
    //         //flipped clicked card
    //         clickedCard.classList.add('flipped');
    //         //once two cards are clicked initiates checking for match
    //         if (selectedCards.length === 2) {
    //             //disallows additional clicks
    //             isChecking = true;
    //         }
    //     }
    // }

//checks for match
// function checkMatch() {
//     const [card1, card2] = selectedCards;
//     const img1 = card1.getAttribute('src')
//     const img2 = card2.getAttribute('src')
//     if (img1 === img2) {
//         //freeze cards if matched
//         console.log('Match!');
//         selectedCards.forEach(card => card.classList.remove('flipped'))
//         selectedCards = [];
//     } else {

//         //setTimeout is a function in JavaScript used to schedule a task after a delay
//         setTimeout(() => {
//             selectedCards.forEach(card => card.classList.remove('flipped'));
//             selectedCards = []
//             //cards are not match and allow user to keep selecting that card
//             isChecking = false;
//         }, 1000);
//     }
// }


// // //flipCard-NEEDS WORK BACK SIDE IS NOT SHOWING
// function flipCard() {
// // //     //using flipped will help but check css for flipped
// this.classList.toggle('flipped');
// }

//unflipCard (when two unmacthed cards are flipped)
//use card node list to tell the card node list
//let hasFlippedCard 
//let firstCard, secondCard...
//let matchesMade



/*----- cached element references -----*/

/*----- event listeners -----*/


/*----- functions -----*/

/*-------ice box items-----*/
//Easy option of only 4 pairs
//Medium option of only 8 pairs)
//Hard option of all 12 pairs
//stop timer
//guess counter
//celebrateWinner (when all pairs matched)
