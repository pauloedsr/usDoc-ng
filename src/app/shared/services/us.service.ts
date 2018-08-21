import { ProjetosRestI, ViewProjetoRestI, UserStorieRestI } from './../us-doc.ed';
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

  viewProjeto(id: string): Observable<ViewProjetoRestI> {
    return Observable.create(observer => {
      this.http.get(`${SERVER_URL}/projeto/view/${id}`).subscribe((data: ViewProjetoRestI) => {
        observer.next(data);
      });
    });
  }

  viewUS(id: string): Observable<UserStorieRestI> {
    return Observable.create(observer => {
      this.http.get(`${SERVER_URL}/us/view/${id}`).subscribe((data: UserStorieRestI) => {
        observer.next(data);
      });
    });
  }
}
