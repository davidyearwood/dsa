const Queue = require('../Queue');
const assert = require('chai').assert; 


function createMockQueue() {
    var queue = new Queue(); 
    queue.insert(59);
    queue.insert(26);
    queue.insert(94);
    queue.insert(12);
    queue.insert(80);

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
        assert.strictEqual(mockQueue.remove(), 59); 
    });

    test('should return the new size of the queue when using insert()', () => {
    assert.strictEqual(mockQueue.insert(6), 6); 
    });

    test('should return the first item in the queue when using peek()', () => {
        assert.strictEqual(mockQueue.peek(), 59);
    });

    test('should have the same size after peek() is called', () => {
        mockQueue.peek(); 
        assert.strictEqual(mockQueue.getSize(), 5);
    })
    // test('should return error when using remove() on an empty queue', () => {
    //     var q = new Queue(); 
    //     assert.throws(q.remove(), Error); 
    // });
});