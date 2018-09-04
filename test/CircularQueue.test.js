const CircularQueue = require('../StackQueue/CircularQueue');
const assert = require('chai').assert; 

describe('CircularQueue', () => {
    var queue; 

    function createMockQueue() {
        var queue = new CircularQueue(5); 
        queue.insert(10);
        queue.insert(20);
        queue.insert(30);
        queue.insert(40);
        return queue;     
    }

    beforeEach(() => {
        queue = createMockQueue(); 
    });

    test('should return the correct size value', () => {
        assert.strictEqual(queue.getSize(), 4);
    });

    test('wrap around when removing three items and adding four new items', () => {
        queue.remove();
        queue.remove();
        queue.remove();

        queue.insert(50);
        queue.insert(60);
        queue.insert(70);
        queue.insert(80);

        assert.strictEqual(queue._tail - 1, 3);
    });

    
});