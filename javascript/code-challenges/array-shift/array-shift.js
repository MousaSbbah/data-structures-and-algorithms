'use strict';

function insertShiftArray (arr,val){
  let mid = Math.ceil(arr.length / 2) ;
  let result = arr;
  result.splice(mid,0,val);
  return result ;
}

console.log(insertShiftArray ([1,2,3,4],5));
