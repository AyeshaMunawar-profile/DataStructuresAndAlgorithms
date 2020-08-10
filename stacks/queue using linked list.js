class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;
    }

    enqueue(value) {// add node to the end of the queue
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.start = newNode;
            this.end = newNode;
        } else {
            this.end.next = newNode;
            this.end = newNode;
        }
        this.length++;
        console.log("-----------------------");
        console.log(value + "  node is added to the queue");
        console.log("-----------------------");
    }

    dequeue() {// remove first node from the queue
        if (this.isEmpty()) {// if the queue is empty
            console.log("Queue is already empty nothing can be removed ");
            return false;
        } else {// if the queue has only one node or more than one node
            let temp = this.start;
            this.start = this.start.next ? this.start.next : null;
            if (this.start === this.end) { // if only one node in the queue then set start and end both to null
                this.end = null;
            }
            this.length--;
            console.log("-----------------------");
            console.log(temp.value + "  node is removed");
            console.log("-----------------------");
        }
    }

    peek() {//get the first node from the queue
        if (this.isEmpty) {
            console.log("Queue is empty nothing is at the start");
            return false;
        } else {
            console.log("-----------------------");
            console.log(this.start.value + "  is at the start of the queue");
            console.log("-----------------------");
            return this.start;
        }
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("-----------------------");
            console.log("The queue is empty");
            console.log("-----------------------");
        } else {
            let currentNode = this.start;
            console.log("-----------------------");
            while (currentNode) {
                console.log(currentNode.value);
                currentNode = currentNode.next ? currentNode.next : null;
            }
            console.log("-----------------------");
        }
    }

    isEmpty() {
        return !this.length || !this.start || !this.end;
    }

}

let myQueue = new Queue();
myQueue.enqueue("Ayesha");
myQueue.enqueue("Javeria");
myQueue.enqueue("Hafsa");
myQueue.enqueue("Naila");
myQueue.enqueue("Aimen");
myQueue.printQueue();



