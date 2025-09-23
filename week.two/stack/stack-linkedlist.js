class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
};

class stackUsingLinkedlist {

    constructor (){
      this.head = null;
      this.size = 0;
    };
    push(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    };

    pop(){
        if(this.isEmpty()){
            console.log('your stack is empty')
            return false;
            
        }
        const poppedValue = this.head;
        this.head = this.head.next;
        this.size--;
        return poppedValue;
    };

    peak(){
        if(this.isEmpty()){
            console.log('your stack is empty');
            return false;
        };
        
    }
     print(){
        console.log('you getting call');
          if(this.isEmpty()){
            console.log('your stack is empty');
            return false
          }
            let current = this.head;
            while(current){
              
                console.log(current.value)
                current = current.next;
            }
        }


    isEmpty(){
        return this.size === 0
    }

}

const stack = new stackUsingLinkedlist();
stack.push(3);
stack.push(5);
stack.push(2);
stack.print();
stack.pop();
stack.print()