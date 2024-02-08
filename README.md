

# Jeep-Mory

To play: https://k8macel.github.io/SEI-Game-Project/

This is a fun play on the classic memory card game where the user will get to see pictures of classic Filipino Jeepneys. 

Basic User Experience:

The user will be challenged to find the matching card for each picture by flipping over the cards and when a match is made the pair will be frozen, facing up, as the user continues to attempt to find the remaining matches. 

The blue square at the top "Matches Made" will populate the number of matches as the game is played.

The yellow square at the top "Guesses Made" will count the number of guesses made, for every two cards flipped this will increase by one.

The red square at the top will allow the user to reset the game at any given time.

Levels of Difficulty:

An added feature to this game allows the user to select how many pairs they want to try to match based on the level of difficulty. They can pick the easy level which is six pairs which will load the board with twelve cards of six pairs. They can pick the medium level which is nine pairs and eighteen cards in total. Or they can pick the difficult level which is twelve pairs and twenty-four cards in total. If the user does not make a selection and also when the game initially loads, the board defaults to the medium level.  

Once the user has matched all the cards a yellow box will appear congratulating the user on matching all the jeepneys. The user can either select the X or click anywhere on the window to close out of the yellow window.

This history of the Jeepney:

Jeepneys came to the Philippines during WW2 and once the country was no longer occupied Filipinos began modifying and using Jeepneys as a means for public transportation. Today you will find them throughout the county in most urban areas. They are privately owned but regulated by the government, so while they have set routes you will see the creative and fun styles each Jeepney owner has put on theirs. 

The Coding Behind the Game:

This game was created using HTML, CSS, and JavaScript with all of the logic of the game based in JavaScript. 

There is an array of twelve jeepneys with photos that the game selects through when the game begins. The level event listener allows the user to select the level of difficulty and by doing that it triggers a “switch” function in the code to modify the number of items within the array to place on the game board. If the user does not select a level of difficulty then the default setting is the medium level.

Then the drawCards function is triggered in which the game board is created with the desired level of difficulty. This function uses innerHTML to set the game board. The cards are shuffled in this function with a shuffle function that was written using the Fisher-Yates Algorithm of shuffling to minimize the amount of computer processing required.

Once the board is created the user begins to play the game. There is an event listener in the code for the user to select to flipCard. When they select a card, the back of card image is removed through the flipCard function and the front of card image is revealed.  In this function there is also a create element for each card to add an index number. The reason behind the index number is because when the board is created there are duplicates of every array item without the index number there is no way to log an invalid click if the user selects the same card twice within the same guess. For example, in the array there is Jeepney 1 and on the board it will produce two items with the alt Jeepney 1, however, if you use the console to closely examine the board you will see each of those Jeepney 1’s has a different index number. 

Once the user selects two cards the checkForMatch function is triggered in which it will not allow any more clicks and it will check to see if the cards are matches. For every two card selected it will console as a guess and the HTML will update the number of guesses made. The function will then check the argument if the name (jeepney #) of the first card selected matches that of the second card selected. If a match is made then the text content of the “Matches Made” count on the game will update and that item in the array will go into the selectedCards array. If a guess is made and it is not a match then the function will revert to the “else” and the cards will flip back after a set timeout feature and the user can continue to play.

Once all matches have been made the modal feature in the HTML will be triggered to produce a pop up congratulating the winner. Span allows the user to select the X to close out of the pop up and additionally the window.onclick allows the user to click anywhere on the window, outside of the pop-up, to close the window.

Lastly, there is a reset button that triggered the drawCards function as well as resets the “Guess Count” and “Matches Made” count back to zero to allow the user to play again
