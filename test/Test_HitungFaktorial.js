const assert = require('assert');
const faktorial = require('../question/HitungFaktorial');

describe('HitungFaktorial', function () {
    it('Test case 1: Faktorial dari 5', function () {
        assert.strictEqual(faktorial(5), 120, "Salah pada testcase ke-1");
    });

    it('Test case 2: Faktorial dari 0', function () {
        assert.strictEqual(faktorial(0), 1, "Salah pada testcase ke-2");
    });

    it('Test case 3: Faktorial dari 1', function () {
        assert.strictEqual(faktorial(1), 1, "Salah pada testcase ke-3");
    });

    it('Test case 4: Faktorial dari 3', function () {
        assert.strictEqual(faktorial(3), 6, "Salah pada testcase ke-4");
    });

    it('Test case 5: Faktorial dari 6', function () {
        assert.strictEqual(faktorial(6), 720, "Salah pada testcase ke-5");
    });
});
