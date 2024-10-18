// Test_DeretFibonacci.js
const assert = require('assert');
const deretFibonacci = require('../question/DeretFibonacci'); // Perbaiki path di sini

// ! Cara run javascript test: npx mocha test/Test_DeretFibonacci.js

describe('DeretFibonacci', function () {
    it('Test case 1: Deret Fibonacci untuk n=5', function () {
        assert.deepStrictEqual(deretFibonacci(5), [0, 1, 1, 2, 3]);
    });

    it('Test case 2: Deret Fibonacci untuk n=10', function () {
        assert.deepStrictEqual(deretFibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('Test case 3: Deret Fibonacci untuk n=0', function () {
        assert.deepStrictEqual(deretFibonacci(0), []);
    });

    it('Test case 4: Deret Fibonacci untuk n=-5', function () {
        assert.deepStrictEqual(deretFibonacci(-5), []);
    });
});

