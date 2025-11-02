class Node{
    constructor(value){
        this.value = value;
        this.left= null;
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
            };
            if(!current.right){
                current.right = newNode;
                return;
            }else{
                queue.push(current.right);
            }
        }
    };
        // for finding the max dpeth 
    maxPath( node = this.root){
        if(node==null)return 0;
        return 1+Math.max(this.maxPath(node.left) , this.maxPath(node.right))
    };
    //chacking tree balanced or not
    isBalanced(node = this.root){
        if(node===null)return true;
        let  lHeight = this.maxPath(node.left);
        let rHeight = this.maxPath(node.right);
        if(Math.abs(lHeight-rHeight)>1)return false;
        return this.isBalanced(node.left) && this.isBalanced(node.right)
    };
    
};



const bt = new BinaryTree();
bt.insert(10);
bt.insert(20);
bt.insert(30);
bt.insert(40);
bt.insert(60);

console.log(JSON.stringify(bt,null,2))
console.log(bt.isBalanced())

