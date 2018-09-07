const Deque = require('./Deque');

// Write a program that implements a stack class that is based on the Deque class
// in Programming Project 4.2. This stack class should have the same methods
// and capabilities as the StackX class in the stack.java program (Listing 4.1).

class StackX extends Deque {
    constructor(s) {
        super(s);
    }

    pop() {
        return super.dequeueBack(); 
    }

    push(n) {
        return super.enequeBack(n); 
    }

    peek() {
        return this._deque[this._tail];
    }

}

module.exports = StackX; 