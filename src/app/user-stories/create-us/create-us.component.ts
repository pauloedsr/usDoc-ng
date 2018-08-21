import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-us',
  templateUrl: './create-us.component.html',
  styleUrls: ['./create-us.component.scss']
})
export class CreateUsComponent implements OnInit {
  idProjeto: string;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe(param => {
      this.idProjeto = param.get('projeto');
    });
  }

}
