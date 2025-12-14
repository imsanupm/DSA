//this is a simple implementation of fast and slow approach 
// for more refference https://medium.com/@arifimran5/fast-and-slow-pointer-pattern-in-linked-list-43647869ac99  use this doc

class Node{
    constructor(value){
        this.value = value
        this.next = null;
    };
};


class linkedList{
    constructor(){
        this.head = null
        this.size = 0;
    };
    isEmpty(){
        return this.size===0;
    };
    
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.size++
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            };
            current.next = node;
            this.size++;
        }
    }
    print(){
      
    
        let cur = this.head;
        while(cur){
            
            
            cur = cur.next;
        };
    };
    
    removeMid(){
      
        let slow = this.head;
          let fast = this.head;
          let prev = null;
        while(fast!=null && fast.next!=null){
            prev = slow
            fast = fast.next.next
            slow = slow.next
        }
        prev.next = slow.next;
   
    }
};

const list = new linkedList;
list.append(23);
list.append(44);
list.append(99);
list.print()
list.findMid()
