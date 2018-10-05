const rotate = require('../rotate.js');
const assert = require('chai').assert;


test('should return a triangular number when given a nth position', () => {
    assert.strictEqual(rotate("word"), "ordw");
    assert.strictEqual(rotate("rodeo"), "odeor");
    assert.strictEqual(rotate("ordw"), "rdwo");
});