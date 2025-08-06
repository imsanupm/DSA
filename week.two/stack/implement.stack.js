class stack{
    constructor(capacity){
        this.capacity = capacity;
        this.top = -1;
        this.a = new Array(capacity);
    }
    isEmpty(){
     return  this.top<0
    }
    push(value){
        if(this.top>=this.capacity-1){
            console.log('stack overflow');
            return false
        }
        this.a[++this.top] = value;
    }
    pop(){
        if(this.isEmpty()){
            console.log('your stack is empty ');
            return false
        }
        return this.a[this.top--]
    }
   peak(){
    if(this.isEmpty()){
        console.log('your stack is empty');
        return false
    }
    return this.a[this.top];
   }
}

const s = new stack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);


