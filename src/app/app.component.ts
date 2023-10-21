import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { NewGoblinComponent } from './new-goblin/new-goblin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private nomes: any[][] = [
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
            }
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
            }
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
            }
          });
        },
      },
      {

        modificador: (goblin: any) => {
          goblin.perguntas.push({
            pergunta: 'Inverta seu nome',
            hasOptions: false,
            resolve: (resp: string) => {
              goblin.nome = resp;
            }
          });
        },
      },
      {
        modificador: (goblin: any) => {
          goblin.perguntas.push({
            pergunta: 'Inverta seu nome',
            hasOptions: false,
            resolve: (resp: string) => {
              goblin.nome = resp;
            }
          });
        },
      },
      {
        modificador: (goblin: any) => {
          goblin.perguntas.push({
            pergunta: 'Inverta seu nome',
            hasOptions: false,
            resolve: (resp: string) => {
              goblin.nome = resp;
            }
          });
        },
      },
    ],
  ];

  ocupacoes = [
    {
      nome: 'Mercenário',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Mercenário';
        goblin.combate++;
      },
    },
    {
      nome: 'Caçador',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Caçador';
        goblin.combate++;
      },
    },
    {
      nome: 'Gatuno',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Gatuno';
        goblin.habilidade++;
      },
    },
    {
      nome: 'Líder',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Líder';
        goblin.vitalidade++;
      },
    },
    {
      nome: 'Incendiário',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Incendiário';
        goblin.vitalidade++;
      },
    },
    {
      nome: 'Bruxo',
      modificador: (goblin: any) => {
        goblin.ocupacao = 'Bruxo';
        goblin.nocao++;
      },
    },
  ];

  descritores = [
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
          }
        });
      },
    },
  ];
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

  dialogRefNewGoblin!: MatDialogRef<NewGoblinComponent>;
  constructor(private dialog: MatDialog) {}

  public goblins: any[] = [];

  newGoblin() {
    let goblin: any = {
      nome: '',
      nivel: 1,
      ocupacao: '',
      descritor: '',
      caracteristica: '',
      combate: 2,
      habilidade: 2,
      nocao: 2,
      vitalidade: 2,
      perguntas: [],
      dados: []
    };
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

    goblin.dados = arrayDadosRolados;

    console.log(arrayDadosRolados);

    let nome = this.nomes[arrayDadosRolados[0] - 1][arrayDadosRolados[1] - 1];

    let ocupacao = this.ocupacoes[arrayDadosRolados[2] - 1];

    let descritor = this.descritores[arrayDadosRolados[3] - 1];

    nome?.modificador(goblin);
    ocupacao?.modificador(goblin);
    descritor?.modificador(goblin);

    if (goblin.perguntas.length > 0) {
      this.openDialog(goblin).subscribe({
        next: (data: any) => {
          if (data) {
            console.log(data);
            goblin.perguntas.forEach((element: any,index: number) => {
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

  openDialog(goblin: any) {
    this.dialogRefNewGoblin = this.dialog.open(NewGoblinComponent, {
      data: goblin,
    });

    return this.dialogRefNewGoblin.afterClosed();
  }
}
