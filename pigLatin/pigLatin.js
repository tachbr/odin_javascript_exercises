function pigLatin(testString) {

  return testString.split(' ').map((word, index, arr) => arr[index] = checkWord(word)).join(' ');

};
  
  module.exports = pigLatin;

  function checkWord(word) {

    let wordArray = [...word];
    if ((/[^aeiou]/).test(wordArray[0])) {
      let char = wordArray.shift();
      if (char === 'q' && (/[u]/).test(wordArray[0])) char += wordArray.shift();
      wordArray.push(char);
      return checkWord(wordArray.join(''));
    }
    return wordArray.join('') + 'ay';
  }


