import { ProjetosRestI } from './../shared/us-doc.ed';
import { UsService } from './../shared/services/us.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {

  constructor(private usService: UsService) { }

  public projetos: ProjetosRestI[];

  ngOnInit() {
    this.usService.getProjetos().subscribe(data => {
      this.projetos = data;
    });
  }

}
