class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    prepend(value) {
        let newNode = null;
        if (this.head != null) {
            newNode = this.head;
        }
        this.head = new ListNode(value);
        this.head.next = newNode;
    }

    append(value) {
        if (this.head == null) this.prepend(value);
        else {
            let tmp = this.head;
            while (tmp.next != null) tmp = tmp.next;
            tmp.next = new ListNode(value)
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head
    }

    tail() {
        let node = this.head;
        while (node.next != null) node = node.next;
        return node;
    }

    at(index) {
        let node = this.head;
        for(let i = 0; i < index; i++) {
            node = node.next;
            if(node == null) return "There is noe item for this index"
        }
        return node;
    }

    pop() {
        let cur = this.head;
        let prev = null;
        while (cur.next != null) {
        prev = cur;
        cur = cur.next;
        }
        prev.next = null;
    }

    contains(value) {
        let node = this.head;
        while(node != null) {
            if(node.value === value) return true;
            node = node.next;
        }
        return false
    }

    find(value) {
        let node = this.head;
        let index = 0;
        while (node != null) {
            if(node.value === value) return index;
            node = node.next;
            index++
        }
        return null
    }

    toString() {
        let node = this.head;
        let stringList = "";
        while(node != null) {
            stringList += `(${node.value}) -> `;
            node = node.next;
        }
        return (stringList += "null");
    }
}

let list = new LinkedList()
list.append(2)
list.prepend(1)
list.append(5)
list.append(10)
list.pop()
list.size()
list.getFirst()
list.tail()
list.at(1)
list.contains(7)
list.toString()
list.find(10)


