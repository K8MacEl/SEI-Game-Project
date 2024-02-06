
/*----- constants -----*/
const cardArray = [
    {
        jeep: 'jeepney 1',
        img: "images/Jeepney 1.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 2',
        img: "images/Jeepney 2.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 3',
        img: "images/Jeepney 3.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 4',
        img: "images/Jeepney 4.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 5',
        img: "images/Jeepney 5.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 6',
        img: "images/Jeepney 6.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 7',
        img: "images/Jeepney 7.png",
        backgroundImage: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 8',
        img: "images/Jeepney 8.png",
        backgroundImage: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 9',
        img: "images/Jeepney 9.png",
        backgroundImage: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 10',
        img: "images/Jeepney 10.png",
        backgroundImage: "images/Back of Cards.png"

    },

    {
        jeep: 'jeepney 11',
        img: "images/Jeepney 11.png",
        backgroundImage: "images/Back of Cards.png"
    },

    {
        jeep: 'jeepney 12',
        img: "images/Jeepney 12.png",
        backgroundImage: "images/Back of Cards.png"
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
            img.src = el.backgroundImage;
            //set the alt text
            img.alt = el.jeep;
            img.id = index;
            //img.classList.add('.card-front');
            img.classList.add('card-back');
            //append image to card element
            //taking the game board and appending child with img
            gameBoard.appendChild(img);
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
    console.log(event.target)
    
    //event.target search the cardArray to find the matching object (where jeep = event.target.alt) use the find. method in array
    if (!event.target.alt || isChecking) return;

    const cardName = event.target.alt;
    const cardId = event.target.id;
    const cardPicture = event.target.img
    //check if card is already selected
    if (!event.target.img || isChecking) return; 
        
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