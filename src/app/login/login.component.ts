import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('id', '5b76032d37153236e8edae17');
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWI3NjAzMmQzNzE1MzIzNmU4ZWRhZTE3IiwiaWF0IjoxNTM0NDYwOTQ2fQ.otrdbN4fl_YHhqN0Wc5B0Pg_2aPwGDSCr1HB7n1cZVI');
        this.router.navigate(['/dashboard']);
        
    }
}
