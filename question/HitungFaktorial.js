/****
* Buatlah program yang meminta input sebuah bilangan dari pengguna, 
  kemudian menghitung dan menampilkan faktorial dari bilangan
*Contoh:
*Input: 5
*Output: 125
*/

// ! Jangan ubah nama function
function faktorial(n) {
  // Tulis kodemu disini

  if (n === 0 || n === 1) {
    return 1;
  }

  let hasil = 1;

  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }

  return hasil;
}

module.exports = faktorial;
