class reverseStringUsingStack{
    constructor(){
        this.stack = [];
    };
    
    push(str){
      let str2 = str.split('');
      
      for(let i =0; i<str2.length; i++){
          this.stack.push(str2[i])
      };
    };
    
    reverse(){
        let str =[];
        while(this.stack.length){
            str.push(this.stack.pop());
        };
        return str.join('')
    }
};


const stack = new reverseStringUsingStack();

stack.push("sanukrishna");
console.log(stack.reverse())