//14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

// Declaração de duas variáveis para armazenar os números que serão somados
let numero1 = 10; // O primeiro número é definido como 10
let numero2 = 5;  // O segundo número é definido como 5

// Função que recebe dois números como parâmetros e retorna a soma deles
function somarNumeros(num1, num2) {
    return num1 + num2; // A função retorna a soma dos dois números recebidos
}

// Chamada da função 'somarNumeros' com os valores das variáveis 'numero1' e 'numero2'
let resultado = somarNumeros(numero1, numero2);

// Exibindo o resultado no console usando concatenação
console.log("A soma de " + numero1 + " e " + numero2 + " é: " + resultado);