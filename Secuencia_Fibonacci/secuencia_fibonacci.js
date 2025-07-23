function generarSecuenciaFibonacciHastaIndice(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  
  let secuencia = [0, 1];
  for (let i = 2; i <= n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('¿Qué posición de Fibonacci deseas ver? ', input => {
  const n = parseInt(input);
  const secuencia = generarSecuenciaFibonacciHastaIndice(n);
  const resultado = secuencia[n];
  console.log('Secuencia completa hasta la posición', n + ':', secuencia);
  console.log('Valor en la posición', n + ':', resultado);
  readline.close();
});
