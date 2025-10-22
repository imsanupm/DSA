function quickSort(arr){
    if(arr.length<2)return arr;
    
    let pivet = arr[Math.floor(arr.length/2)];
    
    let left = [];
    let right = [];
    let equals = [];
    for(let i  =0 ;i<arr.length; i++){
       
        if(arr[i] < pivet){
            left.push(arr[i])
        }else if(arr[i]>pivet){
            right.push(arr[i])
        }else{
            equals.push(arr[i])
        }
    };
    
    return [...quickSort(left),...equals,...quickSort(right)];
};


console.log(quickSort([4,3,5,5,62]))