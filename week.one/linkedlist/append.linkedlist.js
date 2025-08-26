class Node {
    constructor(){
        this.value = value;
        this.next = null;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0
    }
    append(value){
        const node = new Node(value)
        if(isEmpty()){
            this.head = node
        }else{
            let current = this.head;
            while(current.next){
                current = curren.next;
            }
            current.next = node;
        }
        this.size++
    }
    deleteNode(index){ //5
    if(index<0||index>=this.size){
        console.log("invalid index")
        return
    }else{
         let current = this.head;
        let deleteItem = null
       for(let i =0; i<index-1; i++){
           current = current.next;
       }
       deleteItem =  current.next;
       current.next = deleteItem.next;
    }
        this.size--
        console.log(`item deleted From index${this.size+1}`)
    }
   
    
}

const list = new linkedlist()




