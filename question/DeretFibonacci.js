/****
* Buatlah program yang menghasilkan deret Fibonacci hingga n bilangan, di mana n ditentukan dalam kode. 
  Program harus menghitung deret Fibonacci dan menampilkannya dalam bentuk list.
*Contoh:
*Input: 10
*Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

// ! Jangan ubah nama function
function deretFibonacci(n) {
  // Tulis kodemu disini

  let fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}

module.exports = deretFibonacci;
