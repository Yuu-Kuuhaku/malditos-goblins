import { Caracteristica, Dado, Descritor, Equipamento, GoblinInterface, NomeObject, Ocupacao, Pergunta, Poder } from "../_models/goblin";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';

export class Goblin implements GoblinInterface {

  private _nome!: string;
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  private _nivel: number = 1;
  public get nivel(): number {
    return this._nivel;
  }
  public set nivel(value: number) {

    if (value == 4) {
      this.isDead = true;
      return;
    } else if (value > this.nivel) {
      let poder: Poder = ocupacoes.find(item => item.nome == this.ocupacao)?.poderes.find(item => item.nivel == value) as Poder;
      if (poder) {
        this.poderes.push(
          poder
        )
      }
    } else if (value < this.nivel) {
      let poderIndex = this.poderes.findIndex(item => item.nivel == this.nivel)

      if (poderIndex > -1) {
        this.poderes.splice(poderIndex, 1)
      }
    }



    this._nivel = value;
  }
  private _ocupacao!: string;
  public get ocupacao(): string {
    return this._ocupacao;
  }
  public set ocupacao(value: string) {
    this._ocupacao = value;
  }
  private _descritor!: Descritor;
  public get descritor(): Descritor {
    return this._descritor;
  }
  public set descritor(value: Descritor) {
    this._descritor = value;
  }
  private _caracteristicas: Caracteristica[] = [];
  public get caracteristicas(): Caracteristica[] {
    return this._caracteristicas;
  }
  public set caracteristicas(value: Caracteristica[]) {
    this._caracteristicas = value;
  }
  private _combate: number = 2;
  public get combate(): number {
    return this._combate;
  }
  public set combate(value: number) {
    this._combate = value;
  }
  private _habilidade: number = 2;
  public get habilidade(): number {
    return this._habilidade;
  }
  public set habilidade(value: number) {
    this._habilidade = value;
  }
  private _nocao: number = 2;
  public get nocao(): number {
    return this._nocao;
  }
  public set nocao(value: number) {
    this._nocao = value;
  }
  private _vitalidade: number = 2;
  public get vitalidade(): number {
    return this._vitalidade;
  }
  public set vitalidade(value: number) {
    this._vitalidade = value;
  }
  private _perguntas: Pergunta[] = [];
  public get perguntas(): Pergunta[] {
    return this._perguntas;
  }
  public set perguntas(value: Pergunta[]) {
    this._perguntas = value;
  }
  private _dados: Dado[] = [];
  public get dados(): Dado[] {
    return this._dados;
  }
  public set dados(value: Dado[]) {
    this._dados = value;
  }
  private _poderes: Poder[] = [];
  public get poderes(): Poder[] {
    return this._poderes;
  }
  public set poderes(value: Poder[]) {
    this._poderes = value;
  }

  private _equipamentos: Equipamento[] = [];
  public get equipamentos(): Equipamento[] {
    return this._equipamentos;
  }
  public set equipamentos(value: Equipamento[]) {
    this._equipamentos = value;
  }

  private _isDead: boolean = false;
  public get isDead(): boolean {
    return this._isDead;
  }
  public set isDead(value: boolean) {
    this._isDead = value;
  }

  private _magias: string[] = [];
  public get magias(): string[] {
    return this._magias;
  }
  public set magias(value: string[]) {
    this._magias = value;
  }

  constructor() {
    this.init();
  }

  init() {
    nomes[this.generateD6() - 1][this.generateD6() - 1]?.modificador(this);
    ocupacoes[this.generateD6() - 1].modificador(this);
    descritores[this.generateD6() - 1].modificador(this);
    caracteristicas[this.generateD6() - 1][this.generateD6() - 1].modificador(this);
  }

  public generateD6() {
    let dice = new DiceRoll('1d6');
    this.dados.push({ value: dice.total });
    return dice.total;
  }


}

const nomes: NomeObject[][] = [
  [
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Plaft';
      },

    },
    {

      modificador: (goblin: any) => {
        goblin.nome = 'Plin';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Tik';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Tok';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Bash';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Cricri';
      },
    },
  ],
  [
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Glub';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Tim';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Ranço';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Yhaa';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Vrum';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Aiaiai';
      },
    },
  ],
  [
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Crash';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Zzzz';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Sussa';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Bibi';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Boom';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Bum';
      },
    },
  ],
  [
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Spray';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Cringe';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Sopa';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Ovo';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Ban';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Nhack';
      },
    },
  ],
  [
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Bing';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Riso';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Slash';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Coff';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Ugh';
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.nome = 'Snif';
      },
    },
  ],
  [
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Última coisa que comeu',
          hasOptions: false,
          resolve: (resp: string) => {
            goblin.nome = resp;
          },
        });
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Última coisa que comeu',
          hasOptions: false,
          resolve: (resp: string) => {
            goblin.nome = resp;
          },
        });
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Última coisa que comeu',
          hasOptions: false,
          resolve: (resp: string) => {
            goblin.nome = resp;
          },
        });
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Digite seu nome',
          hasOptions: false,
          resolve: (resp: string) => {
            if(resp && typeof resp == 'string' && resp.length > 0){
              goblin.nome = resp.split('').reverse().join('');
            }
          },
        });
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Digite seu nome',
          hasOptions: false,
          resolve: (resp: string) => {
            if(resp && typeof resp == 'string' && resp.length > 0){
              goblin.nome = resp.split('').reverse().join('');
            }
          },
        });
      },
    },
    {
      modificador: (goblin: any) => {
        goblin.perguntas.push({
          pergunta: 'Digite seu nome',
          hasOptions: false,
          resolve: (resp: string) => {
            if(resp && typeof resp == 'string' && resp.length > 0){
              goblin.nome = resp.split('').reverse().join('');
            }
          },
        });
      },
    },
  ],
];

const ocupacoes = [
  {
    nome: 'Mercenário',
    modificador: (goblin: GoblinInterface) => {
      goblin.ocupacao = "Mercenário";
      goblin.combate++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Mercenário",
        hasOptions: true,
        options: [
          { label: "Espada e Escudo", value: "Espada e Escudo" },
          { label: "2 Machadinhas", value: "2 Machadinhas" },
          { label: "Machadão", value: "Machadão" },
        ],
        resolve: (resp: string) => {
          switch (resp) {
            case 'Espada e Escudo':
              goblin.equipamentos.push({
                nome: "Espada",
                ataque: "Corporal",
                uso: "Uma mão",
                bonus: "+2d"
              },
                {
                  nome: "Escudo",
                  uso: "Uma mão",
                  durabilidade: 2
                }
              );
              break;
            case '2 Machadinhas':
              goblin.equipamentos.push({
                nome: "Machadinha",
                uso: "Uma mão",
                ataque: "Corporal",
                bonus: "+2d",
                especial: [
                  {
                    nome: "Arremesso",
                    descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                  }
                ]
              },
                {
                  nome: "Machadinha",
                  uso: "Uma mão",
                  ataque: "Corporal",
                  bonus: "+2d",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                })

              break;
            case 'Machadão':
              goblin.equipamentos.push({
                nome: "Machadão",
                uso: "Duas mãos",
                ataque: "Corporal",
                bonus: "+3d"
              })
              break;
            default:
              break;
          }
        },
      })
      goblin.poderes.push(
        {
          nome: "Mestre de Armas",
          descricao: "Você sempre rola +1 dado em todos os ataques que fizer lutando com sua arma favorita",
          nivel: 1
        }
      )
    },
    poderes: [
      {
        nome: "Mestre de Armas",
        descricao: "Você sempre rola +1 dado em todos os ataques que fizer lutando com sua arma favorita",
        nivel: 1
      },
      {
        nome: "Ataque Giratório",
        descricao: "Sempre que você causar dano a um inimigo com uma arma corporal, pode fazer mais um ataque contra outro inimigo que estiver ao seu alcance",
        nivel: 2
      },
      {
        nome: "Ataque Brutal",
        descricao: "Uma vez por dia, você pode declarar um Ataque Brutal. Faça um ataque corporal normalmente com o dobro de dados",
        nivel: 3
      }

    ]
  },
  {
    nome: 'Caçador',
    modificador: (goblin: any) => {
      goblin.ocupacao = 'Caçador';
      goblin.combate++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Caçador",
        hasOptions: true,
        options: [
          { label: "3 Adagas", value: "3 Adagas" },
          { label: "Arco de Caça", value: "Arco de Caça" },
          { label: "Pistola e Chapéu", value: "Pistola e Chapéu" },
        ],
        resolve: (resp: string) => {
          switch (resp) {
            case '3 Adagas':
              goblin.equipamentos.push({
                nome: "Adaga",
                ataque: "Corporal",
                uso: "Uma mão",
                bonus: "+1d",
                especial: [
                  {
                    nome: "Arremesso",
                    descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                  }
                ]
              },
                {
                  nome: "Adaga",
                  ataque: "Corporal",
                  uso: "Uma mão",
                  bonus: "+1d",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                },
                {
                  nome: "Adaga",
                  ataque: "Corporal",
                  uso: "Uma mão",
                  bonus: "+1d",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                },

              );
              break;
            case 'Arco de Caça':
              goblin.equipamentos.push({
                nome: "Arco e Flechas",
                uso: "Duas mãos",
                ataque: "Distância",
                bonus: "+2d",
                especial: [
                  {
                    nome: "Munição",
                    descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
                    quantidade: 10
                  }
                ]
              },);
              break;
            case 'Pistola e Chapéu':
              goblin.equipamentos.push({
                nome: "Pistola",
                uso: "Uma mão",
                ataque: "Distância",
                bonus: "+2d",
                especial: [
                  {
                    nome: "Recarga",
                    descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
                  },
                  {
                    nome: "Munição",
                    descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
                    quantidade: 5
                  }

                ]
              },
              {
                nome: "Chapéu",
                uso: "Cabeça",
                durabilidade: 0,
                especial: [
                  {
                    nome: "Sorte",
                    descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
                  }
                ]
              })
              break;
            default:
              break;
          }
        },
      })
      goblin.poderes.push(
        {
          nome: "Inimigo",
          descricao: "Escolha uma espécie de criatura quando começar o jogo. Você sempre rola +1 dado em todos os ataques contra essa espécie de criatura",
          nivel: 1
        }
      )
    },
    poderes: [
      {
        nome: "Inimigo",
        descricao: "Escolha uma espécie de criatura quando começar o jogo. Você sempre rola +1 dado em todos os ataques contra essa espécie de criatura",
        nivel: 1
      },
      {
        nome: "Rastrear",
        descricao: "Você sabe seguir pegadas e identificar a criatura das pegadas",
        nivel: 2
      },
      {
        nome: "Tiro Certeiro",
        descricao: "Uma vez por dia, você pode declarar um Tiro Certeiro. Faça um ataque à distância normalmente com o dobro de dados",
        nivel: 3
      }

    ]
  },
  {
    nome: 'Gatuno',
    modificador: (goblin: any) => {
      goblin.ocupacao = 'Gatuno';
      goblin.habilidade++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Gatuno",
        hasOptions: true,
        options: [
          { label: "3 Adagas", value: "3 Adagas" },
          { label: "Rapieira e Broquel", value: "Rapieira e Broquel" },
          { label: "Pistola e Chapéu", value: "Pistola e Chapéu" },
        ],
        resolve: (resp: string) => {
          switch (resp) {
            case '3 Adagas':
              goblin.equipamentos.push({
                nome: "Adaga",
                ataque: "Corporal",
                uso: "Uma mão",
                bonus: "+1d",
                especial: [
                  {
                    nome: "Arremesso",
                    descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                  }
                ]
              },
                {
                  nome: "Adaga",
                  ataque: "Corporal",
                  uso: "Uma mão",
                  bonus: "+1d",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                },
                {
                  nome: "Adaga",
                  ataque: "Corporal",
                  uso: "Uma mão",
                  bonus: "+1d",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                },

              );
              break;
            case 'Rapieira e Broquel':
              goblin.equipamentos.push(
                {
                  nome: "Rapieira",
                  uso: "Uma mão",
                  ataque: "Corporal",
                  bonus: "+2d",
                },
                {
                  nome: 'Broquel',
                  uso: 'Uma mão',
                  durabilidade: 1
                }
              )
              break;
            case 'Pistola e Chapéu':
              goblin.equipamentos.push({
                nome: "Pistola",
                uso: "Uma mão",
                ataque: "Distância",
                bonus: "+2d",
                especial: [
                  {
                    nome: "Recarga",
                    descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
                  },
                  {
                    nome: "Munição",
                    descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
                    quantidade: 5
                  }

                ]
              },
                {
                  nome: "Chapéu",
                  uso: "Cabeça",
                  durabilidade: 0,
                  especial: [
                    {
                      nome: "Sorte",
                      descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
                    }
                  ]
                })
              break;
            default:
              break;
          }
        },
      })
      goblin.poderes.push(
        {
          nome: "Roubar",
          descricao: "Conseguindo 1 hit em um teste de Habilidade, você pode roubar um objeto do bolso de qualquer pessoa sem que ela perceba",
          nivel: 1
        }
      )
    },
    poderes: [
      {
        nome: "Roubar",
        descricao: "Conseguindo 1 hit em um teste de Habilidade, você pode roubar um objeto do bolso de qualquer pessoa sem que ela perceba",
        nivel: 1
      },
      {
        nome: "Ataque Furtivo",
        descricao: "Você sempre rola 2 dados a mais se fizer um ataque contra um alvo que não sabe onde você está",
        nivel: 2
      },
      {
        nome: "Esconder",
        descricao: "Uma vez por dia, você pode se esconder sem precisar fazer um teste. Você estará completamente escondido até se mexer ou emitir som",
        nivel: 3
      }

    ]
  },
  {
    nome: 'Líder',
    modificador: (goblin: any) => {
      goblin.ocupacao = 'Líder';
      goblin.vitalidade++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Líder",
        hasOptions: true,
        options: [
          { label: "Espada e Medalhas de Guerra", value: "Espada e Medalhas de Guerra" },
          { label: "Lança e Elmo", value: "Lança e Elmo" },
          { label: "Espadona", value: "Espadona" },

        ],
        resolve: (resp: string) => {
          switch (resp) {
            case 'Espada e Medalhas de Guerra':
              goblin.equipamentos.push({
                nome: "Espada",
                ataque: "Corporal",
                uso: "Uma mão",
                bonus: "+2d"
              },
                {
                  nome: "Medalhas de guerra",
                }
              );
              break;
            case 'Lança e Elmo':
              goblin.equipamentos.push({
                nome: "Lança",
                uso: "Duas mãos",
                ataque: "Corporal",
                bonus: "+3d",
              },
                {
                  nome: "Elmo",
                  uso: 'Cabeça',
                  durabilidade: 2
                })
              break;
            case 'Espadona':
              goblin.equipamentos.push({
                nome: "Espadona",
                uso: "Duas mãos",
                ataque: "Corporal",
                bonus: "+3d",
              })
              break;
            default:
              break;
          }
        },
      });
      goblin.poderes.push(
        {
          nome: "Grito de Guerra",
          descricao: "Uma vez por dia, você pode dar este grito. Faça um teste de Noção e, se conseguir 1 hit, todos os seus aliados ficarão com Combate +1 até o final da batalha",
          nivel: 1
        }
      )
    },
    poderes: [
      {
        nome: "Grito de Guerra",
        descricao: "Uma vez por dia, você pode dar este grito. Faça um teste de Noção e, se conseguir 1 hit, todos os seus aliados ficarão com Combate +1 até o final da batalha",
        nivel: 1
      },
      {
        nome: "Humilhação",
        descricao: "Uma vez por dia, você pode gritar e xingar um aliado seu que eliminará todos os ferimentos dele",
        nivel: 2
      },
      {
        nome: "Ataque Brutal",
        descricao: "Uma vez por dia, você pode declarar um Ataque Brutal. Faça um ataque corporal normalmente com o dobro de dados",
        nivel: 3
      }

    ]
  },
  {
    nome: 'Incendiário',
    modificador: (goblin: any) => {
      goblin.ocupacao = 'Incendiário';
      goblin.vitalidade++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Incendiário",
        hasOptions: true,
        options: [
          { label: "Barril de Pólvora", value: "Barril de Pólvora" },
          { label: "Pistola e Galinha Explosiva", value: "Pistola e Galinha Explosiva" },
          { label: "Bacamarte e Chapéu", value: "Bacamarte e Chapéu" },

        ],
        resolve: (resp: string) => {
          switch (resp) {
            case 'Barril de Pólvora':
              goblin.equipamentos.push({
                nome: "Barril de Pólvora",
                descricao: "Se for aceso, vai explodir e causar 4 ferimentos a todos em sua volta e 2 ferimentos a todos a até 5 metros. Pode usá-lo para completar a munição de até 3 armas de fogo."
              }
              );
              break;
            case 'Pistola e Galinha Explosiva':
              goblin.equipamentos.push({
                nome: "Pistola",
                uso: "Uma mão",
                ataque: "Distância",
                bonus: "+2d",
                especial: [
                  {
                    nome: "Recarga",
                    descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
                  },
                  {
                    nome: "Munição",
                    descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
                    quantidade: 5
                  }

                ]
              },
                {
                  nome: "Galinha Explosiva",
                  descricao: "Você pode arremessá-la ou deixá-la andando. Explode em dois turnos. Quando explode, causa 3 ferimentos a todos em sua volta.",
                  especial: [
                    {
                      nome: "Arremesso",
                      descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância",
                    }
                  ]
                })
              break;
            case 'Bacamarte e Chapéu':
              goblin.equipamentos.push({
                nome: "Bacamarte",
                uso: "Duas mãos",
                ataque: "Distância",
                bonus: "+3d",
                especial: [
                  {
                    nome: "Recarga",
                    descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
                  },
                  {
                    nome: "Munição",
                    descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
                    quantidade: 5
                  }

                ]
              },
                {
                  nome: "Chapéu",
                  uso: "Cabeça",
                  durabilidade: 0,
                  especial: [
                    {
                      nome: "Sorte",
                      descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
                    }
                  ]
                })
              break;
            default:
              break;
          }
        },
      })
      goblin.poderes.push(
        {
          nome: "Resistência",
          descricao: "Você sempre recebe 1 ferimento a menos de ataques de fogo ou tiro de armas de fogo",
          nivel: 1
        }
      )
    },
    poderes: [
      {
        nome: "Resistência",
        descricao: "Você sempre recebe 1 ferimento a menos de ataques de fogo ou tiro de armas de fogo",
        nivel: 1
      },
      {
        nome: "Delírio",
        descricao: "Você pode se livrar de todos os ferimentos se você explodir ou queimar completamente uma casa ou algo maior que isso",
        nivel: 2
      },
      {
        nome: "Imunidade",
        descricao: "Você é imune a fogo",
        nivel: 3
      }

    ]
  },
  {
    nome: 'Bruxo',
    modificador: (goblin: any) => {
      goblin.ocupacao = 'Bruxo';
      goblin.nocao++;
      goblin.perguntas.push({
        pergunta: "Escolha o equipamento de Bruxo",
        hasOptions: true,
        options: [
          { label: "Cajado", value: "Cajado" },
          { label: "Varinha e Cachecol", value: "Varinha e Cachecol" },
          { label: "Vassoura e Chapéu", value: "Vassoura e Chapéu" },
        ],
        resolve: (resp: string) => {
          switch (resp) {
            case 'Cajado':
              goblin.equipamentos.push({
                nome: "Cajado",
                uso: "Duas mãos",
                ataque: "Corporal",
                bonus: "+1d",
                especial: [
                  {
                    nome: "Condutor Mágico",
                    descricao: "Pode conjurar magias através deste item"
                  }
                ]
              }
              );
              break;
            case 'Varinha e Cachecol':
              goblin.equipamentos.push({
                nome: "Varinha",
                uso: "Uma mão",
                ataque: "Corporal",
                bonus: "+0d",
              },
              {
                nome: "Cachecol",
                uso: "Pescoço",
                durabilidade: 0,
                especial: [
                  {
                    nome: "Arcano",
                    descricao: "Quem estiver vestindo pode rolar 1 dado a mais em testes para conjurar magias",
                  }
                ],
              })
              break;
            case 'Vassoura e Chapéu':
              goblin.equipamentos.push({
                nome: "Vassoura",
                uso: "Duas mãos",
                ataque: "Corporal",
                bonus: "+1d",
                especial: [
                  {
                    nome: "Condutor Mágico",
                    descricao: "Pode conjurar magias através deste item"
                  },
                ]

              },
                {
                  nome: "Chapéu",
                  uso: "Cabeça",
                  durabilidade: 0,
                  especial: [
                    {
                      nome: "Sorte",
                      descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
                    }
                  ]
                })
              break;
            default:
              break;
          }
        },
      })
      goblin.perguntas.push({
        pergunta: "Escolha o 3 magias",
        hasOptions: true,
        multiple: true,
        minLength: 3,
        maxLength: 3,
        options: [
          { label: "Fogo", value: "Fogo" },
          { label: "Gelo", value: "Gelo" },
          { label: "Relâmpago", value: "Relâmpago" },
          { label: "Troca", value: "Troca" },
          { label: "Morte", value: "Morte" },
          { label: "Cura", value: "Cura" },
          { label: "Planta", value: "Planta" },
        ],
        resolve: (resp: string[]) => {
          goblin.magias = resp
        },
      })

      goblin.poderes.push(
        {
          nome: "Magias",
          descricao: "Você pode conjurar magias da sua lista (escolha 3 magias). Para conjurar uma magia, faça um teste de Noção e consulte o efeito da magia (página 10)",
          nivel: 1
        }
      )

    },
    poderes: [
      {
        nome: "Magias",
        descricao: "Você pode conjurar magias da sua lista (escolha 3 magias). Para conjurar uma magia, faça um teste de Noção e consulte o efeito da magia (página 10)",
        nivel: 1
      },
      {
        nome: "Condutor Mágico",
        descricao: "Se você conjurar a magia por uma varinha, cajado ou outro Condutor Mágico, você rola 1 dado a mais",
        nivel: 2
      },
      {
        nome: "Implacável",
        descricao: "Uma vez por dia, você pode conjurar uma magia sem rolar os dados, apenas escolhendo o resultado",
        nivel: 3
      }

    ]
  },
];

const descritores = [
  {
    nome: 'Covarde',
    modificador: (goblin: any) => {
      goblin.descritor = 'Covarde';
      goblin.combate--;
    },
  },
  {
    nome: 'Atrapalhado',
    modificador: (goblin: any) => {
      goblin.descritor = 'Atrapalhado';
      goblin.habilidade--;
    },
  },
  {
    nome: 'Tapado',
    modificador: (goblin: any) => {
      goblin.descritor = 'Tapado';
      goblin.nocao--;
    },
  },
  {
    nome: 'Fracote',
    modificador: (goblin: any) => {
      goblin.descritor = 'Fracote';
      goblin.vitalidade--;
    },
  },
  {
    nome: 'Medíocre',
    modificador: (goblin: any) => {
      goblin.descritor = 'Medíocre';
    },
  },
  {
    nome: 'Supimpa',
    modificador: (goblin: any) => {
      goblin.descritor = 'Supimpa';
      goblin.perguntas.push({
        pergunta: 'Escolha um atributo para ganhar +1',
        hasOptions: true,
        options: [
          {
            label: 'Combate',
            value: 'combate',
          },
          {
            label: 'Habilidade',
            value: 'habilidade',
          },
          {
            label: 'Noção',
            value: 'nocao',
          },
          {
            label: 'Vitalidade',
            value: 'vitalidade',
          },
        ],
        resolve: (resp: string) => {
          switch (resp) {
            case 'combate':
              goblin.combate++;
              break;
            case 'habilidade':
              goblin.habilidade++;
              break;
            case 'nocao':
              goblin.nocao++;
              break;
            case 'vitalidade':
              goblin.vitalidade++;
              break;
            default:
              break;
          }
        },
      });
    },
  },
];

const caracteristicas = [
  [
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Bomba-relógio',
          descricao: 'Você pode explodir a qualquer momento. Sempre que alguém fala algo relacionado com fogo ou explosão role um dado. Se cair “1”, você explode.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Minicabeça',
          descricao: 'Você possui uma cabeça muito pequena. Seus olhos parecem que vão saltar do rosto (talvez vão!) e você não pode usar elmos.',
        })

      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Apêndice extra',
          descricao:
            'Você tem dois apêndices. Você tem o dobro de chance de ter apendicite.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Poros fedidos',
          descricao:
            'Você exala um odor extremamente desagradável e ninguém consegue ficar perto de você por muito tempo sem ficar nauseado.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Verdura',
          descricao: 'Você acha que é uma planta e insiste em fazer fotossíntese.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        caracteristicas[goblin.generateD6() - 1][goblin.generateD6() - 1].modificador(goblin);
        caracteristicas[goblin.generateD6() - 1][goblin.generateD6() - 1].modificador(goblin);
      }
    }
  ],
  [
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Cinzento',
          descricao:
            'Sua pele é cinza e enrugada. Você pode ter barba branca comprida se quiser.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Cabeção',
          descricao:
            'Você tem um cabeção que contém um cérebro gigante. Você pode saber de qualquer coisa e conhecimento obscuro, mas não pode usar elmos ou bonés.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Orelha extra',
          descricao: 'Você possui uma orelha extra embaixo do sovaco.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Pintas',
          descricao:
            'Você possui pintas cor de rosa espalhadas por todo o corpo. Algumas têm formato de coração.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Minion',
          descricao:
            'Você gosta de usar camiseta amarela e odeia qualquer um que use vermelho. Acredita em qualquer mentira.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Fosforescente',
          descricao:
            'Sua pele é de um tom verde fosforescente. Você brilha no escuro.',
        })
      }
    },
  ],
  [
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Amaldiçoado',
          descricao:
            'Você acha que é um humano que foi amaldiçoado e precisa quebrar a maldição. Mas, na verdade, você é só um goblin perdido.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Linguão',
          descricao:
            'Você possui uma língua gigante. Você não tem muito controle sobre ela, então ela vive fora da sua boca babando e impedindo que você fale direito.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Nariz extra',
          descricao: 'Você possui um nariz extra no cotovelo.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Listras',
          descricao: 'Você possui listras azuis por todo o corpo.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Galináceo',
          descricao: 'Você acha que é uma galinha e vive cacarejando e ciscando.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Colorido',
          descricao:
            'Sua pele tem vários tons e cores. Toda manhã, as cores mudam de lugar.',
        })
      }
    },
  ],
  [
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Tom bélico',
          descricao:
            'Sempre que você conversa com alguém, este se sentirá ofendido sem razão.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Olho gigante',
          descricao: 'Um dos seus olhos é gigante e raramente pisca.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Olhos extras',
          descricao:
            'Você possui 1d6 olhos a mais na cabeça (em vários lugares diferentes).',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Pompom',
          descricao:
            'Você possui um pequeno rabo com um pompom na ponta, como de um poodle bem tosado.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Peixoso',
          descricao: 'Você acha que é um peixe e precisa estar sempre molhado.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({ nome: 'Amarelo', descricao: 'Sua pele é amarela.' })
      }
    }
  ],
  [
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Flutulência',
          descricao:
            'Você vive se peidando, mas se quiser pode usar isso para dar saltos de até 6 metros de altura ou correr até o dobro da velocidade.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Pés gigantes',
          descricao:
            'Seus pés são gigantes. Você não pode usar nenhum tipo de calçado.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Braço extra',
          descricao: 'Você tem um braço extra que sai do meio das suas costas.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Chifre',
          descricao:
            'Você tem um grande e imponente chifre de unicórnio saindo da sua testa.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Felino',
          descricao:
            'Você acha que é um gato e vive se lambendo, miando e ronronando.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({ nome: 'Azul', descricao: 'Sua pele é azul.' })
      }
    }
  ],
  [
    {
      modificador: (goblin: GoblinInterface) => {
        caracteristicas[goblin.generateD6() - 1][goblin.generateD6() - 1].modificador(goblin);
        caracteristicas[goblin.generateD6() - 1][goblin.generateD6() - 1].modificador(goblin);
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Mão gigante',
          descricao:
            'Uma das suas mãos tem o dobro do tamanho de uma mão de goblin comum.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Cabeça extra',
          descricao:
            'Você tem duas cabeças. O que não quer dizer muita coisa, já que duas cabeças de goblin não pensam melhor que uma.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({ nome: 'Cicatrizes', descricao: 'Você tem cicatrizes por todo o corpo.' })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({
          nome: 'Aracnídeo',
          descricao:
            'Você consegue escalar superfícies lisas e pode defecar cordas de seda.',
        })
      }
    },
    {
      modificador: (goblin: GoblinInterface) => {
        goblin.caracteristicas.push({ nome: 'Vermelho', descricao: 'Sua pele é vermelha.' })
      }
    }
  ]
];

const armas = [
  { nome: "Adaga", uso: "Uma mão", ataque: "Corporal", bonus: "+1d", especial: [{ nome: "Arremesso", descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância", }] },
  {
    nome: "Arco e Flecha", tipo_arma: "Duas mãos", tipo_dano: "Distância", bonus: "+2d", especial: [
      {
        nome: "Munição",
        descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
        quantidade: 10
      }
    ]
  },
  {
    nome: "Bacamarte",
    uso: "Duas mãos",
    ataque: "Distância",
    bonus: "+3d",
    especial: [
      {
        nome: "Recarga",
        descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
      },
      {
        nome: "Munição",
        descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
        quantidade: 5
      }

    ]
  },
  {
    nome: "Besta",
    uso: "Duas mãos",
    ataque: "Distância",
    bonus: "+3d",
    especial: [
      {
        nome: "Recarga",
        descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
      },
      {
        nome: "Munição",
        descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
        quantidade: 6
      }

    ]
  },
  {
    nome: "Cajado",
    uso: "Duas mãos",
    ataque: "Corporal",
    bonus: "+1d",
    especial: [
      {
        nome: "Condutor Mágico",
        descricao: "Pode conjurar magias através deste item"
      }
    ]
  },
  { 
    nome: "Clava", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+1d", 
  },
  { 
    nome: "Espada", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+2d", 
  },
  { 
    nome: "Espada de Madeira", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+2d", 
  },
  { 
    nome: "Espadona", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+3d", 
  },
  {
    nome: "Estilingue",
    uso: "Duas mãos",
    ataque: "Distância",
    bonus: "+0d",
    especial: [
      {
        nome: "Recarga",
        descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
      },
    ]
  },
  { 
    nome: "Faca", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+1d", 
  },
  { 
    nome: "Forcado", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+2d", 
  },
  { 
    nome: "Gadanha", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+3d", 
  },
  { 
    nome: "Lança", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+3d", 
  },
  { 
    nome: "Machadão", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+3d", 
  },
  { 
    nome: "Machadinha", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+2d", 
    especial: [
      { 
        nome: "Arremesso", 
        descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância", 
      }
    ]
  },
  { 
    nome: "Martelão", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+3d", 
  },
  {
    nome: "Pistola",
    uso: "Uma mão",
    ataque: "Distância",
    bonus: "+2d",
    especial: [
      {
        nome: "Recarga",
        descricao: "Depois de atacar, deve gastar um turno recarregando para atacar novamente"
      },
      {
        nome: "Munição",
        descricao: "Você tem um limite de X ataques. Precisará conseguir mais munição para poder atacar",
        quantidade: 5
      }

    ]
  },
  { 
    nome: "Rapieira", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+2d", 
  },
  { 
    nome: "Varinha", 
    uso: "Uma mão", 
    ataque: "Corporal", 
    bonus: "+0d", 
  },
  { 
    nome: "Vassoura", 
    uso: "Duas mãos", 
    ataque: "Corporal", 
    bonus: "+1d", 
    especial: [
      {
        nome: "Condutor Mágico",
        descricao: "Pode conjurar magias através deste item"
      }
    ]
  },
];

const protecoes = [
{
  nome: 'Broquel',
  uso: 'Uma mão',
  durabilidade: 1
},
{
  nome: "Cachecol",
  uso: "Pescoço",
  durabilidade: 0,
  especial: [
    {
      nome: "Arcano",
      descricao: "Quem estiver vestindo pode rolar 1 dado a mais em testes para conjurar magias",
    }
  ],
},
{
  nome: "Chapéu",
  uso: "Cabeça",
  durabilidade: 0,
  especial: [
    {
      nome: "Sorte",
      descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
    }
  ]
},
{
  nome: 'Cota de Malha',
  uso: 'Tronco',
  durabilidade: 2
},
{
  nome: 'Elmo',
  uso: 'Cabeça',
  durabilidade: 2
},
{
  nome: 'Escudo',
  uso: 'Uma mão',
  durabilidade: 2
},
{
  nome: 'Panela',
  uso: 'Cabeça',
  durabilidade: 1
},
{
  nome: 'Peitoral',
  uso: 'Tronco',
  durabilidade: 3
},
{
  nome: 'Penico',
  uso: 'Cabeça',
  durabilidade: 1,
  especial: [
    {
      nome: "Sorte",
      descricao: "Se estiver na sua cabeça, você pode destruir este item quando receber um ataque à distância e ignorar todo o dano"
    }
  ]
},
{
  nome: 'Tampa de Panela',
  uso: 'Uma mão',
  durabilidade: 1
},

]

const equipamentos = [
  { 
    nome: "Aljava",
    descricao: "Possui flechas suficientes para duplicar a quantidade de munição de um arco ou besta"
  },
  {
    nome: "Banquete",
    descricao: "Comida suficiente pra alimentar um bando de goblins por 1d6 dias",
  },
  {
    nome: "Barril de Cerveja",
    descricao: "O suficiente pra embebedar uma festa de goblins inteira",
  },
  {
    nome: "Barril de Pólvora",
    descricao: "Se for aceso, vai explodir e causar 4 ferimentos a todos em sua volta e 2 ferimentos a todos a até 5 metros. Pode usá-lo para completar a munição de até 3 armas de fogo",
  },
  {
    nome: "Corda e Gancho",
    descricao: "Para escalar paredes e muralhas. Adiciona 2 dados no teste de Habilidade para escalar"
  },
  {
    nome: "Guarda-chuva",
    descricao: "Não se molhará se chover. Cobre até 4 goblins. Ajuda a diminuir a queda (-1 ferimento)"
  },
  {
    nome: "Galinha Explosiva",
    descricao: "Você pode arremessá-la ou deixá-la andando. Explode em dois turnos. Quando explode, causa 3 ferimentos a todos em sua volta",
    especial: [
      { 
        nome: "Arremesso", 
        descricao: "Este objeto pode ser arremessado como se fosse uma arma de distância", 
      }
    ]
  },
  {
    nome: "Livro Estranho",
    descricao: "O que dá pra fazer? Não sei. Aquele que conseguir 2 hits em um teste de Noção pode conseguir ler. Existe 1 chance em 6 de ser um livro de magia. Se for, sorteie uma magia da lista"
  },
  {
    nome: "Roupa Chique",
    descricao: "Um goblin nojento vestindo isso ainda fica parecendo um goblin nojento, mas pelo menos ajuda a melhorar a autoestima dele"
  },
  {
    nome: "Tenda",
    descricao: "Tenda grande para até 5 goblins (10 se não se importarem de ficar empilhados)"
  },
  {
    nome: "Veneno",
    descricao: "Pode colocar na bebida de alguém. Aquele que beber receberá 1 ferimento por minuto"
  },
]

