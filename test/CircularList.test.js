const SListNode = require('../LinkedList/SListNode');
const CircularList = require('../LinkedList/CircularList');
const assert = require('chai').assert;

describe('Circular List', () => {
    describe('addFirst()', () => {
        test('should have the right size', () => {
            var list = new CircularList();
            assert.strictEqual(list.addFirst(6), 1);
        });

        test('should add item to the front of the list', () => {
            var list = new CircularList();
            list.addFirst(6);
            assert.strictEqual(list.getFirst(), 6);
        });
    });

    describe('addLast()', () => {
        test('should have the right size', () => {
            var list = new CircularList();
            list.addFirst(7);
            list.addFirst(12);
            list.addFirst(14);
            assert.strictEqual(list.addLast(33), 4);
        });
        test('tail should point to the new tail item', () => {
            var list = new CircularList();
            list.addFirst(2);
            list.addFirst(5);
            list.addLast(12);
            list.addLast(22);

            assert.strictEqual(list.getLast(), 22);

        });

        test('should be able to add an item to an empty list', () => {
            var list = new CircularList();
            list.addLast(12);
            list.addLast(22);
            list.addLast(25);
            list.addLast(54);
            list.addLast(134);

            assert.strictEqual(list.getLast(), 134);
        })
    });

    describe('removeFirst()', () => {
        test('should return the item that was removed', () => {
            var list = new CircularList(); 
            list.addFirst(12);
            list.addFirst(22);
            list.addFirst(16);
            assert.strictEqual(list.removeFirst(), 16);
        });
        test('the size should be right', () => {
            var list = new CircularList();
            list.addFirst(12);
            list.addFirst(22);
            list.addFirst(16);
            list.removeFirst(); 

            assert.strictEqual(list.getSize(), 2);
        });

        test('head should point to the correct element', () => {
            var list = new CircularList(); 
            list.addFirst(12);
            list.addFirst(22);
            list.addFirst(16);
            list.removeFirst();

            assert.strictEqual(list.getFirst(), 22);
        });
    });
});