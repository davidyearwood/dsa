const CircularQueue = require('../StackQueue/CircularQueue');
const assert = require('chai').assert;

function createMockQueue() {
    var queue = new CircularQueue(5);
    queue.insert(10);
    queue.insert(20);
    queue.insert(30);
    queue.insert(40);
    return queue;
}

describe('CircularQueue', () => {
    var queue;

    beforeEach(() => {
        queue = createMockQueue();
    });

    test('should return the correct size value', () => {
        assert.strictEqual(queue.getSize(), 4);
    });

    test('should wrap around when removing three items and adding four new items', () => {
        queue.remove();
        queue.remove();
        queue.remove();

        queue.insert(50);
        queue.insert(60);
        queue.insert(70);
        queue.insert(80);

        assert.strictEqual(queue._tail, 2);
    });

    test('head and tail should point to the correct index after operations', () => {

        queue.remove();
        queue.remove();
        queue.remove();

        queue.insert(50);
        queue.insert(60);
        queue.insert(70);
        queue.insert(80);

        assert.strictEqual(queue._tail, 2);

    });

    test('head should point to the correct index', () => {
        queue.remove();
        queue.remove();
        queue.remove();

        queue.insert(50);
        queue.insert(60);
        queue.insert(70);
        queue.insert(80);

        queue.remove();
        queue.remove();

        assert.strictEqual(queue._head, 0);
    });

});

describe('Question 4.1 - displayItems()', () => {
    var queue;

    beforeEach(() => {
        queue = createMockQueue();
    });

    test('should show the queue contents from the first item inserted to the list to the last', () => {
        var expected = '10, 20, 30, 40';

        assert.strictEqual(queue.displayItems(), expected);
    });

    test('should show the queue contents from the first item inserted to the list to the last', () => {
        var expected = '40, 50, 60, 70, 80';
        queue.remove();
        queue.remove();
        queue.remove();

        queue.insert(50);
        queue.insert(60);
        queue.insert(70);
        queue.insert(80);

        assert.strictEqual(queue.displayItems(), expected);
    });
})