import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginFormI } from '../shared/us-doc.ed';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private auth: AuthService) {}

    ngOnInit() {
        this.setFormLogin();
    }

    private setFormLogin() {
        this.formLogin = this.fb.group({
          email: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
        });
      }

    onLogin() {
        const login = this.formLogin.value as LoginFormI;
        console.log(login);

        this.auth.autenticar(login).subscribe(data => {
            if (data.success) {
                this.router.navigate(['/projetos']);
            }
        });
    }
}
