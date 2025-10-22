// stack using linkedList implementation


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class stackUsingLinkedList{
    constructor(){
        this.top = null;
    };
    
    isEmpty(){
        return this.top=== null;
    }
    
    push(value){
        const node = new Node(value);  //if you are not able to understand the logic feel free to write logic on your notebook
        node.next = this.top;
        this.top = node;
        console.log(`data pushed to Stack===${value}`)
    };
    
    
    pop(){
        
        if(this.isEmpty()){
            console.log('your stack is underflow');
            return false;
        }
        const popVal = this.top.value;
        this.top = this.top.next;
        return popVal;
    };
    
    peek(){
         if(this.isEmpty()){
            console.log('your stack is underflow');
            return false;
        }
        return this.top.value;
    }
    
    display(){
        let current = this.top;
        let result  =[];
        while(current){
            result +=current.value+">"
            current = current.next;
        }
        
        console.log(result)
    }
    
};


const stack = new stackUsingLinkedList();
stack.push(34);
stack.push(78);
console.log(stack.peek())
stack.display()