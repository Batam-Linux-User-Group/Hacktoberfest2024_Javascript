/***
 *Buat fungsi yang memeriksa apakah sebuah angka merupakan bilangan prima.
 *Contoh:
 *Input: 7
 *Output: True
 */

// ! Jangan ubah nama function
function cekBilanganPrima(n) {
  // Tulis kodemu disini

  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = cekBilanganPrima;
