import { UserStorieRestI } from './../../shared/us-doc.ed';
import { UsService } from './../../shared/services/us.service';
import { Component, OnInit } from '@angular/core';
import { ViewProjetoRestI } from '../../shared/us-doc.ed';
import { ActivatedRoute, ParamMap } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-projeto',
  templateUrl: './view-projeto.component.html',
  styleUrls: ['./view-projeto.component.scss']
})
export class ViewProjetoComponent implements OnInit {

  constructor(private usService: UsService, private activatedRouter: ActivatedRoute) { }

  private id: string;
  viewProjeto: ViewProjetoRestI;

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.usService.viewProjeto(this.id).subscribe(data => {
        this.viewProjeto = data;
        console.log(data);
      });
    });
  }

}
