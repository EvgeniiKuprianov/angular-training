import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./../auth.module.scss']
})

export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.createLoginForm();
    }

    createLoginForm(): FormGroup {
        this.loginForm = new FormGroup({
            login: new FormControl('', [Validators.minLength(5), Validators.maxLength(15), Validators.required]),
            password: new FormControl('', [Validators.minLength(5), Validators.maxLength(35), Validators.required]),
        })

        return this.loginForm;
    }

    submit(): void {
        if (Object.keys(localStorage).includes(this.loginForm.controls['login'].value) && this.loginForm.status) {
            const password = localStorage[this.loginForm.controls['login'].value];                    

            if (this.loginForm.controls['password'].value === password) {
                localStorage.setItem(this.loginForm.controls['login'].value, this.loginForm.controls['password'].value);
                localStorage.setItem('token', this.loginForm.controls['login'].value);
                this.router.navigate(['/users-list']);
            } else {
                this.loginForm.controls['password'].setErrors({ wrongPassword: true });
            }
        } else {
            this.loginForm.controls['login'].setErrors({ noUsers: true });
            this.loginForm.markAllAsTouched();
        }
    }
}
