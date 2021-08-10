// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
       this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let counterNode = this.head;

        while (counterNode) {
            count++;
            counterNode = counterNode.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let returnNode = this.head;
        if(!returnNode) {
            return null;
        }

        while (returnNode.next) {
           returnNode = returnNode.next;
        }

        return returnNode;

    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head)  {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) {
            return;
        } else if(!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        let lastNode = this.head.next;

        while (currentNode.next) {

           lastNode = currentNode.next;
           if(lastNode.next) {
               currentNode = currentNode.next;
           } else {
               currentNode.next = null;
           }
        }
    }


    insertLast(data) {
        const lastNode = this.getLast();

        if(lastNode) {
            lastNode.next = new Node(data);
        } else {
           this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while(node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;

        }
        return null;
    }

    removeAt(index) {

        if(!this.head) {
            return;
        }

        if(index == 0) {
            this.removeFirst();
            return;
        }

        const indexNode = this.getAt(index);
        const previous = this.getAt(index -1);
        if(!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;

    }

    removeAt1(index) {

        if(index == 0) {
            this.removeFirst();
            return;
        }

        let counter = 0;
        let node = this.head;
        let previous = null;

        while(node) {
            if (counter === index) {
              previous.next = node.next;
              return;
            }

            counter++;
            previous = node;
            node = node.next;
        }
    }

    insertAt(data, index) {

        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let counter = 0;
        let currNode = this.head;
        let previous = null;
        while(currNode) {
            if (counter === index) {
              previous.next = new Node(data, currNode);
              return;
            }

            counter++;
            previous = currNode;
            currNode = currNode.next;
        }

        previous.next = new Node(data);

    }

    forEach(fn) {
        let head = this.head;
        while(head) {
          fn(head);
          head = head.next;
        }
      }

    *[Symbol.iterator]() {
         let node = this.head;
         while(node) {
           yield node;
           node = node.next;
         }
       }

}

module.exports = { Node, LinkedList };
