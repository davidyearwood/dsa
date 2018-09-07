const StackX = require('../StackQueue/StackX');
const assert = require('chai').assert;


describe('StackX', () => {
    test('push() should add an item to the top of the stack', () => {
        var stack = new StackX(5);

        assert.strictEqual(stack.push(6), 1);
    });

    test('peek shold return the item on top of the stack', () => {
        var stack = new StackX(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        assert.strictEqual(stack.peek(), 5);
    });

    test('pop should return the top item on the stack', () => {
        var stack = new StackX(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        assert.strictEqual(stack.pop(), 5);
    });

    test('pop should decrement the size of the stack by 1', () => {
        var stack = new StackX(5);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        stack.pop();
        stack.pop(); 

        assert.strictEqual(stack._dequeCount, 1);
    });
});