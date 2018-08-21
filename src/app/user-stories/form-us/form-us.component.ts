import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-form-us',
  templateUrl: './form-us.component.html',
  styleUrls: ['./form-us.component.scss']
})
export class FormUsComponent implements OnInit {

  @Input() idProjeto: string;
  @Input() isNovo: boolean;

  formUs: FormGroup;
  private itensPre: any = [];

  constructor(private fb: FormBuilder) {
    this.formUs = this.fb.group({
      inNumero: new FormControl('', Validators.required),
      inNome: new FormControl('', Validators.required),
      inDescricao: new FormControl('', Validators.required),
      preCondicoes: this.fb.array([ this.addItem() ])
    });
  }

  ngOnInit() {
  }

  addItem(): FormGroup {
    return this.fb.group({
        inNroPre: new FormControl('', Validators.required),
        inNomePre: new FormControl('', Validators.required),
    });
  }

  addPre() {
    this.itensPre = this.formUs.get('preCondicoes') as FormArray;
    this.itensPre.push(this.addItem());
    console.log(this.itensPre);
  }

}
