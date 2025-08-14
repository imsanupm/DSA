class node {
    constructor(key,value){
        this.key = key
        this.value = value;
        this.next = null
    }
}

class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }
    hash(key){
        let total = 0;
        for(let i =0; i<key.length; i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }
    set(key,value){
        const keyToAdd = this.hash(key);
        if(!this.table[keyToAdd]){
            this.table [ keyToAdd ] = new node (key,value);
        }else{
            let current = this.table[keyToAdd]
            while(true){
                if(current.key===key){
                    current.value = value
                    return
                }
                if(!current.next){
                    break
                }
                current = current.next
            }
            current.next = new node(key,value);
        }

    }
    
}