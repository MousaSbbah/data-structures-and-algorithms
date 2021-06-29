"use strict";

const HashTable = require("../../hastable/hash-table");

function leftJoin(table1, table2) {
  if (!(table1 instanceof HashTable) || !(table2 instanceof HashTable))
    throw "Invalid input";
  const result = [];
  table1.table.forEach((val) => {
    if (val) {
      let current = val.head;
      while (current) {

        const newArr = Object.entries(current.value);
        current = current.next;
        const valueFrom2 = table2.get(newArr[0][0].toString());
        valueFrom2 ? newArr[0].push(valueFrom2) : newArr[0].push(null);
        result.push(newArr[0]);
      }
    }
  });

  return result;
}


module.exports = leftJoin;
