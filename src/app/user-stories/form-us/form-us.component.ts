import { UserStorieI } from './../../shared/us-doc.ed';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '../../../../node_modules/@angular/forms';
import { UsService } from '../../shared/services/us.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-us',
  templateUrl: './form-us.component.html',
  styleUrls: ['./form-us.component.scss']
})
export class FormUsComponent implements OnInit {

  @Input() idProjeto: string;
  @Input() idUs: string;
  @Input() isNovo: boolean;

  formUs: FormGroup;

  constructor(private fb: FormBuilder, private usService: UsService) {
    this.formUs = this.fb.group({
      _id: new FormControl(),
      autor: new FormControl(),
      projeto: new FormControl(),
      numero: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      preCondicoes: this.fb.array([ this.addItemFormArray() ]),
      condicoes: this.fb.array([ this.addItemFormArray() ])
    });
  }

  ngOnInit() {
    console.log(this.isNovo, this.idUs);
    if (!this.isNovo) {
      this.usService.viewUS(this.idUs).subscribe(data => {
        console.log(data);
        delete data.userStorie.updatedAt;
        delete data.userStorie.createdAt;
        delete data.userStorie.__v;
        this.formUs.setValue(data.userStorie);
      });
    }
  }

  private addItemFormArray(): FormGroup {
    return this.fb.group({
        numero: new FormControl('', Validators.required),
        descricao: new FormControl('', Validators.required),
    });
  }

  adicionarItem(formArrayName: string) {
    const itensPre = this.formUs.get(formArrayName) as FormArray;
    itensPre.push(this.addItemFormArray());
  }

  getFormArray(formArrayName: string): FormArray {
    return this.formUs.get(formArrayName) as FormArray;
  }

  salvar() {
    const us = this.formUs.value as UserStorieI;
    console.log('salva', us.projeto, us);
    if (this.isNovo) {
      us.autor = localStorage.getItem('id');
      us.projeto = this.idProjeto;
      this.usService.postUs(us).subscribe();
    } else {
      this.usService.putUs(us).subscribe(data => {
        console.log(data);
        
      });
    }
  }

}
