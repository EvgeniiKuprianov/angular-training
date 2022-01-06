import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { LocalStorageService } from "./localStorage.service";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private router: Router,
                private localStorageService: LocalStorageService){}

    login(form: FormGroup): void {
        const userLogin = form.value.login;
        const userPassword = form.value.password;
              
        if (this.localStorageService.checkAvailabilityUser(userLogin) && form.status) {
            if (this.localStorageService.checkPassword(userLogin) === userPassword) {
                this.localStorageService.signIn(userLogin)
                this.router.navigate(["/users"])
            } else {
                form.get('password').setErrors({ wrongPassword: true });
            }
        } else {
            form.get('login').setErrors({ noUsers: true });
            form.markAllAsTouched();
        }
    }

    registration(form: FormGroup) {
        const userLogin = form.value.login;
        const userPassword = form.value.passwordField.password;

        if (form.status && !this.localStorageService.checkAvailabilityUser(userLogin)) {
            this.localStorageService.addRegisteredUser({
                login: userLogin,
                password: userPassword
            })
            this.router.navigate(["/login"]);
        }
        else {
            form.markAllAsTouched();
        }        
    }
}