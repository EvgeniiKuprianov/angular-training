import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'custom-error',
    template: `<ng-container *ngIf="validationError">
             {{ errorText }} </ng-container>`
})
export class CustomErrorComponent implements OnInit {

    @Input() errors: ValidationErrors;
    @Input() fieldName: string;

    public errorText: string;
    public errorsList: object;
    public mainError: any;

    constructor() {}

    get validationError() {
        this.errors ? this.mainError = Object.keys(this.errors)[0] : undefined;

        for (const [key, value] of Object.entries(this.errorsList)) {
            if (this.mainError === key) {
                this.errorText = value;
            }
        }

        return this.errors;
    }

    ngOnInit(): void {
        this.errorsList = {
            required: `${this.fieldName} is required`,
            email: 'Invalid email view',
            domain: 'Invalid domain, should be "@gmail.com"',
            uniqueEmail: 'User with this e-mail is already registered',
            min: 'Min age must be 15',
            max: 'Max value must be no more than 100',
            maxlength: `Max length of ${this.fieldName} name must be no more than 35 symbols`,
            minlength: `Min length of ${this.fieldName} name must be 6 symbols`,
        }

    }
}
