const func = require('../index');
const { deepStrictEqual } = require('power-assert');

describe('673. Number of Longest Increasing Subsequence', () => {
    it('[1,3,5,4,7] should be 2', () => {
        deepStrictEqual(func([1, 3, 5, 4, 7]), 2);
    });

    it('[2,2,2,2,2] should be 5', () => {
        deepStrictEqual(func([2, 2, 2, 2, 2]), 5);
    });

    it('[2,3,5,2,1,3,2,2,3,1,2,3] should be 7', () => {
        deepStrictEqual(func([2, 3, 5, 2, 1, 3, 2, 2, 3, 1, 2, 3]), 7);
    });
});
