'use strict';

function multiBracketValidation(str) {
    if(typeof(str) !== 'string'){throw 'Invalid Input , it must be a string';}
  let targetString = '';
  //Save our targeted characters in variable called targetString to check it
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[\[\]\(\)\{\}]/g)) {
      targetString += str[i];
    }
  }
  //save the brackets in this order to be the reference
  let brackets = '[]{}()';
  let newArr = [];
  // Start Looping in the targeted string
  for (let bracket of targetString) {
    //the index of bracket in our reference
    let bracketsIndex = brackets.indexOf(bracket);
    //check if it open or closing tag
    if (bracketsIndex % 2 === 0) {
    // if it is a open bracket push it on array
      newArr.push(bracketsIndex + 1);

    } else {
    // if it is a close bracket pop the array
      let popped = newArr.pop();
      //check if the popped bracket is the open bracket from the reference
      if (popped !== bracketsIndex) {
        return false;
      }
    }
  }
  //if all the closing bracket finished check the array it must be empty
  return newArr.length === 0;
}


module.exports=multiBracketValidation;
