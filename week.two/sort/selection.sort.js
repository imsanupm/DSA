//selection sort 

function swap (arr,min,initial) {
    [ arr[min] , arr[initial] ] = [ arr[initial], arr[min] ]
}

function sort( arr ) {
  
  let i , j, min;
  for(let i = 0; i<arr.length-1; i++){
   min = i;
   for(j = i+1; j<arr.length; j++){
       if(arr[j] < arr[min]){
          
           min = j
       };
     
   }
    if(j!=min){
      swap(arr,min,i)        
      }
  }
  return arr
};
let arr = [5,8,3,2,1];
console.log( sort (arr))

//if you don't get the logic feel free to write the logic on the notebook
