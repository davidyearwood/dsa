const Deque = require('../StackQueue/Deque');
const assert = require('chai').assert;


describe('Deque', () => {
    var deque;

    test('_head should point to 0 if no items were added to deque', () => {
        deque = new Deque(4);

        assert.strictEqual(deque._head, 0);
    });

    test('enequeFront() should add an item to the front of the deque', () => {
       deque = new Deque(10);
       
       deque.enequeFront(22);
       deque.enequeFront(12);

       assert.strictEqual(deque._head, 9);
    });

    test('enequeFront() should return the appropriate number of items added to the deque', () => {
        deque = new Deque(10);
        
        deque.enequeFront(22);
        deque.enequeFront(12);
        deque.enequeFront(44);
        deque.enequeFront(22);

        assert.strictEqual(deque._dequeCount, 4);
    });

    test('dequeueFront() should return the front item', () => {
        deque = new Deque(10);
        
        deque.enequeFront(22);
        deque.enequeFront(12);
        deque.enequeFront(44);
        deque.enequeFront(22);

        assert.strictEqual(deque.dequeueFront(), 22);
    });

    test('dequeueFront() should return the front item', () => {
        deque = new Deque(4);
        
        deque.enequeFront(22);
        deque.enequeFront(12);
        deque.enequeFront(44);
        deque.enequeFront(22);

        assert.strictEqual(deque.dequeueFront(), 22);
    });

    test('after dequeueFront() is called head should point to the next item in line to be dequeued', () => {
        deque = new Deque(4);
        
        deque.enequeFront(22);
        deque.enequeFront(12);
        deque.enequeFront(44);
        deque.enequeFront(22);

        assert.strictEqual(deque._head, 1);
    });

    test('enequeBack() should return the appropriate number of items in the deque', () => {
        deque = new Deque(4);
        
        deque.enequeBack(22);
        deque.enequeBack(12);
        deque.enequeBack(44);

        assert.strictEqual(deque._dequeCount, 3);
    });

    test('tail should point at the appropraite index', () => {
        deque = new Deque(4);
        
        deque.enequeFront(92);
        deque.enequeBack(91);
        deque.enequeBack(5);

        assert.strictEqual(deque._tail, 2);
    });

    test('head should point at the appropraite index', () => {
        deque = new Deque(4);
        
        deque.enequeFront(92);
        deque.enequeBack(91);
        deque.enequeBack(5);
        deque.enequeFront(7);

        assert.strictEqual(deque._head, 3);
    });

    test('dequeueBack should return correct value', () => {
        deque = new Deque(4);
        
        deque.enequeFront(92);
        deque.enequeBack(91);
        deque.enequeBack(5);
        deque.enequeFront(34);
        deque.dequeueBack();

        assert.strictEqual(deque.dequeueBack(), 91);
    });
})