import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-us',
  templateUrl: './edit-us.component.html',
  styleUrls: ['./edit-us.component.scss']
})
export class EditUsComponent implements OnInit {
  idUs: string;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe(param => {
      this.idUs = param.get('id');
    });
  }

}
