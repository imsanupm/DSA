let str = "mom";
let isPali = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPali = false;
        break;
    }
}
console.log(isPali ? "string is palindrome" : "string is not palindrome");
