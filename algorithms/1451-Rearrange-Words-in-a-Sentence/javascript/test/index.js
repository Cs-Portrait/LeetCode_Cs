const func = require('../index');
const assert = require('power-assert');

describe('1451. Rearrange Words in a Sentence', () => {
    it('text = "Leetcode is cool" should be "Is cool leetcode"', () => {
        assert.deepStrictEqual(func('Leetcode is cool'), 'Is cool leetcode');
    });

    it('text = "Keep calm and code on" should be "On and keep calm code"', () => {
        assert.deepStrictEqual(
            func('Keep calm and code on'),
            'On and keep calm code'
        );
    });

    it('text = "To be or not to be" should be "To be or to be not"', () => {
        assert.deepStrictEqual(
            func('To be or not to be'),
            'To be or to be not'
        );
    });
});
