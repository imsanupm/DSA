//this is a basic implementation of hashtable
//if you couldn't understand this feel freee to refer documentations or your obsedian;

class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i =0; i<key.length;i ++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }
    set(key,value){
        const keyForAdiing = this.hash(key);
        this.table[keyForAdiing] = value;
    }
    get(k){
        const key = this.hash(k);
        return this.table[key]
    }
    prit(){
        for(let i =0; i<this.size;i++){
            console.log(this.table[i])
        }
    }
    delete(key){
        const keyToDelete = this.hash(key);
        this.table[keyToDelete] = undefined;
    }
}


const hash = new hashTable(4);
hash.set("sanu","krishnaPm");
hash.set("Abhiram","Sajeev");
hash.set("Sharon","Ts");
hash.set("Jayasurya","Devadas");
let ans = hash.get("sanu");

hash.prit()
hash.delete("sanu")

