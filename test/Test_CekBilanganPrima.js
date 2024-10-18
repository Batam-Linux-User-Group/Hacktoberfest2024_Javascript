const assert = require('assert');
const cekBilanganPrima = require('../question/CekBilanganPrima');

// ! Cara run javascript test: npx mocha test/Test_CekBilanganPrima.js

describe('CekBilanganPrima', function () {
    it('Test case 1: Bilangan prima', function () {
        assert.strictEqual(cekBilanganPrima(7), true);
    });

    it('Test case 2: Bilangan bukan prima', function () {
        assert.strictEqual(cekBilanganPrima(10), false);
    });

    it('Test case 3: Bilangan prima lebih besar', function () {
        assert.strictEqual(cekBilanganPrima(13), true);
    });
    it('Test case 4: Input adalah 0', function () {
        assert.strictEqual(cekBilanganPrima(0), false); 
    });

    it('Test case 5: Input adalah bilangan negatif', function () {
        assert.strictEqual(cekBilanganPrima(-5), false); 
    });
});
