import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsService } from '../../shared/services/us.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjetosRestI } from '../../shared/us-doc.ed';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form-projeto',
  templateUrl: './form-projeto.component.html',
  styleUrls: ['./form-projeto.component.scss']
})
export class FormProjetoComponent implements OnInit {

  @Input() isNovo = true;
  @Input() idProjeto: string;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  formProjeto: FormGroup;

  constructor(private fb: FormBuilder,
              private usService: UsService,
              private router: Router,
              private ngZone: NgZone,
              private activedRoute: ActivatedRoute) {
    this.verificaIsNovo();
  }

  ngOnInit() {
    this.setFormProjeto();
    if (!this.isNovo) {
      this.usService.viewProjeto(this.idProjeto).subscribe(data => {
        console.log(data);
        delete data.projeto.updatedAt;
        delete data.projeto.createdAt;
        delete data.projeto.__v;
        this.formProjeto.setValue(data.projeto);
      });
    }
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  salvar() {
    const projeto = this.formProjeto.value as ProjetosRestI;
    console.log('salva', projeto);
    if (this.isNovo) {
      projeto.autor = localStorage.getItem('id');
      delete projeto._id;
      this.usService.postProjeto(projeto).subscribe(data => {
        this.router.navigate(['/projetos/view', data._id]);
      });
    } else {
      this.usService.putProjeto(projeto).subscribe(data => {
        this.router.navigate(['/projetos/view', data._id]);
      });
    }
  }

  private setFormProjeto() {
    this.formProjeto = this.fb.group({
      _id: new FormControl(),
      autor: new FormControl(),
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  private verificaIsNovo() {
    this.activedRoute.paramMap.subscribe(param => {
      if (param.has('id')) {
        this.isNovo = false;
        this.idProjeto = param.get('id');
      } else {
        this.isNovo = true;
        this.idProjeto = undefined;
      }
    });
  }

}
