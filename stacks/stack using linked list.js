class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("The stack is empty");

        } else {
            console.log("The latest value entered is : " + this.top.value);
            return this.top;
        }
    }

    pop() { // remove the first node from the stack
        if (this.isEmpty()) {// if empty stack
            console.log("Nothing can be removed its and empty stack");
        } else if (this.length === 1 && this.top === this.bottom) {// if stack has only one node
            console.log("----------------------------");
            console.log("New node with value :" + this.top.value + " is removed");
            console.log("----------------------------");
            this.top = null;
            this.bottom = null;
            this.length--;

        } else {// if stack has more than one node
            console.log("----------------------------");
            console.log("New node with value :" + this.top.value + " is removed");
            console.log("----------------------------");
            this.top = this.top.next;
            this.length--;

        }

    }

    push(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) { // first node added to the stack
            this.length++;
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // if non empty stack then add new node to the front of the stack i.e last value added to the etop of the stack or end of the linked list
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
            console.log("----------------------------");
            console.log("New node with value :" + value + " is added");
            console.log("----------------------------");
        }
    }

    isEmpty() {
        return !this.length && !this.top && !this.bottom;
    }

    printStack() {
        if (this.isEmpty()) {
            console.log("The stack is empty");
        } else {
            let currentNode = this.top;
            console.log("----------------------------");
            console.log("The stack is given bellow:");
            while (currentNode) {
                console.log(currentNode.value);
                currentNode = currentNode.next ? currentNode.next : null;
            }
            console.log("----------------------------");
        }
    }
}

let myStack = new Stack();
myStack.push("Google");
myStack.push("Twitter");
myStack.push("Instagram");
myStack.push("HackerRank");
myStack.push("Facebook");
myStack.printStack();
myStack.peek();
