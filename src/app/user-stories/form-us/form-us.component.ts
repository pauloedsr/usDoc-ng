import { UserStorieI } from './../../shared/us-doc.ed';
import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '../../../../node_modules/@angular/forms';
import { UsService } from '../../shared/services/us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form-us',
  templateUrl: './form-us.component.html',
  styleUrls: ['./form-us.component.scss']
})
export class FormUsComponent implements OnInit {

  @Input() idProjeto: string;
  @Input() idUs: string;
  @Input() isNovo: boolean;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  formUs: FormGroup;

  constructor(private fb: FormBuilder, private usService: UsService, private router: Router, private ngZone: NgZone) {
    this.formUs = this.fb.group({
      _id: new FormControl(),
      autor: new FormControl(),
      projeto: new FormControl(),
      numero: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      preCondicoes: this.fb.array([]),
      criterios: this.fb.array([])
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
        data.userStorie.preCondicoes.forEach(pre => { this.adicionarItem('preCondicoes'); } );
        data.userStorie.criterios.forEach(pre => { this.adicionarItem('criterios'); } );
        this.formUs.setValue(data.userStorie);
      });
    } else {
      // this.adicionarItem('preCondicoes');
      this.adicionarItem('criterios');
    }

    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
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
  
  removerItem(formArrayName: string, index: number) {
    const itensPre = this.formUs.get(formArrayName) as FormArray;
    itensPre.removeAt(index);
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
      this.usService.postUs(us).subscribe(data => {
        this.router.navigate(['/projetos/view', this.idProjeto]);
      });
    } else {
      this.usService.putUs(us).subscribe(data => {
        this.router.navigate(['/us/view', this.idUs]);
      });
    }
  }

}
