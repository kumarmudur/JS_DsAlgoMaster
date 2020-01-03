class Node {
 constructor(val) {
     this.val = val;
     this.left = null;
     this.right = null;
 }   
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert
    insert(val) {
        var newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    } 
                } else if (val > current.val) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // find
    find(val) {
        if (this.root === null) return false;
        var current = this.root, found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found =  true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    // contains
    contains(val) {
        if (this.root === null) return false;
        var current = this.root;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // BFS
    BFS() {
        var data = [], queue = [], node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // DFS -PreOrder
    DFSPreOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // DFS-PostOrder
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    // DFS-InOrder
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}