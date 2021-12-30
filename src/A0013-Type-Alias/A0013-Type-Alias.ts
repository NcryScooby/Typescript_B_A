type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verder' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Fabrício',
  idade: 21,
  salario: 200_000, // 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
