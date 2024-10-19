/***
 *Buatlah fungsi yang menghitung jumlah huruf dalam sebuah string.
 *Contoh:
 *Input: Halo Kami BLUG
 *Output: 12
 */

// ! Jangan ubah nama function
function hitungHuruf(string) {
  // Tulis kodemu disini

  const huruf = string.replace(/\s/g, "").length;
  return huruf;
}

module.exports = hitungHuruf;
