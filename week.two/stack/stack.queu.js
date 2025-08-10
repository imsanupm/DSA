class stackUsingQue{
    constructor(){
        this.queueOne = [];
        this.queueTwo = [];
    }
    push(value){
        this.queueTwo.push(value);
        while(this.queueOne.length!=0){
            this.queueTwo.push(this.queueOne[0]);
            this.queueOne.shift();
        }
        this.q = this.queueOne;
        this.queueOne = this.queueTwo;
        this.queueTwo = this.q
    }
    pop(){
      if(this.isEmpty()){
          return false;
      }
    return  this.queueOne.shift();
    }
    top(){
        return this.queueOne[0]
    }
    
    isEmpty(){
        return this.queueOne.length===0;
    }
}


const s = new stackUsingQue();
s.push(4)
s.push(2)
s.push(8);
s.push(7)
console.log(s.top())
