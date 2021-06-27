'use strict';

function repeatedWord(str) {
  if(typeof(str)!=='string') throw 'Invalid input';
  const arr = splitSentence(str);
  return findRepeatedIndex(arr) || 'there is no repeated word';

}

function splitSentence(str) {
  return str.split(/(?:[ ,.:;])+/);
}
function findRepeatedIndex(arr) {
  let index = arr.length;
  for (let j = 0; j < arr.length; j++) {
    for (let i = j; i < arr.length; i++) {
      if (arr[i].toLowerCase() === arr[j].toLowerCase() && i !== j)
        if (i < index) index = i;
    }
  }
  return arr[index];
}



module.exports = repeatedWord;
