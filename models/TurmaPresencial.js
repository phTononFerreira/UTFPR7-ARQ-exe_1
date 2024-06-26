import Turma from './Turma.js';

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        return super.aprovado() && this.frequencia >= 75;
    }

    obterFrequencia() {
        return this.frequencia;
    }
}

export default TurmaPresencial;
