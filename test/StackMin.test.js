const Stack = require('../StackQueue/StackMin');
const assert = require('chai').assert;


describe('Stack', () => {
    test('push() should add an item to the top of the stack', () => {
        var stack = new Stack(5);

        assert.strictEqual(stack.push(6), 1);
    });

    test('peek shold return the item on top of the stack', () => {
        var stack = new Stack(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        assert.strictEqual(stack.peek(), 5);
    });

    test('pop should return the top item on the stack', () => {
        var stack = new Stack(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        assert.strictEqual(stack.pop(), 5);
    });

    test('pop should decrement the size of the stack by 1', () => {
        var stack = new Stack(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        stack.pop();
        stack.pop(); 

        assert.strictEqual(stack.length(), 1);
    });

    test('should return min', () => {
        var stack = new Stack(22);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(33);
        stack.push(1);
        stack.push(7);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.push(1);
        stack.push(2);
        stack.push(9);
        stack.push(9);
        stack.pop();
        stack.pop(); 
        
        assert.strictEqual(stack.min(), 1);
    })
});