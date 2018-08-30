const Stack = require('../stack');
const assert = require('chai').assert; 
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