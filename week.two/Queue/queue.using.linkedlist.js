class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queuUsingLinkedList{
    constructor(){
        this.front = null;
        this.rear = null;
        this.currentSize = 0;
    };
    
    isEmpty(){
        return this.front==null;
    }
    
    enqueue(value){
        const node  = new Node(value);
        if(this.isEmpty()){
            this.front = node;
            this.rear = node
        };
     
        this.rear.next = node;
        this.rear = node;
        this.currentSize +=1;
    };
    
    dequeue(){
        
        if(this.isEmpty()){
            console.log('your queue is empty:');
            return false;
        };
        
        const item = this.front.value;
        this.front = this.front.next;
        if(this.front==null){
            this.rear = null;
        };
        this.currentSize --;
        return item;
        
        
    };
    
    peek(){
        if(this.isEmpty()){
            console.log('your item is empty');
            return false;
        };
        const item = this.front.value;
        return item;
    }
    
};

const queue = new queuUsingLinkedList(5)
queue.enqueue(22);
queue.enqueue(99);
queue.enqueue(28);
queue.enqueue(10)
console.log(queue.dequeue())
