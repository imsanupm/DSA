class stack{
    constructor(size){
        this.stack = new Array(size);
        this.capacity = 0;
        this.top = -1;
        this.stackTwo = [];
    };
    
    isFull(){
        return this.top>=this.capcity-1;
    };
    isEmpty(){
        return this.top==-1;
    }
    push(value){
        if(this.isFull()){
            console.log('stack over flow');
        };
        
        this.top++;
        this.stack[this.top] = value;
      
        return ;
    }
    pop(){
        if(this.isEmpty()){
            console.log('underflow');
            return false;
        };
        const popVal = this.stack[this.top];
        this.top--;
        return popVal;
    };
    
    reverse(){
        if(this.isEmpty()){
            console.log('underflow');
            return false;
        };
        while(this.stack.length){
            this.stackTwo.push(this.stack.pop());
        };
        this.stack = this.stackTwo;
    
    }
    
    display(){
        console.log(this.stack)
    }
};


const sta = new stack();

sta.push(84);
sta.push(2);
sta.push(23);
sta.push(99);
sta.push(234);
sta.display();
sta.reverse();
sta.display();





