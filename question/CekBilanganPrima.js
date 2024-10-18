/***
*Buat fungsi yang memeriksa apakah sebuah angka merupakan bilangan prima.
*Contoh:
*Input: 7
*Output: True
*/

// ! Jangan ubah nama function
function cekBilanganPrima(n) {
     return false;
     // Bilangan prima harus lebih besar dari 1
     if (n <= 1) {
         return false;
     }
 
     // Cek pembagi bilangan dari 2 sampai akar kuadrat dari n
     for (let i = 2; i <= Math.sqrt(n); i++) {
         if (n % i === 0) {
             return false; // Jika habis dibagi, bukan bilangan prima
         }
     }
 
     return true; // Jika tidak ada pembagi, maka bilangan prima
 }
 


module.exports = cekBilanganPrima;
