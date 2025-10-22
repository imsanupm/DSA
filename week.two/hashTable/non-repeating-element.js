// finding the non repeating element from string using hashtable
// if you don't understand the logic feel free to write the code on your notebook


function nonRepeating(str){ 
    let str2 = str.split('');
    let obj = {};
    let output = [];
    for(let i = 0; i<str2.length; i++){
        if(obj[str[i]]){
            obj[str[i]] +=1
        }else{
            obj[str[i]] =1;
        };
       
    };
  
    for(let key in obj){
     if(obj[key]<2){
         output.push(key)
     }
    }
    return output;
};

console.log(nonRepeating("abcedefjhijkklla"))