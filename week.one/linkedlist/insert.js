//problem
//insert a node in a specific postion in single linkedlist;

class node  {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0;
    }
    lenngth(){
        return this.size===0;
    }
    prepend(value){
      const nod = new node(value);
      if(this.lenngth()){
        this.head = nod;
      }else{
        nod.next = this.head;
        this.head = nod
      }
      this.size++
    }
    //insert a nod in specific index
    insert(value,index){
        if(index<0||index>this.size){
            console.log('invalid arguments...');
            
        }
        const nod = new node(value);
        let prive = this.head;
        for(let i =0; i<index-1; i++){
            prive = prive.next;
        }
         nod.next = prive.next;
         prive.next = nod
    }
    print(){
        let current = this.head;
        let value = "";
        while(current){
            value = current.value;
            console.log('datas ',value);
            current = current.next;
        }
    }
}

const list = new linkedlist();
list.prepend(5);
list.prepend(40);
list.prepend(29);
list.prepend(29);

//insert
list.insert(100,2);
list.print()

//output 
// datas  29
// datas  29
// datas  100
// datas  40
// datas  5
// like this because datas are inserted using prepend
