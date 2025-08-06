

class circularQueue{
    constructor(capacity) {
        this.item = new Array(capacity);
        this.capacity = capacity;
        this.curentLength = 0;
        this.fornt = -1;
        this.reare = -1;
    }
    isEmpty(){
        return this.curentLength===0
    }
    isFull(){
        return this.curentLength===this.capacity;
    }
    enque(value){
        this.reare = (this.reare+1)%this.capacity; //if you have doubt on this feel write logic on your notebook
        this.item[this.reare] = value;
        this.curentLength+=1;
        if(this.reare===-1){
            this.reare = this.fornt;
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return -1;
        }
        const item = this.item[this.fornt];
        this.item[this.fornt] = null;
        this.fornt  = this.fornt+1;
        this.curentLength -=1
        if(this.isEmpty()){
            this.fornt = -1;
            this.reare = -1;
        }
        return item
    }
    print(){
        if(this.isEmpty()){
            console.log('your circular linkedlist is empty:');
            
        }else{
            console.log('you are getting call here ');
            
            console.log(this.item);
            
        }
        
    }
}

const q = new circularQueue(5);
q.enque(8);
q.enque(9);
q.enque(10);
q.enque(11);
q.enque(0);
q.print()