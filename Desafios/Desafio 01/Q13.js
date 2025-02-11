//13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

function calcularAreaCirculo(raio) {
    const pi = Math.PI;
    return pi * raio * raio;
}

let raio = 5;
let area = calcularAreaCirculo(raio);

console.log("A área do círculo com raio " + raio + " é: " + area.toFixed(2));