import { UsService } from './../shared/services/us.service';
import { UserStorieRestI } from './../shared/us-doc.ed';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  userStorieRestI: UserStorieRestI;

  constructor(private usService: UsService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.usService.viewUS(id).subscribe((data: UserStorieRestI) => {
        this.userStorieRestI = data;
      });
    });
  }

}
