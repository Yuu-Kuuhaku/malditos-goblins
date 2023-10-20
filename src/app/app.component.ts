import { Component } from '@angular/core';


import {DiceRoll} from '@dice-roller/rpg-dice-roller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'malditos-goblins';

  constructor(){

  }

  public goblins: any[] = [];


  newGoblin(){
    

    const roll = new DiceRoll('1d6');

    console.log(roll.total);
    // roll.roll()
    console.log(roll.total);
    this.goblins.push({name: 'teste'})
  }
}
