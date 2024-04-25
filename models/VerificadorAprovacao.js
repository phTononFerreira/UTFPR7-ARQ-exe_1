class VerificadorAprovacao {
    static verificarAprovacao(aluno, turma) {
        return `${aluno.nome} está aprovado na turma ${aluno.turma}? ${turma.aprovado() ? 'Sim' : 'Não'}`;
    }
}

export default VerificadorAprovacao