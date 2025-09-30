//insertion sort is a sorting algorithm 

let arr = [1, 8, -1, 3, -3, 2, 4];




for(let i = 0; i<arr.length;i ++){
    let nti = arr[i];
    let j = i-1;
    while(j>=0 && arr[j] > nti){
        arr[j+1] = arr[j];
        j--
    };
    arr[j+1] = nti;
};


console.log(arr);



//if you dont understand anything feel free to write logic in your notebook 
