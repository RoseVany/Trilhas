//10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.

let numero;

do {
    numero = parseInt(prompt("Digite um número:"));

    if (numero !== 5) {
        console.log("Você digitou:", numero);
        console.log("Tente novamente!");
    }
} while (numero !== 5);

console.log("Você digitou o número 5! Fim do programa.");