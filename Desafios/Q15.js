//15. 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
//x = 10
//y = 20
//z = x+y
//console.log(z)

function somarDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function executarPrograma() {
    const primeiroNumero = 10;
    const segundoNumero = 20;

    const resultadoSoma = somarDoisNumeros(primeiroNumero, segundoNumero);

    console.log("O resultado da soma é:", resultadoSoma);
}

executarPrograma();