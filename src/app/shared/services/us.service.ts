import { ProjetosRestI } from './../us-doc.ed';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class UsService {

  constructor(private http: HttpClient) { }

  getProjetos(): Observable<ProjetosRestI[]> {
    return Observable.create(observer => {
      const autor = localStorage.getItem('id');
      this.http.get(`${SERVER_URL}/projeto/list/${autor}`).subscribe((data: ProjetosRestI[]) => {
        observer.next(data);
      });
    });
  }
}
