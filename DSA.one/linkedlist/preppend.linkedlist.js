//create linkedlist and prepend 
//O(1) constant time complexcity
class nod{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    length(){
        return this.size===0
    }
    //O(1) constant
    append(value){
      let node = new nod(value)
          if(this.length()){
              this.head = node;
          }else{
             node.next = this.head;
              this.head = node;
          }
          this.size++
      
    }
    print(){
      let current = this.head;
      let val = "";
      while(current){
          val+=current.value;
          console.log(val);
          current = current.next
      }
    }
}

const  list = new linkedlist();
list.append(5);
list.print()







