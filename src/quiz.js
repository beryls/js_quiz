//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
  if (options) {
    // need to look at this one again
    return true;
  } else {
    return false;
  }
}

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => false
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(num) {
  if (typeof num !== "number") {
    return "Error: Please enter a number!";
  } else if (Math.abs(num - 100) <= 10) {
    return true;
  } else {
    return false;
  }
}

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(word, spot) {
  if (typeof word !== "string") {
    return false;
  } else {
    word = word.replace(word.charAt(spot), "");
    return word;
  }
}

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(word) {
  if (typeof word !== "string") {
    return false;
  } else {
    while (word.indexOf("del") !== -1) {
      word = word.replace("del", "");
    }
    return word;
  }
}

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

quiz.backAround = function(word) {
  if (typeof word !== "string") {
    return false;
  } else {
    var last = word.slice(word.length - 1);
    return last + word.substring(0, word.length - 1);
  }
}

