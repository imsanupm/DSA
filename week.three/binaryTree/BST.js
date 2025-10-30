class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    };

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    };

    findMinNode(node) {
        if (node == null) {
            return null;
        } else if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    };

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node
            } else if (node.right === null) {
                return node.left;

            };

        }
        let aux = this.findMinNode(node.right);
        node.value = aux.value

        node.right = this.removeNode(node.right, aux.value);
        return node;
    }


    search(value) {
        return this.searchNode(this.root, value);
    };

    searchNode(node, value) {
        if (node === null) return false;

        if (node.value == value) {
            return node.value
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else if (value < node.value) {
            return this.searchNode(node.left, value)
        }
    }
};






const bst = new BinarySearchTree();
bst.insert(7)
bst.insert(5);
bst.insert(12);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(15);
bst.insert(1);
bst.insert(4);
bst.insert(8);
bst.insert(10);
bst.insert(13)
bst.insert(17)
// bst.remove(6)
bst.remove(15)
console.log(JSON.stringify(bst, null, 2));