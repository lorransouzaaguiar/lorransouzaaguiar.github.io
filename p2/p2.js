function alugar() {
    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const cidRetirada = document.getElementById('cidRetirada').value
    const cidEntrega = document.getElementById('cidEntrega').value
    const dataRetirada = document.getElementById('dataRetirada').value
    const dataEntrega = document.getElementById('dataEntrega').value
    const tipo_carro = document.getElementById('tipo_carro').value

    const aluguel = new Aluguel(nome, telefone, cidRetirada, cidEntrega, dataRetirada, dataEntrega, tipo_carro.toUpperCase());
    aluguel.calc();

    alert('Valor do aluguel é ' + aluguel.getValorTotal())
}

class Aluguel {
    valor = 0;
    total = 0;

    constructor(
        nome,
        telefone,
        cidRetirada,
        cidEntrega,
        dataRetirada,
        dataEntrega,
        tipo_carro) {

        this.nome = nome;
        this.telefone = telefone;
        this.cidRetirada = cidRetirada;
        this.cidEntrega = cidEntrega;
        this.dataRetirada = dataRetirada;
        this.dataEntrega = dataEntrega;
        this.tipo_carro = tipo_carro;
    }

    calc() {
        switch (this.tipo_carro) {
            case 'BASICO': {
                this.valor = 119
                if (this.cidEntrega != this.cidRetirada)
                    this.total = 300 + this.valor
                else this.total = this.valor;
                break
            }
            case 'AR': {
                this.valor = 199
                if (this.cidEntrega != this.cidRetirada)
                    this.total = 300 + this.valor
                else this.total = this.valor;

                break
            }
            case 'EXECUTIVO': {
                this.valor = 299
                if (this.cidEntrega != this.cidRetirada)
                    this.total = 300 + this.valor
                else this.total = this.valor;

            }
        }
    }

    getValorTotal (){
        return this.total;
    }
}

