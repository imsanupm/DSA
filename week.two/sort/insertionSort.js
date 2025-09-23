//insertion sort is a sorting algorithm 

let arr = [1, 8, -1, 3, -3, 2, 4];


function boubleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i <= arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    console.log(arr)
}



boubleSort(arr)


//if you dont understand anything feel free to write logic in your notebook 
