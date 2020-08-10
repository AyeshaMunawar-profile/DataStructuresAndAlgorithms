// implement stacks using array

class stack {
    stackArray = [];
    lastValue = null;

    constrctor() {
    }

    push(value) {
        this.stackArray.push(value);
        this.lastValue = value;
        console.log("--------------------------------");
        console.log(value + " added");
        console.log("--------------------------------");
        return true;
    }

    pop() {
        let length = this.stackArray.length;
        if (!length || !this.lastValue) {
            console.log("--------------------------------");
            console.log("Error empty stack nothing can be removed");
            console.log("--------------------------------");
            return false;
        } else {
            let value = this.stackArray.pop();
            console.log("--------------------------------");
            console.log(value + " popped!");
            console.log("--------------------------------");
            return true;
        }
    }

    peek() {
        let length = this.stackArray.length;
        if (this.stackArray && length) {
            console.log("--------------------------------");
            console.log("The stack has Last value entered as " + this.stackArray[length - 1]);
            console.log("--------------------------------");
            return this.stackArray[length - 1];
        } else {
            console.log("--------------------------------");
            console.log("The stack is empty there is no last value");
            console.log("--------------------------------");
        }
    }

    printStack() {
        let length = this.stackArray.length;
        if (!length) {
            console.log("--------------------------------");
            console.log("Empty Stack");
            console.log("--------------------------------");
        } else {
            for (let i = length - 1; i >= 0; i--) {
                console.log(this.stackArray[i]);
            }
        }
    }

    lookup(value) {
        let length = this.stackArray.length;
        if (!length || !this.lastValue) {
            console.log("--------------------------------");
            console.log("Empty stack so the value " + value + " cannot be searched ");
            console.log("--------------------------------");
            return false;
        } else {
            for (let i = 0; i < length; i++) {
                if (this.stackArray[i] === value) {
                    console.log("--------------------------------");
                    console.log(value + " Is in the stack at position " + i + " th");
                    console.log("--------------------------------");
                    return true;
                }
            }
            console.log("--------------------------------");
            console.log("Opps the value cannot be found in the stack");
            console.log("--------------------------------");
            return false;
        }
    }
}


let myStack = new stack();
myStack.push("google");
myStack.push("twitter");
myStack.push("Udemy");
myStack.push("HackerRank");
myStack.push("Zero to Mastery");
myStack.push("Medium");
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.pop();
myStack.printStack();
myStack.peek();
myStack.lookup("google");
