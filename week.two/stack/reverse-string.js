let arr = "hellow";
let arr1 = arr.split('')
let reverse = []

while(arr1.length){
    reverse.push(arr1.pop())
}

console.log(reverse.join(''))

//this logi is alson using for checking a string is palindrome or not