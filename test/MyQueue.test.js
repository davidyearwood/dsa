const Queue = require('../StackQueue/MyQueue');
const assert = require('chai').assert; 

function createMockQueue() {
    var queue = new Queue(); 
    queue.enqueue(59);
    queue.enqueue(26);
    queue.enqueue(94);
    queue.enqueue(12);
    queue.enqueue(80);

    return queue;     
}

describe('Queue', () => {
    var mockQueue;

    beforeEach(() => {
        mockQueue = createMockQueue(); 
    }); 

    test('should return the correct size value', () => {
        assert.strictEqual(mockQueue.getSize(), 5); 
    });

    test('should return the first item in the queue when using remove()', () => {
        assert.strictEqual(mockQueue.deque(), 59); 
    });

    test('should return the new size of the queue when using insert()', () => {
    assert.strictEqual(mockQueue.enqueue(6), 6); 
    });

    test('should return the first item in the queue when using peek()', () => {
        assert.strictEqual(mockQueue.peek(), 59);
    });

    test('should have the same size after peek() is called', () => {
        mockQueue.peek(); 
        assert.strictEqual(mockQueue.getSize(), 5);
    })
});