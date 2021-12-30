import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'registry-form',
    templateUrl: './registry.component.html',
    styleUrls: ['./../auth.module.scss']
})

export class RegistryComponent implements OnInit {

    public registryForm: FormGroup;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.createRegistryForm();
    }

    createRegistryForm(): FormGroup {
        this.registryForm = new FormGroup({
            login: new FormControl('', [Validators.minLength(5), Validators.maxLength(15), Validators.required, this.loginCheck()]),
            passwordField: new FormGroup({
                password: new FormControl('', [Validators.minLength(5), Validators.maxLength(35), Validators.required]),
                confirmPassword: new FormControl('', [Validators.minLength(5), Validators.maxLength(35), Validators.required])
            }, { validators: this.passwordCheck() })
        })

        return this.registryForm;
    }

    submit(): void {
        if (this.registryForm.valid && !Object.keys(localStorage).includes(this.registryForm.controls['login'].value)) {
            const userData = (this.registryForm.controls['passwordField'] as FormGroup).controls['password'].value;
            localStorage.setItem(this.registryForm.controls['login'].value, userData);
            this.router.navigate(["/login"]);
        } else {
            this.registryForm.markAllAsTouched();
        }
    }

    show(): void {
        console.log(localStorage);
    }

    clear(): void {
        localStorage.clear()
    }

    passwordCheck(): ValidatorFn {
        return (form: FormGroup): any => {
            const password = form.get('password');
            const confirmPassword = form.get('confirmPassword');       
            
            if (password.value !== confirmPassword.value) {
                confirmPassword.setErrors({ differentPasswords: true });
            } else {
                confirmPassword.setErrors(null);
            }
        }
    }

    loginCheck(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (Object.keys(localStorage).includes(control.value)) {
                return { existLogin: true };
            } else {
                return null;
            }
        }
    }
}
