import { UsService } from './../shared/services/us.service';
import { UserStorieRestI } from './../shared/us-doc.ed';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  userStorieRestI: UserStorieRestI;

  constructor(private usService: UsService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.usService.viewUS(id).subscribe((data: UserStorieRestI) => {
        this.userStorieRestI = data;
      });
    });
  }

  delete() {
    this.usService.deleteUS(this.userStorieRestI.userStorie._id).subscribe(data => {
      if (data.success) {
        this.router.navigate(['projetos/view', this.userStorieRestI.projeto._id]);
      } else {
        console.log(data);
      }
    });
  }

}
