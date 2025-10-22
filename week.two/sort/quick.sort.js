var sortArray = function(nums) {
    let pivet = nums[nums.length-1];
    let left = [];
    let right = [];
    if(nums.length<2)return nums
    for(let i =0; i<nums.length-1; i++){
        if(nums[i]<pivet){
            left.push(nums[i])
        }else{
            right.push(nums[i])
        }
    }
    return [...sortArray(left),pivet,...sortArray(right)]
};

let nums = [5,4,3,2,1];
console.log(sortArray(nums))

