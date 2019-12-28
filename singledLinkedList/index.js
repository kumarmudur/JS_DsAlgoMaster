class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // shift
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return this.currentHead;
    }

    // unshit
    unshift(val) {
        var newNode = new Node(val);
        console.log('newNode', newNode);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // set
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        } 
        if (index === 0) {
            this.unshift(val);
            return true;
        } 
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var tmp = prev.next;
        prev.next = tmp;
        this.length++;
        return true;
    }

    // remove
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}

var list = new singlyLinkedList();
list.push('hi');
list.push('google');
list.push('apple');
list.unshift('fb');


console.log(list);