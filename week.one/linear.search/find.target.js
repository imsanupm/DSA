//find target number and return it's index;
//otherwise return 


let arr = [1,2,3,55,3];

function findOne(array,target){
    for(let i = 0; i<array.length; i++){
        if(array[i]==target){
            return i 
        }
    }
    return -1
}

console.log(findOne(arr,3));