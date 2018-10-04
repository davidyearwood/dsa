const triangleNum = require('../triangularNumForNth.js');
const assert = require('chai').assert;


test('should return a triangular number when given a nth position', () => {
    assert.strictEqual(triangleNum(5), 15);
    assert.strictEqual(triangleNum(6), 21);
    assert.strictEqual(triangleNum(1), 1);
});