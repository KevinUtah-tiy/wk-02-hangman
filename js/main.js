"use strict";

// alert ("You are about to begin the game of Hangman.\n\nYou will have 8 incorrect chances.\n\nGuessing the correct letter will not subtract from your number of guesses.\n\nClick 'OK' to begin the game.\n\nGood luck.");



let answer = "attack";
let status = createStatus(answer);


function createStatus(answer_string) {
  let status_array = [];
  for (let i = 0; i < answer_string.length; i++) {
    status_array.push(" _ ");
  }
  return status_array;
}

function updateStatus (answer_string, status_array, guess_char) {
  //compare answer_string with guess_char then output and updated status_array
  let isFound = false;
  for (let i = 0; i < answer_string.length; i++) {
    if (guess_char === answer_string[i]) {
      status_array[i] = guess_char;
      isFound = true;
    }
  }
  return {status: status_array, found: isFound};
}

function updateMessage (guessFeedbackObj) {
  if (guessFeedbackObj === undefined) {
    return "Let's play Hangman.\nPlease guess a letter.\n" + status.join(" ");
    return "Let's play hangman.\nYou have " + 8 + " tris.\nPlease guess a letter.\n" + status.join("");
  }
  if (guessFeedbackObj.isFound === false) {
    return "That guess was incorrect, please try again.\nYour current status is\n" + guessFeedbackObj.status.join(" ");
  }

  if (guessFeedbackObj.found === true) {
    return "Correct.\nTry again.\nYour current status is\n" + guessFeedbackObj.status.join(" ");
  }
}

function makeGuess () {
  let guess;
  let guessFeedbackObj;
  for (let i = 0; i < 5; i++) {
    guess = prompt (updateMessage(guessFeedbackObj));


    guessFeedbackObj = updateStatus(answer, status, guess);
  status = guessFeedbackObj.status;
  console.log(status);
  }

}

makeGuess();
// var word = "freeze";
// var randomWord;
// var myWord;
// // function getAnswer (word) {
// //   return "freeze"
// // }
//
// //see the number of spaces in the word
// for (var i = 0; i < word.length; i++) {
//   randomWord = randomWord.charAt(i);
//   myWord[i] = " _ ";
// }
//
// //make a guess

// var randomWord = commonWords[rand];
// var rand = Math.floor(Math.random * commonWords.length);

window.onload();
