function fibonacciEnIndice(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('¿Qué posición de Fibonacci deseas ver? ', input => {
  const n = parseInt(input);
  const resultado = fibonacciEnIndice(n);
  console.log('Valor en la posición', n + ':', resultado);
  readline.close();
});
