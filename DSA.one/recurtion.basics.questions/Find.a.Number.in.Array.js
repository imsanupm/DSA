// Find a Number in Array

// Problem Statement

// Given an array of numbers, we need to find a specific index of a number using recursion.

function findIndex(arr,target,index=0){
    if(arr.length==index){
        return -1
    }
    if(arr[index]==target){
        return index
    }
    return findIndex(arr,target,index+1)
}

const arr = [1,2,3,,4,5,4,4];
let target = 4;
let result = findIndex(arr,target);
if(result!==-1){
    console.log(`index is ${result}`);
    
}else{
    console.log('value is not exist in the array');
    
}




// if (arr.length == index) {
//     return -1;
// }
// This is the base case for your recursive function. It means:

// 🛑 "If we have checked all elements in the array and didn’t find the target, return -1."




// Complexity Analysis
// Time and Space Complexity
// Time Complexity: O(n) because in the worst case, we need to check every element in the array.
// Space Complexity: O(n) because of the recursive calls, each of which takes up space on the call stack.