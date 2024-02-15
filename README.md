

# Jeep-Mory
This is a fun play on the classic memory card game where the user will get to see pictures of classic Filipino Jeepneys. 

<a href="https://imgur.com/JrCsl4n"><img src="https://i.imgur.com/JrCsl4nt.jpg" title="source: imgur.com" /></a>

# Getting Started

To Play: 
https://k8macel.github.io/SEI-Game-Project/

## Basic User Experience:

The user will be challenged to find the matching card for each picture by flipping over the cards and when a match is made the pair will be frozen, facing up, as the user continues to attempt to find the remaining matches. 


<a href="https://imgur.com/ZjQ5UB8"><img src="https://i.imgur.com/ZjQ5UB8t.png" title="source: imgur.com" /></a>



The blue square at the top "Matches Made" will populate the number of matches as the game is played.

<a href="https://imgur.com/uGX39Uk"><img src="https://i.imgur.com/uGX39Ukt.png" title="source: imgur.com" /></a>

The yellow square at the top "Guesses Made" will count the number of guesses made, for every two cards flipped this will increase by one.

<a href="https://imgur.com/O8AFoPT"><img src="https://i.imgur.com/O8AFoPTt.png" title="source: imgur.com" /></a>

The red square at the top will allow the user to reset the game at any given time.


<a href="https://imgur.com/x5R8AjX"><img src="https://i.imgur.com/x5R8AjXt.png" title="source: imgur.com" /></a>

## Levels of Difficulty:

An added feature to this game allows the user to select how many pairs they want to try to match based on the level of difficulty. They can pick the easy level which is six pairs which will load the board with twelve cards of six pairs. They can pick the medium level which is nine pairs and eighteen cards in total. Or they can pick the difficult level which is twelve pairs and twenty-four cards in total. If the user does not make a selection and also when the game initially loads, the board defaults to the medium level.  

<a href="https://imgur.com/M5gC28U"><img src="https://i.imgur.com/M5gC28Ut.png" title="source: imgur.com" /></a>

Once the user has matched all the cards a yellow box will appear congratulating the user on matching all the jeepneys. The user can either select the X or click anywhere on the window to close out of the yellow window.

## This History of the Jeepney:

Jeepneys came to the Philippines during WW2 and once the country was no longer occupied Filipinos began modifying and using Jeepneys as a means for public transportation. Today you will find them throughout the county in most urban areas. They are privately owned but regulated by the government, so while they have set routes you will see the creative and fun styles each Jeepney owner has put on theirs. 

## The Coding Behind the Game:

Technologies used: CSS, HTML, and JavaScript.

### Card Array and Level of Difficulty

There is an array of twelve jeepneys with photos that the game selects through when the game begins. The level event listener allows the user to select the level of difficulty and by doing that it triggers a “switch” function in the code to modify the number of items within the array to place on the game board and then the slice function to modify the array. If the user does not select a level of difficulty then the default setting is the medium level.


<a href="https://imgur.com/hnU22P1"><img src="https://i.imgur.com/hnU22P1l.png" title="source: imgur.com" /></a>
### Drawing the Cards

Then the drawCards function is triggered in which the game board is created with the desired level of difficulty. This function uses innerHTML to set the game board. The cards are shuffled in this function with a shuffle function that was written using the Fisher-Yates Algorithm of shuffling to minimize the amount of computer processing required. For more information on this method and a visual as to how to it shuffles the card, read here:  https://bost.ocks.org/mike/shuffle/ . 

### Flipping the Cards and Index Creation

Once the board is created the user begins to play the game. There is an event listener in the code for the user to select to flipCard. When the user selects a card, the back of card image is removed through the flipCard function and the front of card image is revealed.  In this function there is also a create element for each card to add an index number. The reason behind the index number is because when the board is created there are duplicates of every array item without the index number there is no way to log an invalid click if the user selects the same card twice within the same guess. For example, in the array there is Jeepney 1 and on the board it will produce two items with the alt Jeepney 1, however, if you use the console to closely examine the board you will see each of those Jeepney 1’s has a different index number. 

<a href="https://imgur.com/3mRDnEE"><img src="https://i.imgur.com/3mRDnEEm.png" title="source: imgur.com" /></a>

### Checking for Matches and Updating Matches and Guesses Made

Once the user selects two cards the checkForMatch function is triggered in which it will not allow any more clicks and it will check to see if the cards are matches. For every two card selected it will console as a guess and the HTML will update the number of guesses made. The function will then check the argument if the name (jeepney #) of the first card selected matches that of the second card selected. If a match is made then the text content of the “Matches Made” count on the game will update and that item in the array will go into the selectedCards array. If a guess is made and it is not a match then the function will revert to the “else” and the cards will flip back after a set timeout feature and the user can continue to play.

### Winner Modal

Once all matches have been made the modal feature in the HTML will be triggered to produce a pop up congratulating the winner. Span allows the user to select the X to close out of the pop up and additionally the window.onclick allows the user to click anywhere on the window, outside of the pop-up, to close the window.

### Reset Button

Lastly, there is a reset button that triggered the drawCards function as well as resets the “Guess Count” and “Matches Made” count back to zero to allow the user to play again

### Icebox Item Update:
CSS modified for media use. 

### Next Steps and Future Enhancements (IceBox Items)
* A stopwatch timer to track the length of time to match the pairs. 
* Log to track past performances of the time and number of guesses used are in the future enhancements. 
