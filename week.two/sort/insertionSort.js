//insertion sort is a sorting algorithm 

let arr = [1,8,-1,3,-3,2,4];

function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while (j>=0&&arr[j]>numberToInsert) {
            arr[j+1] = arr[j];
            j = j-1
        }
        arr[j+1] = numberToInsert;  //if you have doubt on this line you just write the logic with [3,1,2]
    }
}

insertionSort(arr);
console.log(arr);

//if you dont understand anything feel free to write logic in your notebook 

