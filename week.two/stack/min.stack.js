// find teh min value or max max value from the stack with O(1) time complexity;





class minStack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    };
    
    isEmpty(){
        return this.stack.length===0;
    }
    
    push(value){
        this.stack.push(value);
                                        //> for max stack
        if(this.minStack.length==0 || value< this.minStack.at(-1)){
            this.minStack.push(value);
        }
    };
    
    pop(){
        if(this.isEmpty()){
            console.log('underflow');
            return false;
        }
        if(this.stack.at(-1)===this.minStack.at(-1)){
            this.minStack.pop()
        };
        return this.stack.pop();
    }
    
    peek(){
        if(this.isEmpty()){
            console.log('underflow');
            return ;
        }
        return this.stack.at(-1);
        
    }
    
    min(){
        return this.minStack.at(-1);
    };
    
    display(){
        const output = this.stack.toString();
        console.log(output)
    }
    
};


const stack = new minStack();

stack.push(9);
stack.push(3);
stack.push(87);
stack.push(2);
stack.push(44);
console.log(stack.min());
stack.display();
stack.pop();
stack.display()
