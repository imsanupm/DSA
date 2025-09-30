class Node{
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree{
    constructor(){
        this.root = null;
    };

    insert(value){
        const newNode = new Node(value);


        if(!this.root){
            this.root = newNode;
            return;
        }

        const queue = [this.root];

        while(queue.length){
            const node = queue.shift();

            if(!node.left){
                node.left = newNode;
                return;
            } else {
                queue.push(node.left);
            }

            if(!node.right){
                node.right = newNode;
                return;  
            } else {
                queue.push(node.right);
            }
        }
    }
}


const bt = new BinaryTree();

bt.insert(3);
bt.insert(2);
bt.insert(23);
bt.insert(99);
bt.insert(323);

console.log(JSON.stringify(bt.root, null, 2));




