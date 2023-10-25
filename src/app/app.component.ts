import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NewGoblinComponent } from './new-goblin/new-goblin.component';
import { GoblinInterface } from './_models/goblin';
import { Goblin } from './_class/Goblin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  valueItemAdd = '';
  title = 'malditos-goblins';

  dialogRefNewGoblin!: MatDialogRef<NewGoblinComponent>;
  armas: any[] = [];
  constructor(private dialog: MatDialog) {
    this.armas = armas
   }

  public goblins: any[] = [];

  newGoblin() {
    let goblin: GoblinInterface = new Goblin();
    if (goblin.perguntas.length > 0) {
      this.openDialog(goblin).subscribe({
        next: (data: any) => {
          if (data) {
            console.log(data);
            goblin.perguntas.forEach((element: any, index: number) => {
              element.resolve(data.formPerguntas[index]);
            });

            this.goblins.unshift(goblin);
          }
        },
      });
    } else {
      this.goblins.unshift(goblin);
    }
  }

  changeGoblinValue(event: any, goblin: GoblinInterface){

    let value = event.target.value;

    goblin.nivel = Number(value);

    // console.log(event);
    // console.log(goblin);
  }

  openDialog(goblin: any) {
    this.dialogRefNewGoblin = this.dialog.open(NewGoblinComponent, {
      data: goblin,
    });

    return this.dialogRefNewGoblin.afterClosed();
  }

  teste(){
  
  }
}


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
