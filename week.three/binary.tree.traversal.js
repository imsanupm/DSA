// implementation of normal binary tree and BSF(breadth first search);
// if you don't understand the code feel free to write the logic on your notebook;


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right =null;
    }
};


class BinaryTree{
    constructor(){
        this.root = null;
    };
    
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return;
        };
        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
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
    search(value){
        if(!this.root)return false;
        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            if(current.value==value) return true;
            if(current.left){
                queue.push(current.left);
            };
            if(current.right){
                queue.push(current.right);
            }
        }
        return false;
    };
    inorder(node = this.root){
        if(!node)return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
        
    };
    preorder(node = this.root){
        if(!node)return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    };
    postorder(node = this.root){
        if(!node)return;
        this.preorder(node.left);
        this.preorder(node.right);
        console.log(node.value);
    };
    
    levelorder(){
        if(!this.root)return false;
        let result = [];
        let queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            result.push(current.value);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        };
    return result;
    }
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6)
binaryTree.insert(7)
console.log(binaryTree.search(222));
console.log('inorder=====')
binaryTree.inorder();
console.log('preorder=====')
binaryTree.preorder();
console.log('post order====');
binaryTree.postorder();
console.log('level order===')
console.log(binaryTree.levelorder())





