class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0;
    }
    isEmpty(){
        return this.size ===0;
    }
    append(value){
        const node = new Node(value);
       if(this.isEmpty()){
           this.head = node;
       }else{
           let current = this.head;
           while(current.next){
               current = current.next;
           }
           current.next = node
       }
      this.size++
    }
    
    deleteNode(index){
       
        if(index<0||index>=this.size){
           
               return null
        }
         let removeNode;
        let priv ;
        if(index===0){
           removeNode = this.head;
           this.head = removeNode.next;
        }else{
            for(let i = 0; i<index-1; i++){
            priv  = this.head.next;
        }
        removeNode = priv.next;
        priv.next = removeNode.next;
        }
        this.size --;
        return removeNode.value;
    }
    print(){
        if(this.isEmpty()){
            console.log('the linkedlist is empty')
        }else{
            let current = this.head;
            let val = ""
            while(current){
                val = current.value;
                console.log(val)
                current = current.next;
            }
        }
    }
    
    
}

const list = new linkedlist();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

let item = list.deleteNode(2)
console.log(`deleted value is ${item}`)
list.print()




