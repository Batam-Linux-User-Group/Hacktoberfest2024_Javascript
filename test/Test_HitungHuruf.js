const assert = require('assert');
const hitungHuruf = require('../question/HitungHuruf');

// ! Cara run javascript test: npx mocha test/Test_HitungHuruf.js

describe('HitungHuruf', function () {
    it('Test case 1: Menghitung huruf dalam string dengan spasi', function () {
        assert.strictEqual(hitungHuruf('halo kami BLUG'), 12);
    });

    it('Test case 2: Menghitung huruf dalam string tanpa spasi', function () {
        assert.strictEqual(hitungHuruf('programming'), 11);
    });

    it('Test case 3: Menghitung huruf dalam string kosong', function () {
        assert.strictEqual(hitungHuruf(''), 0);
    });
});
