import { ProjetosRestI, ViewProjetoRestI, UserStorieRestI, UserStorieI, ProjetoI, SuccessI } from './../us-doc.ed';
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
      this.http.get(`${SERVER_URL}/us/view/${id}`).subscribe((data: SuccessI) => {
        data.obj = data.obj as UserStorieI;
        observer.next(data);
      });
    });
  }

  deleteUS(id: string): Observable<UserStorieRestI> {
    return Observable.create(observer => {
      this.http.delete(`${SERVER_URL}/us/${id}`).subscribe((data: SuccessI) => {
        observer.next(data);
      });
    });
  }

  postUs(us: UserStorieI): Observable<UserStorieI> {
    return Observable.create(observer => {
      this.http.post(`${SERVER_URL}/us`, us).subscribe((data: UserStorieI) => {
        observer.next(data);
      });
    });
  }

  putUs(us: UserStorieI): Observable<UserStorieI> {
    return Observable.create(observer => {
      this.http.put(`${SERVER_URL}/us`, us).subscribe((data: UserStorieI) => {
        observer.next(data);
      });
    });
  }

  postProjeto(projeto: ProjetosRestI): Observable<ProjetosRestI> {
    return Observable.create(observer => {
      this.http.post(`${SERVER_URL}/projeto`, projeto).subscribe((data: ProjetosRestI) => {
        observer.next(data);
      });
    });
  }

  putProjeto(projeto: ProjetosRestI): Observable<ProjetosRestI> {
    return Observable.create(observer => {
      this.http.put(`${SERVER_URL}/projeto`, projeto).subscribe((data: ProjetosRestI) => {
        observer.next(data);
      });
    });
  }
}
