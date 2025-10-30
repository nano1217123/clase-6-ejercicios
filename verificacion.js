// verificar par o impar
// 5


const prompt = require('prompt-sync')();


let numero = Number(prompt("Ingrese un número: "));


if (numero % 2 === 0) {
  console.log(`El número ${numero} es PAR ✅`);
} else {
  console.log(`El número ${numero} es IMPAR ❌`);
}
