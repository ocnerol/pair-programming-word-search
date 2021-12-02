const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if word is found vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'F', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'Y', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'EYE')
    assert.isTrue(result);
  })
  it("should retun false if word is not found vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'F', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'X', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'EYE');
    assert.isFalse(result);
  });

  it('should return false if given letters matrix is an empty array', () => {
    const result = wordSearch([], "sword");
    assert.isFalse(result);
  });

  it("should return true if word is found vertically in a matrix that originally contained empty arrays", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'F', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'Y', 'A', 'L'],
      [],
      ['H', 'M', 'J', 'T', 'E', 'E', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'EYE')
    assert.isTrue(result);


  });

  // LEAVING FOR STRETCH WORK IF WE HAVE TIME AFTER CORE WORK
  // it("should return true is word is found horizontally where the given word has a mix of upper and lower case characters", function() {
  //   const result = wordSearch([
  //     ['A', 'w', 'C', 'f', 'Q', 'U', 'A', 'L'],
  //     ['S', 'E', 'I', 'F', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'c', 'f', 'Q', 'y', 'A', 'L'],
  //     ['H', 'M', 'J', 'T', 'E', 'E', 'R', 'G'],
  //     ['W', 'n', 'O', 's', 'E', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'NoSe')
  //   assert.isTrue(result);
  // });

  // it("should return true is word is found vertically where the given word has a mix of upper and lower case characters", function() {
  //   const result = wordSearch([
  //     ['A', 'w', 'C', 'f', 'Q', 'U', 'A', 'L'],
  //     ['S', 'E', 'I', 'n', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'c', 'o', 'Q', 'y', 'A', 'L'],
  //     ['H', 'M', 'J', 'S', 'E', 'E', 'R', 'G'],
  //     ['W', 'n', 'O', 'E', 'E', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'NoSe')
  //   assert.isTrue(result);
  // });





});
