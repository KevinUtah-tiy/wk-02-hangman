"use strict";

window.onLoad = function();

//Define alphabet as an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Define variables
var categories;       //an arry of topics
var givenCategory;  //randomly chosen category
var getHint;   //word hint if requested
var word;   //randomly chosen word
var guess;  //guess
var guesses = []; //an empty array to store the guess
var lives; //lives, starts with 10
var counter; //counts the correct guesses
var space; //number of spaces in a word,  '-'

//Get the Elements...document.getElementById
var showLives = document.getElementById("myLives");
var showCategory = document.getElementById("scategory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

//Create alphabet with an unordered list and buttons
var buttons = document.getElementById() {
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

//Have the category randomly chosen by browser
var givenCat = function() {
  if(givenCategory === categories[0])  {
    categoryName.innerHTML = "The Category is NFL Team Names";
  } else if(givenCategory) === categories[1] {
    categoryName.innerHTML = "The Category is State Capitals";
  } else if(givenCategory === categories[2]) {
    "The Category is Chemical Elements"
  } // closes the final if statement
} //closes the var givenCat function

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
    else {
    guess.innerHTML = "_";
    } //closes innerHTML space
    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }//closes the for loop
}//closes the result function






/* -------------- end here ------------- */

// var commonWords = [
//   "the","and","you","that",
//   "was","for","are","with","his","they",
//   "this","have","from","one","had","word","but","not",
//   "what","all","were","when","your","can","said","there",
//   "use","each","which","she","how","their","will","other","about","out","many","then","them","these",
//   "some","her","would","make","like","him","into","time","has","look","two","more","write","see","number","way","could","people","than","first","water","been","call","who","oil",
//   "its","now","find","long","down","day","did","get","come","made","may","part"
// ];
//
// function commonWords() { commonWords[Math.floor(Math.random()*commonWords.length)]
// return true;
// }