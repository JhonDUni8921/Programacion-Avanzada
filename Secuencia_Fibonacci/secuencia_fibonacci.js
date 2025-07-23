function generarFibonacciHasta(n) {
  let secuencia = [0, 1];
  while (true) {
    let siguiente = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
    if (siguiente > n) break;
    secuencia.push(siguiente);
  }
  return secuencia;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número límite para la secuencia de Fibonacci: ', input => {
  const n = parseInt(input);
  const resultado = generarFibonacciHasta(n);
  console.log('Secuencia de Fibonacci hasta', n + ':', resultado);
  readline.close();
});
