var assert = require('chai').assert;
const reverseWord = require('../reverseWord');


test('should return "divad" instead of "david"', () => {
    var name = "david"; 
    var reverseName = reverseWord(name); 

    assert.strictEqual(reverseName, "divad");
})