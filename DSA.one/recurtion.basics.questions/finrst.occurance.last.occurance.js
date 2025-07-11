// Find First Occurance and Last Occurance

// Problem Statement
// Given an array of numbers, we need to find the first and last occurrence of a specific number using recursion.


// Example Inputs
// Array: [9, 6, 100, 67, 6, 19]
// Target Number: 6


function findFirsOccurance(arr,target,index=0,first=-1,last=-1){
    if(arr.length==index){
        return [first,last]
    }
    if(arr[index]==target&&first==-1){
        first=index
    }
    if(arr[index]==target){
        last = index
    }
    return findFirsOccurance(arr,target,index+1,first,last);
}

let arr=[1,2,3,4,3,4,2,4];
let target = 4;

let [first,last] = findFirsOccurance(arr,target);

console.log(`first occurance==${first}`);
console.log(`first occurance==${last}`);


// Base case:
// When index equals arr.length, it means we've finished checking all elements.
// We must go till the end to ensure we find the last occurrence of the target.
// At this point, we return the first and last positions where the target appeared.



