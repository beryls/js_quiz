//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});


describe('question2', function() {
  it('returns true if the number is within 10 of 100', function() {
    expect(quiz.nearHundred(97)).toEqual(true);
  });

  it('returns false if the number is not within 10 of 100', function() {
    expect(quiz.nearHundred(89)).toEqual(false);
  });

  it('returns an error if a non-number is passed in for the first parameter', function() {
    expect(quiz.nearHundred("Right")).toEqual("Error: Please enter a number!");
  });
});
// Write the next tests yourself!
// See quiz.js for more details

describe('question3', function() {
  it('removes a character from the word at the spot chosen', function() {
    expect(quiz.missingChar("kitten", 1)).toEqual("ktten");
  });

  it('removes the character only at the spot chosen', function() {
    expect(quiz.missingChar("tater tots", 0)).toEqual("ater tots");
  });

  it('removes nothing if the spot chosen is outside the string', function() {
    expect(quiz.delDel("xyz", 7)).toEqual("xyz");
  });

  it('returns false if a non-string is passed in for the first parameter', function() {
    expect(quiz.delDel(367, 1)).toEqual(false);
  });
});

describe('question4', function() {
  it('removes an instance of del in a string', function() {
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
  });

  it('removes all instances of del in a string', function() {
    expect(quiz.delDel("adelbdelcdeldef")).toEqual("abcdef");
  });

  it('removes nothing if a string without del is passed in', function() {
    expect(quiz.delDel("xyz")).toEqual("xyz");
  });

  it('returns false if a non-string is passed in', function() {
    expect(quiz.delDel(367)).toEqual(false);
  });
});


describe('question5', function() {
  it('returns tca if cat is passed in', function() {
    expect(quiz.backAround("cat")).toEqual("tca");
  });

  it('returns ohell if hello is passed in', function() {
    expect(quiz.backAround("hello")).toEqual("ohell");
  });

  it('returns false if a non-string is passed in', function() {
    expect(quiz.backAround(367)).toEqual(false);
  });
});