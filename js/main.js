"use strict";

// window.onload = console.log(“It works!”);

window.onLoad = function() {

//Define alphabet as an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Define variables
var categories;       //an array of topics
var givenCategory;    //randomly chosen category
var getHint;          //word hint if requested
var word;             //randomly chosen word
var guess;            //guess
var guesses = [];     //an empty array to store the guess
var lives;            //lives, starts with 10
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

//Have the category randomly chosen by browser
var givenCategory = function() {
  if(givenCategory === categories[0])  {
    categoryName.innerHTML = "The Category is NFL Team Names";
  } else if(givenCategory === categories[1]) {
    categoryName.innerHTML = "The Category is State Capitals";
  } else if(givenCategory === categories[2]) {
    categoryName.innerHTML = "The Category is Chemical Elements";
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

//Animate the stick figure
var animate = function () {
  var drawMe = lives;
  drawArray[drawMe]();
} //closes the animate function call

//Make the hangman
canvas = function() {
  myStickMan = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}; //closes canvas function

  head = function() {
    myStickman = document.getElementById("Stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  } //closes the function for drawing the head

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  } //closes the draw function

  frame1 = function() {
    draw (0, 150, 150, 150);
  };

  frame2 = function() {
    draw (10, 0, 10, 600);
  };

  frame3 = function() {
    draw (0, 5, 70, 5);
  };

  frame4 = function() {
    draw (60, 5, 60, 15);
  };

  torso = function() {
    draw (60, 36, 60, 70);
  };

  rightArm = function() {
    draw (60, 46, 100, 50);
  };

  leftArm = function() {
    draw (60, 46, 20, 50);
  };

  rightLeg = function () {
    draw (60, 70, 100, 100);
  };

  leftLeg = function () {
    draw (60, 70, 20, 100);
  };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

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
  play = function() {
    categories = [
    //first category is NFL teams
    ['bengals', 'texans', 'dolphins', 'raiders', 'vikings', 'falcons', 'cowboys', 'cardinals', 'Panthers', 'broncos'], //hint will be division

    //second category is state Capitals
    ['salt lake city', 'denver', 'boise', 'phoenix', 'santa fe', 'cheyenne', 'olympia', 'austin', 'madison', 'frankfort'],  //hint will be state bird

    // third category is chemical elements
    ['lithium', 'sodium', 'potassium', 'magnesium', 'calcium', 'carbon', 'nitrogen', 'oxygen', 'helium', 'uranium']  //hint will be symbol
    ]

    givenCategory = categories[Math.floor(Math.random * ategories.length)]; //random category

    word = givenCategory[Math.floor(Math.random * givenCategory.length)]; //random word

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

  //give a hint
  hint.onclick = function () {
  hints = [
  //for first categories [0]
  ['AFC North', 'AFC South', 'AFC East', 'AFC West', 'NFC North', 'NFC South', 'NFC East', 'NFC West', 'lost Super Bowl 50', 'won Super Bowl 50'],

  //for second category [1]
  ['Common American Gull', 'Lark Bunting', 'Mountain Bluebird', 'Cactus Wren', 'Roadrunner', 'Western Meadowlark', 'Willow Goldfinch', 'Mockingbird', 'Robin', 'Cardinal'],

  //for third category [2]
  ['Li', 'Na', 'K', 'Mg', 'Ca', 'C', 'N', 'O', 'He', 'U']
  ]

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




/* -------------- end here ------------- */
