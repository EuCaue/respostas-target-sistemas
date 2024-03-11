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

rl.question("Digite uma string para inverter: ", (str: string) => {
  console.log("string invertida: ", reverseString(str));
  rl.close();
});
