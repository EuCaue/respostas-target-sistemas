import * as readline from "readline";

function fibonacciSequence(n: number): number[] {
  const sequence: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

function isInFibonacciSequence(num: number): boolean {
  let i = 1;
  let fib = 1;
  while (fib < num) {
    fib = fibonacciSequence(i).pop()!;
    i++;
  }
  return fib === num;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (numStr) => {
    const num = parseInt(numStr);

    if (isNaN(num)) {
      console.log("Por favor, insira um número válido.");
    } else {
      const isInSequence = isInFibonacciSequence(num);
      if (isInSequence) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
      } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
      }
    }

    rl.close();
  },
);

