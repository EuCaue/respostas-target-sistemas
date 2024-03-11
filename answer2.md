2.  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

## Rodando o código

1.  Instalar as dependências

<small>é preciso ter [NodeJS](https://nodejs.org/en/download) instalado no seu computador </small>

```bash
npm install
```

2. Rodar o código usando ts-node

```bash
npx ts-node isFibSequence.ts
```

## Código em TypeScript

```typescript
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
```
