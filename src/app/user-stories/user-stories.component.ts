import { UsService } from './../shared/services/us.service';
import { UserStorieRestI } from './../shared/us-doc.ed';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../node_modules/@angular/router';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

    @ViewChild('inputFile') inputFile: ElementRef;
    uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/upload', itemAlias: 'photo'});
    userStorieRestI: UserStorieRestI;

    constructor(private usService: UsService, private ar: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.ar.paramMap.subscribe((param: ParamMap) => {
            const id = param.get('id');
            this.usService.viewUS(id).subscribe((data: UserStorieRestI) => {
            this.userStorieRestI = data;
            });
        });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            this.inputFile.nativeElement.value = '';
            console.log('ImageUpload:uploaded:', item, status, response);
        };
    }

    delete() {
        if (confirm('Confirma excluir?')) {
            this.usService.deleteUS(this.userStorieRestI.userStorie._id).subscribe(data => {
                if (data.success) {
                this.router.navigate(['projetos/view', this.userStorieRestI.projeto._id]);
                } else {
                console.log(data);
                }
            });
        }
    }

    onUpload() {

  }

}
