// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.Stack1 = new Stack();
        this.Stack2 = new Stack();
    }

    add(val) {
        this.Stack1.push(val);
    }

    peek() {
        
        while(this.Stack1.peek()) {
            this.Stack2.push(this.Stack1.pop());
        }

        var returnValue = this.Stack2.peek();
        //console.log("Return Val: " + returnValue);

        while(this.Stack2.peek()) {
            this.Stack1.push(this.Stack2.pop());
        }

        return returnValue;
    }

    remove() {
        
        while(this.Stack1.peek()) {
            this.Stack2.push(this.Stack1.pop());
        }

        var returnValue = this.Stack2.pop();
        //console.log("Return Val: " + returnValue);

        while(this.Stack2.peek()) {
            this.Stack1.push(this.Stack2.pop());
        }

        return returnValue;
    }
}

module.exports = Queue;
