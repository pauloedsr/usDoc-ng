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
        localStorage.setItem('id', '5b89aeccf115e7148c64c80c');
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWI4OWFlY2NmMTE1ZTcxNDhjNjRjODBjIiwiaWF0IjoxNTM1NzUwMDQ0fQ.iT6dxqlNGtz5yx1eGdBPJ8MQPHRrDOizGKu3AdD05ZQ');
        this.router.navigate(['/dashboard']);
    }
}
