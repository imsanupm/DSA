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
    findIndex(arr,target,index+1)
}

const arr = [1,2,3,,4,5,4,4];
let target = 2;
let result = findIndex(arr,target);
if(result!==-1){
    console.log(`index is ${result}`);
    
}else{
    console.log('value is not exist in the array');
    
}