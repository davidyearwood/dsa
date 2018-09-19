const DList = require('../LinkedList/DList');
const SList = require('../LinkedList/SList');
const DListNode = require('../LinkedList/DListNode');
const SListNode = require('../LinkedList/SListNode');
const assert = require('chai').assert;

describe('Singly Linked Lists', () => {
    describe('insertFront()', () => {
        test('should insert an item in the front of the list', () => {
            var list = new SList();
            list.insertFront(13);
            list.insertFront(22);

            assert.strictEqual(list.head.item, 22);
        });

        test('should have the correct head size', () => {
            var list = new SList();
            list.insertFront(22);
            list.insertFront(512);

            assert.strictEqual(list.getSize(), 2);
        });

        test('tail should point at the end of the list', () => {
            var list = new SList();
            list.insertFront(22);
            list.insertFront(512);
            list.insertFront(23);
            list.insertFront(35);
            list.insertFront(53);

            assert.strictEqual(list.tail.item, 22);
        });
    });

    describe('deleteFront()', () => {
        test('should remove the item in the front of the list', () => {
            var list = new SList();
            list.insertFront(22);
            list.insertFront(33);
            list.insertFront(44);

            list.deleteFront();

            assert.strictEqual(list.head.item, 33);
        });

        test('should have the correct head size', () => {
            var list = new SList();
            list.insertFront(22);
            list.insertFront(512);
            list.insertFront(33);

            list.deleteFront();

            assert.strictEqual(list.getSize(), 2);
        });

        test('tail should point to null if the last item in the list is removed', () => {
            var list = new SList();
            list.insertFront(32);
            list.deleteFront();

            assert.strictEqual(list.tail, null);
        });

    });

    describe('deleteEnd()', () => {
        test('should have the correct head size', () => {
            var list = new SList();
            list.insertFront(22);
            list.insertFront(24);
            list.insertFront(35);

            list.deleteEnd();

            assert.strictEqual(list.getSize(), 2);
        });

        test('should remove the last item in the list', () => {
            var list = new SList();
            list.insertFront(7);
            list.insertFront(6);
            list.insertFront(13);
            list.insertFront(9);

            console.log(list.printItems());

            list.deleteEnd();

            assert.strictEqual(list.head.next.next.next, null);
        });

        test('should have a value of null when size is 1', () => {
            var list = new SList();
            list.insertFront(8);

            list.deleteEnd();

            assert.strictEqual(list.head, null);
        });
    });

    describe('insertEnd(item)', () => {
        
    });
});