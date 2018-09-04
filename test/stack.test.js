const Stack = require('../stack');
const assert = require('chai').assert; 
const isDelimiterBalance = require('../isDelimiterBalance');
var s; 

// THIS IS MESSING WITH THE PRIVATE VARIABLES
// DO NOT DO THIS IN PRACTICE
function initStack() {
    var s = new Stack(10);
    s._stack = [20, 40, 60, 80];
    s._top = 3;

    return s; 
}

describe('The Stack Class', () => {
    beforeEach(() => {
        s = initStack(); 
    });

    test('push item to stack', () => {
        s.push(12); 
        assert.strictEqual(s._top, 4);
        assert.strictEqual(s._stack[s._top], 12); 
    });

});

describe('isDelimiterBalance()', () => {
    test('returns false when given an imbalance delimiter set', () => {
        var imbalance = "a{b(c]d}e";
        assert.strictEqual(isDelimiterBalance(imbalance), false);
    });

    test('returns true when given a balance delimiter set', () => {
        var balance = "a{b[c]d}e";
        assert.strictEqual(isDelimiterBalance(balance), true); 
    })
});