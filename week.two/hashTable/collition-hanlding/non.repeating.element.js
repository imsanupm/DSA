// first non repeating element from a string using hashtable

function nonRepeating(str){ 
    let str2 = str.split('');
    let obj = {};
    let output = [];
    for(let i = 0; i<str2.length; i++){
        if(obj[str[i]]){
            obj[str[i]] +=1
        }else{
            obj[str[i]] =1;
            output.push([str[i], i])
        };
       
    };
  return output
    
};

console.log(nonRepeating("helloworld"))