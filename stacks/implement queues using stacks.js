// push () pop() peek() and isEmpty()
//1) you must only use standard operations of the stacks which means that only push to top , peek/pop
//, size and is empty operations are valid
//2)Depending on your language stacks may or may not be supported natively . you may simulate the stack using //list or deque (double ended queue) as long as you use the standard operations of the queue
//you may assume that all operations are valid eg. no pop or peek operations will be called on the empty queue
// We will use two stacks for this purpose
//time complexity peek and push is O(1)
//space complexity O(n)


class Queue {
    this
.
    stack1 = [];
    this
.
    stack2 = [];

    constructor() {
    }

    push(value) {
        this.stack1.push(value);
        return true;
    }

    pop() {
        if (!this.stack2) {
            while (this.stack1.length) {// copy stack1 to stack 2 in reverse order
                this.stack2.push(this.stack1.pop());

            }
            return this.stack2.pop();
        }
    }

    peek() {
        while (this.stack1.length) {// copy stack1 to stack 2 in reverse order
            this.stack2.push(this.stack1.pop());

        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return !this.stack1.length;
    }
}

var myQueue = new Queue();
myQueue.push("Ayesha");
myQueue.push("Javeria");
myQueue.pop();
myQueue.peek();
myQueue.isEmpty();