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


  title = 'malditos-goblins';

  dialogRefNewGoblin!: MatDialogRef<NewGoblinComponent>;
  constructor(private dialog: MatDialog) { }

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

  openDialog(goblin: any) {
    this.dialogRefNewGoblin = this.dialog.open(NewGoblinComponent, {
      data: goblin,
    });

    return this.dialogRefNewGoblin.afterClosed();
  }
}
