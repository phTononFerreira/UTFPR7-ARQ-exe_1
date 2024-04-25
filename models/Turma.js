class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 6;
    }

    obterFrequencia() {
        return null;
    }
}

export default Turma;