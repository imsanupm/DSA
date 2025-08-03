/*
what is binary search

Binary search is an efficient algorithm used to find an element within a sorted array. It works by repeatedly dividing the search interval in half, comparing the middle element of the array with the target value, and eliminating the half in which the target cannot lie.
 This process continues until the target is found or the search space is exhausted.


*/



// Find Target Element
// Problem Statement
// Given a sorted array nums and a target value, return the index if the target is found. If the target is not found, return -1.

// Example
// Input: nums = [1, 2, 3, 4, 5], target = 3
// Output: 2



function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

const nums = [1, 2, 3, 4, 5];
const target = 3;
console.log(binarySearch(nums, target));  // Output: 2


/*

*/