"use strict";

var myGlobalVar= {};

//Define variables
myGlobalVar.word = "attack";     //randomly chosen word
myGlobalVar.guess = ;            //guess
var guesses = [];     //an empty array to store the guess
myGlobalVar.lives = 8;            //lives, starts with 8
var counter;          //counts the correct guesses
var space;            //number of spaces in a word,  '-'

//Get the Elements...document.getElementById
var showLives = document.getElementById("myLives");
var showCategory = document.getElementById("category");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

//Create alphabet with an unordered list and buttons
var buttons = function() {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');
  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}

//create a guess with an unordered list
result = function () {
  wordHolder = document.getElementById("hold");
  correct = document.createElement('ul');

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (word[i] === "-");
    guess.innerHTML = "-";
    space = 1;
    } //closes the space statement
    otherwise
    guess.innerHTML = "_";
     //closes innerHTML space
    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }//closes the for loop
}//closes the result function

//Function to show remaining lives
comments = function() {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < i) {
    showLives.innerHTML = "Game Over";
  } //closes if statement for game over

  for (var i = 0; i < guess.length; i++) {
    if (counter + space === guesses.length) {
      showLives.innerHTM = "You're a Winner!!!";
    } //closes if statement for winning
  }  //closes for loop
} //closes comments function


  //Create OnClick function
  check = function() {
    list.onclick = function() {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if(word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } //closes if statement
      } //closes for loop

      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      }
      else {
        {
          comments();
        } //close comments
      } //close else
    } //close list.onclick
  } //close check function

  //Play the Game
  // play = function() {


    word = word.replace (/\s/g, "-"); //replace spaces with a dash

    console.log(word);

    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  } //closes play function

  var categoryIndex = categories.indexOf(givenCategory);
  var hintIndex = givencategory.indexOf(word);
  showClue.innerHTML = "Clue " + hint + [categoryIndex][hintIndex]

} //closes hint.onclick function

//Reset
document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  showClue.innerHTML = "";
  context.clearRect(0, 0, 400, 400);
  play();
}

window.onLoad = function() {

/* -------------- end here ------------- */
