import Aluno from './models/Aluno.js';
import Turma from './models/Turma.js';
import TurmaPresencial from './models/TurmaPresencial.js';

const turma1 = new Turma("T1", 8);
const turmaPresencial1 = new TurmaPresencial("TP1", 7, 80);
const aluno1 = new Aluno("João", "joao123", "123456", turma1);
const aluno2 = new Aluno("Maria", "maria456", "789012", turmaPresencial1);

console.log(aluno1.nome, "está aprovado na turma:", aluno1.turma.aprovado());
console.log(aluno2.nome, "está aprovado na turma presencial:", aluno2.turma.aprovado());
