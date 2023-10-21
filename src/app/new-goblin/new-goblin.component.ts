import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-goblin',
  templateUrl: './new-goblin.component.html',
  styleUrls: ['./new-goblin.component.scss']
})
export class NewGoblinComponent {


  form!: FormGroup;
  escolhas: any[];
  constructor(private fb: FormBuilder,
    private modalNewGoblin: MatDialogRef<NewGoblinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.escolhas = data.perguntas;
    this.form = this.fb.group({
      formPerguntas: this.fb.array([])
    })

    this.escolhas.forEach((item )=> {
      this.formPerguntas.push(new FormControl())
    })
  }

  get formPerguntas(){
    return this.form.controls['formPerguntas'] as FormArray
  }

  close(){
    this.modalNewGoblin.close();
  }

  save(){
    this.modalNewGoblin.close(this.form.value);
  }

}