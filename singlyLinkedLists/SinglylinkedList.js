
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        let newTail = this.head;
        let current = newTail;

        if (!this.head) {
            return undefined;
        }

        while (current.next !== null) {
            newTail = current;
            current = current.next;
        }

        if (newTail === current) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = newTail;
            this.tail.next = null;
        }

        this.length--;

        return current;
    }

    shift() {
        if (!this.head) return undefined;

        const newNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return newNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        if (this.length === 1) {
            this.tail = this.head;
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let newNode = this.head;
        let count = 0;
        while (count < index) {
            count++;
            newNode = newNode.next;
        }

        return newNode;
    }

    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
        }
        return false;
    }

    // O(1)
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.pop(val);

        if (index == 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;

        return true;
    }

    // O(1) or O(N)
    remove(index) {
        if (index < 0 || index >= this.length) return false;

        if (index === this.length - 1) return this.pop();

        if (index == 0) return this.shift();

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}


const list = new SinglyLinkedList();


list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

console.log(list.reverse());
console.log(list)


