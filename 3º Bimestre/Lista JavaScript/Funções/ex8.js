//Crie uma função recursiva potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente. Nesta função não são permitidas estruturas de repetição.

function potencia(num, expoente) {
    if (expoente > 0) {
        return num * potencia(num, expoente - 1)
    }
    return 1
}

console.log(potencia(2, 3))