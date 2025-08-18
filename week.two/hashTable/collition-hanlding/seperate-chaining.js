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















// // Node for Linked List
// class Node {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.next = null;
//     }
// }

// // Hash Table with Separate Chaining
// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     // Simple hash function
//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     // Insert or Update
//     set(key, value) {
//         const index = this.hash(key);

//         // If no linked list exists, create one
//         if (!this.table[index]) {
//             this.table[index] = new Node(key, value);
//         } else {
//             let current = this.table[index];
//             while (true) {
//                 if (current.key === key) {
//                     current.value = value; // Update if key exists
//                     return;
//                 }
//                 if (!current.next) break;
//                 current = current.next;
//             }
//             current.next = new Node(key, value); // Append new node
//         }
//     }

//     // Retrieve value
//     get(key) {
//         const index = this.hash(key);
//         let current = this.table[index];
//         while (current) {
//             if (current.key === key) {
//                 return current.value;
//             }
//             current = current.next;
//         }
//         return undefined;
//     }

//     // Remove key
//     remove(key) {
//         const index = this.hash(key);
//         let current = this.table[index];
//         let prev = null;

//         while (current) {
//             if (current.key === key) {
//                 if (prev) {
//                     prev.next = current.next;
//                 } else {
//                     this.table[index] = current.next;
//                 }
//                 return true;
//             }
//             prev = current;
//             current = current.next;
//         }
//         return false;
//     }

//     // Display hash table
//     display() {
//         for (let i = 0; i < this.size; i++) {
//             let items = [];
//             let current = this.table[i];
//             while (current) {
//                 items.push(`{${current.key}: ${current.value}}`);
//                 current = current.next;
//             }
//             if (items.length > 0) {
//                 console.log(`${i}: ${items.join(" -> ")}`);
//             }
//         }
//     }
// }

// // Example Usage
// const ht = new HashTable(5);
// ht.set("apple", 100);
// ht.set("banana", 200);
// ht.set("grape", 300);
// ht.set("orange", 400); // may collide with others
// ht.set("apple", 150); // update

// ht.display();

// console.log("Get banana:", ht.get("banana"));
// ht.remove("banana");
// console.log("After removing banana:");
// ht.display();
































