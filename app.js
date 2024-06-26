class Stack {
    constructor() {
        this.items = [];
    }
    push(number) {
        this.items.push(number);
    }
    pop() {
        if (this.items.length === 0) 
            return "Oops, the stack is empty!";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

//Q1 : Given an array arr[] of size N, you have to reverse the array using Stack
let myStack = new Stack();
let arrLength = 5;//n
let q1Array = new Array(arrLength);
q1Array = [1, 2, 3, 4, 5];
let arrStack = new Stack();
for (let i = 0; i < arrLength; i++) {
    arrStack.push(q1Array[i]);
}
for (let i = 0; i < arrLength; i++) {
    console.log(arrStack.pop(q1Array[i]));
}


