class CalculadoraMedia {
    static calcularMedia(turma) {
        const notas = turma.map(aluno => aluno.nota);
        const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
        return totalNotas / turma.length;
    }
}