function reverseString(str) {


    if (str.length <= 1) return str;   // base case

    let mid = Math.floor(str.length / 2);
    let left = str.slice(0, mid);
    let right = str.slice(mid);

    
    return reverseString(right) + reverseString(left);
}

console.log(reverseString("sanu")); // "unas"




