import { Component } from '@angular/core';


import {DiceRoll} from '@dice-roller/rpg-dice-roller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private nomes: any[][] = [
    [
      { nome: "Plaft"},
      { nome: "Plin"},
      { nome: "Tik"},
      { nome: "Tok"},
      { nome: "Bash"},
      { nome: "Cricri"}
    ],
    [
      { nome: "Glub"},
      { nome: "Tim"},
      { nome: "Ranço"},
      { nome: "Yhaa"},
      { nome: "Vrum"},
      { nome: "Aiaiai"}
    ],
    [
      { nome: "Crash"},
      { nome: "Zzzz"},
      { nome: "Sussa"},
      { nome: "Bibi"},
      { nome: "Boom"},
      { nome: "Bum"}
    ],
    [
      { nome: "Spray"},
      { nome: "Cringe"},
      { nome: "Sopa"},
      { nome: "Ovo"},
      { nome: "Ban"},
      { nome: "Nhack"}
    ],
    [
      { nome: "Spray"},
      { nome: "Cringe"},
      { nome: "Sopa"},
      { nome: "Ovo"},
      { nome: "Ban"},
      { nome: "Nhack"}
    ],
    [
      { nome: "Bing"},
      { nome: "Riso"},
      { nome: "Slash"},
      { nome: "Coff"},
      { nome: "Ugh"},
      { nome: "Snif"}
    ],
    [
      { pergunta: "Última coisa que comeu"},
      { pergunta: "Última coisa que comeu"},
      { pergunta: "Última coisa que comeu"},
      { pergunta: "Inverta seu nome"},
      { pergunta: "Inverta seu nome"},
      { pergunta: "Inverta seu nome"}
    ]



  ]

  ocupacoes = [

    {nome: 'Mercenário', modificador: (goblin:any)  => { goblin.combate++ }},
    {nome: 'Caçador', modificador: (goblin:any)  => { goblin.combate++ }},
    {nome: 'Gatuno', modificador: (goblin:any)  => { goblin.habilidade++ }},
    {nome: 'Líder', modificador: (goblin:any)  => { goblin.vitalidade++ }},
    {nome: 'Incendiário', modificador: (goblin:any)  => { goblin.vitalidade++ }},
    {nome: 'Bruxo', modificador: (goblin:any)  => { goblin.nocao++ }}

  ]

  descritores = [
    { nome: "Covarde", modificador: (goblin:any)  => { goblin.combate-- }},
    { nome: "Atrapalhado", modificador: (goblin:any)  => { goblin.habilidade-- }},
    { nome: "Tapado", modificador: (goblin:any)  => { goblin.nocao-- }},
    { nome: "Fracote", modificador: (goblin:any)  => { goblin.vitalidade-- }},
    { nome: "Medíocre", modificador: (goblin:any)  => { }},
    { nome: "Supimpa", modificador: (goblin:any)  => {
        let value: any = '';
        do {
          value = prompt(`Escolha um atributo para ganhar +1.
            digite:
            <ol>
            </ol>
            .1 para Combate, 2 para Habilidade, 3 para Noção ou 4 para Vitalidade.
          `)
          value = Number(value);
        } while (Number.isNaN(value) || (value > 4 || value < 1))

        switch (Number(value)) {
          case 1:
            goblin.combate++
            break;
          case 2:
            goblin.habilidade++
            break;
          case 3:
            goblin.nocao++
            break;
          case 4:
            goblin.vitalidade++
            break;

          default:
            break;
        }
      }
    },
  ]
  /*
  Descritores
  Covarde: Combate -1.
  Atrapalhado: Habilidade -1.
  Tapado: Noção -1.
  Fracote: Vitalidade -1.
  Medíocre: Não altera nada.
  Supimpa: Escolha um atributo para ganhar +1.
  */

  title = 'malditos-goblins';

  constructor(){

  }

  public goblins: any[] = [];


  newGoblin(){


    const roll = new DiceRoll('1d6');

    let arrayDadosRolados: any[] = [];

    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();
    arrayDadosRolados.push(roll.total);
    roll.roll();

    console.log(arrayDadosRolados)

    let value = this.nomes[arrayDadosRolados[0]][arrayDadosRolados[1]];

    if(!value?.nome) {
      console.log(value)
      value['nome'] = prompt(value?.pergunta )
    }

    let ocupacao = this.ocupacoes[arrayDadosRolados[2] ];

    let descritor = this.descritores[arrayDadosRolados[3] ];

    let goblin = {
      nome: value?.nome,
      nivel: 1,
      ocupacao: ocupacao?.nome,
      descritor: descritor?.nome,
      caracteristica: '',
      combate: 2,
      habilidade: 2,
      nocao: 2,
      vitalidade:2,
    }

    ocupacao?.modificador(goblin);
    descritor?.modificador(goblin);
    this.goblins.push(
      goblin
    )
  }
}

