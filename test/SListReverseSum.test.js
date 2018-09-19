const SList = require('../LinkedList/SList');
const reverseSum = require('../LinkedList/reverseSum');
const assert = require('chai').assert;


describe('reverseSum()', () => {
    test('should return the sum as a linked list', () => {
        var a = new SList(); 
        var b = new SList(); 

        a.insertFront(5);
        a.insertFront(1);
        a.insertFront(3);
        b.insertFront(2);
        b.insertFront(9);
        b.insertFront(5);

        var sum = reverseSum(a, b); 

        assert.strictEqual(sum.first(), 8);
    });
});