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
    contains(val) {
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
}