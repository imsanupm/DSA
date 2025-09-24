// basic implemention of bouble sort

let arr = [1,2,56,7,3,4];

do{
  let  isCheck = false
  for(let i =0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      isCheck = true
    }
  }
}while(isCheck)

    console.log(arr)

//if you dont understand anything feel free to write logic in your notebook 

    