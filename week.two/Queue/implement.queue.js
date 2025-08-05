//this is the basic implementation of queue

class queue{
    constructor(){
        this.item = []
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        return this.item.shift()
    }
    isEmpty(){
        return this.item.length===0;
    }
    print(){
       if(this.isEmpty()){
        return -1
       }
       console.log(this.item.toLocaleString());

    }
    size(){
        return this.item.length
    }

}
const q = new queue();
q.enqueue(8);
q.enqueue(9)
q.enqueue(2);
q.enqueue(2);
let ans = q.dequeue()
console.log(ans);
q.print()
//if you can't understand this feel free to read your obsedian notes or documentation