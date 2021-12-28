function serRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Fabrício',
  sobrenome: 'Caldana',

  exibirNome(): void{
    console.log(this.nome + ' ' + this.sobrenome);
  }
};


serRetorno('Fabrício', 'Caldana');
pessoa.exibirNome();

export { pessoa };
