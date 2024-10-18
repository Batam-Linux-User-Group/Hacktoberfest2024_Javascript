const assert = require('assert');
const deretFibonacci = require('../question/DeretFibonacci'); 

describe('DeretFibonacci', function () {
    it('Test case 1: Deret Fibonacci untuk n=5', function () {
        assert.deepStrictEqual(deretFibonacci(5), [0, 1, 1, 2, 3], "Salah pada testcase ke-1");
    });

    it('Test case 2: Deret Fibonacci untuk n=10', function () {
        assert.deepStrictEqual(deretFibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], "Salah pada testcase ke-2");
    });

    it('Test case 3: Deret Fibonacci untuk n=0', function () {
        assert.deepStrictEqual(deretFibonacci(0), [], "Salah pada testcase ke-3");
    });

    it('Test case 4: Deret Fibonacci untuk n=-5', function () {
        assert.deepStrictEqual(deretFibonacci(-5), [], "Salah pada testcase ke-4");
    });
});
