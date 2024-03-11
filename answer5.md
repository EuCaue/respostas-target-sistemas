## 5. Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

## Rodando o código

1.  Instalar as dependências

<small>é preciso ter [NodeJS](https://nodejs.org/en/download) instalado no seu computador </small>

```bash
npm install
```

2. Rodar o código usando ts-node

```bash
npx ts-node reverseString.ts
```

## Código em TypeScript

```typescript
import * as readline from "readline";

function reverseString(str: string): string {
  let reversedString: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString.trim();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma string para inverter: ", (str) => {
  console.log("string invertida: ", reverseString(str));
  rl.close();
});
```
