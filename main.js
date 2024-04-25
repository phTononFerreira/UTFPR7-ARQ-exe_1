import Aluno from './models/Aluno.js';
import Turma from './models/Turma.js';
import TurmaPresencial from './models/TurmaPresencial.js';

const aluno1 = new Aluno('João', 'joao123', '123456', 'A');
const aluno2 = new Aluno('Maria', 'maria456', '654321', 'B');
const aluno3 = new Aluno('Pedro', 'pedro789', '987654', 'A');

const turmaA = new Turma('A', 7);
const turmaB = new Turma('B', 5);

const turmaPresencialA = new TurmaPresencial('A', 8, 80);
const turmaPresencialB = new TurmaPresencial('B', 6, 70);

console.log(`${aluno1.nome} está aprovado na turma ${aluno1.turma}? ${turmaA.aprovado() ? 'Sim' : 'Não'}`);
console.log(`${aluno2.nome} está aprovado na turma ${aluno2.turma}? ${turmaB.aprovado() ? 'Sim' : 'Não'}`);
console.log(`${aluno3.nome} está aprovado na turma ${aluno3.turma}? ${turmaA.aprovado() ? 'Sim' : 'Não'}`);

console.log(`${aluno1.nome} está aprovado na turma presencial ${aluno1.turma}? ${turmaPresencialA.aprovado() ? 'Sim' : 'Não'}`);
console.log(`${aluno2.nome} está aprovado na turma presencial ${aluno2.turma}? ${turmaPresencialB.aprovado() ? 'Sim' : 'Não'}`);
console.log(`${aluno3.nome} está aprovado na turma presencial ${aluno3.turma}? ${turmaPresencialA.aprovado() ? 'Sim' : 'Não'}`);
