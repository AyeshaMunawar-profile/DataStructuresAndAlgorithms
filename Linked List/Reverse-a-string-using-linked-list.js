const myString = ['a', 'b', 'c', 'd', 'e'];

class node {
    constructor(value, nextPtr, prevPtr) {
        this.value = value;
        this.nextPtr = nextPtr;
        this.prevPtr = prevPtr;
    }
}


class linkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    isInputInValid(value) {
        if (value === null || value === undefined || value === NaN) {
            return true;
        }
        return false;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.nextPtr;
            counter++;
        }
        return currentNode;
    }

    populateLinkedList(values) { // fill the linked list with  value arrays
        if (values.length) {
            for (let i = 0; i < values.length; i++) {
                this.pushNode(values[i]);
            }
        } else {
            console.log("Data provided is not correct i.e values array of valid length !");
        }
    }

    populateLinkedListReverse(values) {
        if (values.length) {
            for (let i = 0; i < values.length; i++) {
                this.shiftNode(values[i]);
            }
        } else {
            console.log("Data provided is not correct i.e send values array of valid length !");
        }
    }


    printLinkedList() {
        let finalString = "";
        if (!this.head && !this.tail) { // empty linked list
            console.log("Empty Linked List");
        } else { // start from the head og the linked list and print values till the last node i.e. tail node

            let currentNode = this.head;
            let i = 0;
            console.log("----------------------------------------------------------------\n");
            while (currentNode) {// traverse list from head to tail node
                console.log(currentNode.value);
                finalString += currentNode.value;
                currentNode = currentNode.nextPtr;
                i++;
            }
            console.log("----------------------------------------------------------------\n");
        }
    }

    printLinkedListReversed() {
        if (!this.head && !this.tail) { // empty linked list
            console.log("Empty Linked List");
        } else { // start from the head og the linked list and print values till the last node i.e. tail node

            let currentNode = this.tail;
            let i = this.size - 1;
            console.log("----------------------------------------------------------------\n");
            while (currentNode) {// traverse list from head to tail node
                console.log("Node " + i + "\n value:" + currentNode.value + "\n");
                currentNode = currentNode.prevPtr;
                i--;
            }

            console.log("Summary: \n " + "length of linked list: " + this.size + "\n Head node: \n   " + this.head.value + "\n Tail node: \n   " + this.tail.value + "\n----------------------------------------------------------------");
        }
    }

    pushNode(value) { // add node at the end of the linked list
        let newNode = new node(value, null, null);
        if (!this.tail && !this.head) { // empty linked list
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            this.tail.nextPtr = newNode;
            newNode.prevPtr = this.tail;
            this.tail = newNode;
            this.size++;
        }
    }

    unshiftNode(value) { // add node at the begining of the linked list
        let newNode = new node(value, null, null);
        if (!this.tail && !this.head) { // empty linked list
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            newNode.nextPtr = this.head;
            this.head.prevPtr = newNode;
            this.head = newNode;
            this.size++;
        }
    }

    popNode() { // remove node from the end of the linked list
        if (!this.tail && !this.head) { // empty linked list
            console.log("Empty linked list nothing can be popped");
            return null;
        } else if (this.head === this.tail) { // if only one node
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            let newTailNode = this.tail.prevPtr;
            newTailNode.nextPtr = null;
            this.tail = newTailNode;
            this.size--;
        }
    }

    shiftNode() { // remove node from the begining of the linked list
        if (!this.tail && !this.head) { // empty linked list
            console.log("Empty linked list nothing can be remover from the start of linked list");
            return null;
        } else if (this.head === this.tail) { // if only one node
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            let newHeadNode = this.head.nextPtr;
            newHeadNode.prevPtr = null;
            this.head = newHeadNode;
            this.size--;
        }
    }

    insertAtIndex(index, value) { // insert from index 0 to size i.e. insert after given index
        if (this.isInputInValid(index) || this.isInputInValid(value)) { // input validation
            console.log("Please enter a correct index i.e. between 0 and " + this.size + " \n check if value entered are correct");
            return false;
        } else {
            if (index > this.size) {
                console.log("cannot insert the new node bacause the index is greater than the size of the linked list ");
                return false;
            } else if (index === this.size - 1) { // insert after last node
                this.pushNode(value);
                return true;
            } else if (index === 0) { // insert at the beginning of the linked list
                this.unshiftNode(value);
            } else if (index < this.size - 1 && index > 0) { // insert at any point other than after tail and before head
                let currentNode = this.head;
                currentNode = this.traverseToIndex(index - 1); // traverse to the node behind the node at given index
                let newNode = new node(value, currentNode.nextPtr, currentNode);
                currentNode.nextPtr.prevPtr = newNode;
                currentNode.nextPtr = newNode;
                this.size++;
                return true;
            } else {
                console.log("Node cannot be inserted into the linkedlist");
                return false;
            }
        }
    }

    deleteAtIndex(index) { // delete from index 0 to tail
        if (this.isInputInValid(index)) {
            console.log("Please enter a correct index i.e between 0 and " + this.size - 1 + " \n check if  value entered are correct");
            return false;
        } else if (index > this.size - 1) {
            console.log("Cannot delete the node as the index is greater than the size of the linked list");
            return false;
        } else if (index === this.size - 1) { // delete last node
            this.popNode();
            return true;
        } else if (index === 0) { // delete the first node
            this.shiftNode();
        } else if (index < this.size - 1 && index > 0) { // delete some where inbetween head and tail node
            let currentNode = this.head;
            currentNode = this.traverseToIndex(index - 1);
            currentNode.nextPtr = currentNode.nextPtr.nextPtr;
            currentNode.nextPtr.prevPtr = currentNode;
            this.size--;
            console.log("Node deleted at index : " + index);
            return true;
        } else {
            console.log("Node cannot be deleted from linkedlist");
            return false;
        }
    }

    lookUp(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (!(currentNode.value.localeCompare(value))) { // if the given value and the current node's value is equal
                this.printNode(currentNode);
                return true;
            }

            currentNode = currentNode.nextPtr;

        }
        console.log("The node with the given value i.e. " + value + " not found ");
        return false;
    }


    printNode(node, index) {
        if (index) {
            console.log("Node " + index + "\n value:" + node.value + "\n");
        } else {
            console.log("value:" + node.value + "\n");
        }
    }

    getListValuesReversedInAnArray() {
        let currentNode = this.tail;
        let index = this.size - 1;
        let reversedString = "";
        while (currentNode && index >= 0) {
            reversedString += currentNode.value;
            currentNode = currentNode.prevPtr;
            index--;
        }
        console.log("Reversed string is : " + reversedString);
        return reversedString;
    }
}


let myLinkedList = new linkedList();
myLinkedList.populateLinkedList(myString);
myLinkedList.printLinkedList();
myLinkedList.getListValuesReversedInAnArray();

