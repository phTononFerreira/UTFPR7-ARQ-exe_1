# Refatorações para a Lista 2 (SOLID):

1. Princípio da Responsabilidade Única:
    O Princípio da Responsabilidade Única diz que uma classe deve ter apenas uma razão para mudar. Então separei a responsabilidade de imprimir se um aluno está aprovado ou não em uma turma em uma classe separada.

2. Princípio Aberto/Fechado:
    Este princípio diz que as entidades de software devem ser abertas para extensão, mas fechadas para modificação. Adicionei a capacidade de calcular a média da turma sem modificar a classe Turma.

3. Princípio da Substituição de Liskov:
    O LSP diz que objetos de um programa devem ser substituíveis por instâncias de seus subtipos sem afetar a funcionalidade do programa. Fiz com que a classe TurmaPresencial seja verdadeiramente um subtipo de Turma.
