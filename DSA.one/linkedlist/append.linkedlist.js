//append linkedlist
//we are adding new node to the end using the append method
    //O(n) time complexity
    
class nod {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    length (){
        return this.size === 0
    };
    //O(n) time complexity
    append(value){
        const node = new nod(value);
        if(this.length()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
    }

    print(){
        let current = this.head;
        let value = "";
        while(current){
            value=current.value;
            console.log("values in linkedlist" ,value);
            
            current = current.next
        }
    }
}

const list = new linkedlist()

list.append(5)

list.append(8)

list.print()