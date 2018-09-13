import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRestI, LoginFormI } from '../us-doc.ed';
import { SERVER_URL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticar(login: LoginFormI): Observable<LoginRestI> {
    return Observable.create(observer => {
        this.http.post(`${SERVER_URL}/login-api`, {email: login.email, password: login.password}).subscribe((data: LoginRestI) => {
            if (data.success) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('id', data.user._id);
                localStorage.setItem('token', data.token);
            }
            observer.next(data);
        });
    });
  }
}
