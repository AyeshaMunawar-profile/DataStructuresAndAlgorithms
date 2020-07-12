// Data set 1
const fruits = ['Apples', 'Grapes', 'Pears', 'Banana', 'Nutella'];
const prices = [1000, 2000, 4000, 200, 500];
// Data set 2
// const fruits = ['Apples'];
// const prices = [1000];
// Data set 3
// const fruits = null;
// const prices = null;
class node {
    constructor(key, value, nextPtr) {
        this.key = key;
        this.value = value;
        this.nextPtr = nextPtr;
    }

}

class linkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    isInputInValid(value) {
        return value === null || value === undefined || isNaN(value);
    }

// fill the linked list with keys and value arrays fill corresponding keys and value in node
    populateLinkedList(keys, values) {
        if (keys.length === values.length) {
            for (let i = 0; i < keys.length; i++) {
                this.pushNode(keys[i], values[i]);
            }
        } else {
            console.log("Data provided is not correct i.e send keys and values array of equal length !");
        }
    }

    populateLinkedListReverse(keys, values) {
        if (keys.length === values.length) {
            for (let i = 0; i < keys.length; i++) {
                this.shiftNode(keys[i], values[i]);
            }
        } else {
            console.log("Data provided is not correct i.e send keys and values array of equal length !");
        }
    }

    printLinkedList() {
        if (!this.head && !this.tail) { // empty linked list
            console.log("Empty Linked List");
        } else { // start from the head og the linked list and print key and values till the last node i.e. tail node

            let currentNode = this.head;
            let i = 0;
            console.log("----------------------------------------------------------------\n");
            while (currentNode) {// traverse list from head to tail node
                console.log("Node " + i + "\n key:" + currentNode.key + "\n value:" + currentNode.value + "\n");
                currentNode = currentNode.nextPtr;
                i++;
            }

            console.log("Summary: \n " + "length of linked list: " + this.size + "\n Head node: \n   " + this.head.key
                + "\n   " + this.head.value + "\n Tail node: \n   " + this.tail.key + "\n   " + this.tail.value
                + "\n----------------------------------------------------------------");
        }
    }

    printNode(node, index) {
        if (index) {
            console.log("Node " + index + "\n key:" + node.key + "\n value:" + node.value + "\n");
        } else {
            console.log("key:" + node.key + "\n value:" + node.value + "\n");
        }
    }


    pushNode(key, value) { // add node at the end of the linked list
        let newNode = new node(key, value, null);
        if (!this.tail && !this.head) { // empty linked list
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            this.tail.nextPtr = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    unshiftNode(key, value) { // add node at the begining of the linked list
        let newNode = new node(key, value, null);
        if (!this.tail && !this.head) { // empty linked list
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            newNode.nextPtr = this.head;
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
            let currentNode = this.head;
            while (currentNode.nextPtr.nextPtr) {// traverse list from head to second last node
                currentNode = currentNode.nextPtr;
            }
            currentNode.nextPtr = null;
            this.tail = currentNode;
            this.size--;
        }
    }

    shiftNode() { // remove node from the beginning of the linked list
        if (!this.tail && !this.head) { // empty linked list
            console.log("Empty linked list nothing can be remover from the start of linked list");
            return null;
        } else if (this.head === this.tail) { // if only one node
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            this.head = this.head.nextPtr;
            this.size--;
        }
    }

    insertAtIndex(index, key, value) { // insert from index 0 to size
        if (this.isInputInValid(index) || this.isInputInValid(key) || this.isInputInValid(value)) { // input validation
            console.log("Please enter a correct index i.e. between 0 and " + this.size
                + " \n check if key and value entered are correct");
            return false;
        } else {
            if (index > this.size) {
                console.log("cannot insert the new node bacause the index is greater than the size of the linked list ");
                return false;
            } else if (index === this.size - 1) { // insert after last node
                this.pushNode(key, value);
                return true;
            } else if (index === 0) { // insert at the beginning of the linked list
                this.unshiftNode(key, value);
            } else if (index < this.size && index > 0) { // insert at any point other than after tail and before head
                let currentNode = this.head;
                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.nextPtr;
                }
                currentNode.nextPtr = new node(key, value, currentNode.nextPtr);
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
            console.log("Please enter a correct index i.e between 0 and " + this.size - 1
                + " \n check if key and value entered are correct");
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
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.nextPtr;
            }
            currentNode.nextPtr = currentNode.nextPtr.nextPtr;
            this.size--;
            console.log("Node deleted at index : " + index);
            return true;
        } else {
            console.log("Node cannot be deleted from linkedlist");
            return false;
        }
    }

    lookUp(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (!(currentNode.key.localeCompare(key))) { // if the given key and the current node's key is equal
                this.printNode(currentNode);
                return true;
            }

            currentNode = currentNode.nextPtr;

        }
        console.log("The node with the given key i.e. " + key + " not found ");
        return false;
    }

    reverseLinkedList() {

        // 1 check for empty linked list
        if (!this.size || !this.head || !this.tail) {
            console.log("Oops! Cannot reverse an empty linked list");
            return false;
        }
        // 2 check for linked list with one element
        else if (this.size === 1 && this.head === this.tail) {
            console.log("Linked list has only one node i.e. ", this.head);
            this.printLinkedList();
        }


        // 3 loop through the linked list until the last node
        else {
            let currentNode, previousNode, nextNode, counter;
            currentNode = this.head;
            previousNode = null;
            counter = 0;
            console.log("Reversing the linked list ...");
            while (currentNode) { // loop through all of the nodes
                // 3.1 set the value of the next node first if it is null then the last node is reached
                nextNode = currentNode.nextPtr ? currentNode.nextPtr : null;
                // Check for head and tail node
                // 3.2 (a) check for the head of the node to replace it with tail
                // if previous node is th first node i.e head node make it tail node
                if (previousNode && previousNode === this.head) {
                    previousNode.nextPtr = null;
                    this.tail = previousNode;
                }
                // 3.2 (b) check for the tail of the node to replace it with head
                if (!nextNode) { // if current node is th last node i.e tail node make it head node
                    this.head = currentNode;
                }
                // 4. reverse the direction of current node pointing to the next node instead make it point tot the
                // previous node
                currentNode.nextPtr = previousNode
                // 5. move previous node up the list
                previousNode = currentNode;
                // 6. move current node up the list
                currentNode = nextNode;
                counter++;
            }
        }
    }
}


let myLinkedList = new linkedList();
myLinkedList.populateLinkedList(fruits, prices); // fill linked list with corresponding keys and values arrays
myLinkedList.printLinkedList();
myLinkedList.reverseLinkedList();
myLinkedList.printLinkedList();

