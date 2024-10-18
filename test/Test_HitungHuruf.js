const assert = require('assert');
const hitungHuruf = require('../question/HitungHuruf');

describe('HitungHuruf', function () {
    it('Test case 1: Menghitung huruf dalam string dengan spasi', function () {
        assert.strictEqual(hitungHuruf('halo kami BLUG'), 12, "Salah pada testcase ke-1");
    });

    it('Test case 2: Menghitung huruf dalam string tanpa spasi', function () {
        assert.strictEqual(hitungHuruf('programming'), 11, "Salah pada testcase ke-2");
    });

    it('Test case 3: Menghitung huruf dalam string kosong', function () {
        assert.strictEqual(hitungHuruf(''), 0, "Salah pada testcase ke-3");
    });

    it('Test case 4: Menghitung huruf dalam string yang hanya terdiri dari spasi', function () {
        assert.strictEqual(hitungHuruf('   '), 0, "Salah pada testcase ke-4");
    });

    it('Test case 5: Menghitung huruf dalam string campuran huruf dan angka', function () {
        assert.strictEqual(hitungHuruf('BLUG123'), 7, "Salah pada testcase ke-5");
    });
});
