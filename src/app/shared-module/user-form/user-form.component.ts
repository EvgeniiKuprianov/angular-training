import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { UserStateService } from './../../users-module/services/user-state.service';
import { map, merge, Observable } from 'rxjs';
import { User } from 'src/app/users-module/interfaces/user-interface';


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

    @Input() userData: Observable<User>;
    @Output() sendForm = new EventEmitter<FormGroup>();

    user: User;
    userForm: FormGroup;
    genderGroup: object[] = [
        { name: 'male', value: 'Male' },
        { name: 'female', value: 'Female' }
    ]

    constructor(private formBuilder: FormBuilder,
        private userStateService: UserStateService) {
        this.userForm = this.createUserForm();
    }

    ngOnInit(): void {
        merge(
            this.userForm.controls['firstName'].valueChanges.pipe(
                map(firstName => this.user.firstName = firstName)
            )
            ,
            this.userForm.controls['lastName'].valueChanges.pipe(
                map(lastName => this.user.lastName = lastName)
            )
        ).subscribe(_ => this.changingEmail());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['userData'].currentValue) {
            this.user = changes['userData'].currentValue as User;
            this.userForm.patchValue(this.user);
        }
    }

    ngAfterViewInit() {
        const addressFromArray = { addressField: [this.user.addressField] };
        this.userForm.patchValue(addressFromArray);
    }

    public createUserForm(): FormGroup {
        return this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email, this.validateEmail], this.asyncValidator.bind(this)],
            age: ['', [Validators.required, Validators.min(15), Validators.max(100)]],
            company: ['', [Validators.maxLength(35)]],
            department: ['', [Validators.minLength(6)]],
            gender: ['', [Validators.required]],
            status: [true]
        })
    }

    public changingEmail(): void {
        this.user.email = this.user.firstName.toLowerCase() + this.user.lastName.toLowerCase() + '@gmail.com';
        this.userForm.patchValue({ email: this.user.email })
    }

    public sendUserForm(): void {
        this.sendForm.emit(this.userForm);
    }

    private validateEmail(control: AbstractControl): ValidationErrors | null {
        return control.value.endsWith('@gmail.com') ? null : { domain: true };
    }

    private asyncValidator(control: FormControl): Observable<ValidationErrors> {
        return this.userStateService.validateUniqueEmail(control.value);
    }
}
