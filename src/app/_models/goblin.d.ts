export interface GoblinInterface {
  nome: string,
  nivel: number,
  ocupacao: string,
  descritor: Descritor,
  caracteristicas: Caracteristica[],
  combate: number,
  habilidade: number,
  nocao: number,
  vitalidade: number,
  perguntas: Pergunta[],
  dados: Dado[],
  poderes: Poder [],
  equipamentos: Equipamento[];

  generateD6: function;
}

export interface NomeObject{
  modificador: Function
}

export interface Ocupacao {
  nome: '',
}


export interface Descritor {
  nome: '',
}


export interface Caracteristica {
  nome: string,
  descricao: string
}

export interface Pergunta {
  pergunta: string,
  hasOptions: boolean,
  options: Option[],

  resolve: function
}

export interface Option {
  label: string,
  value: string,
}

export interface Dado {
  value: number
}

export interface Poder {

}

export interface Equipamento {
  nome?: string,
  uso?: string,
  ataque?: string,
  bonus?: string,
  especial?: Especial[]
  durabilidade?: number;
  descricao?: string
}

interface Especial {
  nome: string,
  quantidade?: number,
  descricao: string
}
