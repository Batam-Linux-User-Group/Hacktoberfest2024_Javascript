const assert = require('assert');
const faktorial = require('../question/HitungFaktorial');

// ! Cara run javascript test: npx mocha test/Test_HitungFaktorial.js

describe('HitungFaktorial', function () {
    it('Test case 1: Faktorial dari 5', function () {
        assert.strictEqual(faktorial(5), 120);
    });

    it('Test case 2: Faktorial dari 0', function () {
        assert.strictEqual(faktorial(0), 1,);
    });

    it('Test case 3: Faktorial dari 1', function () {
        assert.strictEqual(faktorial(1), 1,);
    });

});
