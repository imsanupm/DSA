// this is the implementation of (max depth tree/hight);

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree{
    constructor(){
        this.root = null;
    };
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        };
        
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                current.left = newNode;
                return;
            }else{
                queue.push(current.left);
            }
            if(!current.right){
                current.right = newNode;
                return;
            }else{
                queue.push(current.right);
            };
        }
    };
    
    maxDepth(node = this.root){
        if(node==null){
            return 0;
        };
        return 1 + Math.max(this.maxDepth(node.left) , this.maxDepth(node.right));
    }
    
};


const bt = new BinaryTree();
bt.insert(24);
bt.insert(2);
bt.insert(90);
bt.insert(44);
bt.insert(90);
bt.insert(23);
bt.insert(23);
bt.insert(23);
console.log(bt.maxDepth())