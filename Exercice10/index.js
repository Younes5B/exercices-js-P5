//votre code ici

export default printNumbers

function printNumbers(n) {
  let x = '';

  for (let i = 1; i <= n; i++) {
    x += i;
    if (i < n) {
      x += ' ';
    }
  }

  return x;
}

console.log(printNumbers(8));

export default printNumbers;