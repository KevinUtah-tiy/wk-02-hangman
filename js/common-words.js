"use strict";

window.onLoad = function();

//Define alphabet as an array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Define variables
var categories;
var givenCategory;
var getHint;
var word;
var guess;
var guesses = [];
var lives;
var counter;
var space;




var commonWords = [
  "the","and","you","that",
  "was","for","are","with","his","they",
  "this","have","from","one","had","word","but","not",
  "what","all","were","when","your","can","said","there",
  "use","each","which","she","how","their","will","other","about","out","many","then","them","these",
  "some","her","would","make","like","him","into","time","has","look","two","more","write","see","number","way","could","people","than","first","water","been","call","who","oil",
  "its","now","find","long","down","day","did","get","come","made","may","part"
];

function commonWords() { commonWords[Math.floor(Math.random()*commonWords.length)]
return true;
}
