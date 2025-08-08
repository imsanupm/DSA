class queuestack{
    constructor(){
        this.s1 = [];
        this.s2 = []
    }
    enque(value){
         while(this.s1.length){
        this.s2.push(this.s1.pop())
    }
    this.s1.push(value); 
    while(this.s2.length){
        this.s1.push(this.s2.pop())
    }
    }
    dequeue(){
        if(this.s1.length===0){
            console.log('your queue is empty');
            return false
        }
        let item  = this.s1.pop();

        return item;
    }
    isEmpty(){
        return this.s1.length===0
    }
  
}

const queue = new queuestack();
queue.enque(7);
queue.enque(2);
queue.enque(4);
const value = queue.dequeue();
console.log(value)




