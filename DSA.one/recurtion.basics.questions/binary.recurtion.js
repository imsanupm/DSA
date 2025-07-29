//binary recurtion 


function recursive(arr,target){
    return search(arr,target,0,arr.length-1);
}
function search(arr,target,leftIndex,rightIndex){
   if(leftIndex>rightIndex){
       return -1
   }
   let mid = Math.floor((leftIndex+rightIndex)/2)
   if(arr[mid]==target){
       return mid;
   }
   if(target>arr[mid]){
       return search(arr,target,mid+1,rightIndex)
   }else{
       return search(arr,target,leftIndex,mid-1)
   }
   
}
let arr =[1,2,3,4,5,6];
let ans = recursive(arr,5)
console.log(ans)

//if your are not able to understand the code feel free to write logic on the notebook 