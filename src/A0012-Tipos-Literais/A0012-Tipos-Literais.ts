let x = 10;
x = 0b1010;

const y = 10;
const a = 100;

const pessoa = {
  nome: 'Fabrício' as const,
  sobrenome: 'Caldana',
};

// pessoa.nome = 'Fab';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string{
  return cor;
}

console.log(escolhaCor);

console.log(pessoa.nome);

export default 1;
