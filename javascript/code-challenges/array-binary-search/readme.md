# **Shift Array**

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process

![reverse-array](../../../assest/BinarySearch.bmp)


## Approach & Efficiency


Pick the middle index and compare it with the target and if there is equal each other return it 
 if  it great than the target minimize   to right half and to the left half  if it lower than target 
repeat the process tell get the index if there is no result return -1
