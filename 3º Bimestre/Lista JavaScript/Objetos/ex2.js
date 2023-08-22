//Construa uma classe Retangulo, contendo as propriedades altura e largura, e um método area() ou calculaArea(). A área de um retângulo é dada pela seguinte fórmula: A = b * h, onde A representa área, b representa base e h representa altura.

class Retangulo {
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }

    calcularArea() {
        return this.altura * this.largura
    }
}

let retangulo = new Retangulo(2, 5);

console.log(retangulo.calcularArea())