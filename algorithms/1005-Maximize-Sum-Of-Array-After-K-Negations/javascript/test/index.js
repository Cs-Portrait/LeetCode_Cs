const func = require('../index');
const { deepStrictEqual } = require('power-assert');

describe('1005. Maximize Sum Of Array After K Negations', function () {
    it('A = [4,2,3], K = 1 should be 5', function () {
        deepStrictEqual(func([4, 2, 3], 1), 5);
    });

    it('A = [3,-1,0,2], K = 3 should be 6', function () {
        deepStrictEqual(func([3, -1, 0, 2], 3), 6);
    });

    it('A = [2,-3,-1,5,-4], K = 2 should be 13', function () {
        deepStrictEqual(func([2, -3, -1, 5, -4], 2), 13);
    });

    it('A = [5,6,9,-3,3], K = 2 should be 20', function () {
        deepStrictEqual(func([5, 6, 9, -3, 3], 2), 20);
    });

    it('A = [8,-7,-3,-9,1,9,-6,-9,3], K = 8 should be 53', function () {
        deepStrictEqual(func([8, -7, -3, -9, 1, 9, -6, -9, 3], 8), 53);
    });
});
