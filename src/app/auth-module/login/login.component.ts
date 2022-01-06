import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/users-module/services/auth.service';
import { LocalStorageService } from 'src/app/users-module/services/localStorage.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./../auth.module.scss']
})

export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.createLoginForm();
    }

    createLoginForm(): void {
        this.loginForm = new FormGroup({
            login: new FormControl('', [Validators.minLength(5), Validators.maxLength(15), Validators.required]),
            password: new FormControl('', [Validators.minLength(5), Validators.maxLength(35), Validators.required]),
        })
    }

    submit(): void {
        this.authService.login(this.loginForm);
    }
}
