
function  mergeSort(arr){
    if(arr.length<2)return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(leftArr,rightArr) {
    let empty = [];
    while (leftArr.length&&rightArr.length) {
        if(leftArr[0]<=rightArr[0]){
         empty.push(leftArr.shift())
        }else{
            empty.push(rightArr.shift());
        }
    }
    
    return [...empty,...leftArr,...rightArr];
}

let arr = [5,4,3,2,1];
console.log(mergeSort(arr));
//if you don't undersrtand this feel free write the logic on your book and refere the graphycal representation on google
console.log('hellow my name is sanu');
