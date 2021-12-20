import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { UserStateService } from './../../users-module/services/user-state.service';
import { tap, merge, Observable } from 'rxjs';
import { UserFromService } from 'src/app/users-module/interfaces/user-interface';


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

    @Input() userData: Observable<UserFromService>;
    @Output() sendForm = new EventEmitter<FormGroup>();

    public user: UserFromService;
    public oldUserData: UserFromService;
    public userForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private userStateService: UserStateService) {
        this.userForm = this.createUserForm();
    }

    ngOnInit(): void {
        this.oldUserData = this.userForm.value;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['userData'].currentValue) {
            this.user = changes['userData'].currentValue as UserFromService;
            this.userForm.patchValue(this.user);
            this.changingEmail();
        }              

        merge(
            (this.userForm.controls['name'] as FormGroup).controls['first'].valueChanges.pipe(
                tap(firstName => this.user.name.first = firstName)
            )
            ,
            (this.userForm.controls['name'] as FormGroup).controls['last'].valueChanges.pipe(
                tap(lastName => this.user.name.last = lastName)
            )
        ).subscribe(_ => this.changingEmail());
    }

    ngAfterViewInit() {        
        if (this.user) {
            const addressFromArray = { location: [this.user.location] };
            this.userForm.patchValue(addressFromArray);
        }   
    }

    public createUserForm(): FormGroup {
        return this.formBuilder.group({
            name: this.formBuilder.group({
                title: [''],
                first: ['', [Validators.required]], 
                last: ['', [Validators.required]],
            }),
            dob: this.formBuilder.group({
                age: ['', [Validators.required, Validators.min(15), Validators.max(100)]]
            }),
            email: ['', [Validators.required, Validators.email, this.validateEmail], this.asyncValidator.bind(this)],
            gender: [''],
            phone: [''],
            status: [true]
        })
    }

    public changingEmail(): void {       
        this.user.email = this.user.name.first.toLowerCase() + this.user.name.last.toLowerCase() + '@gmail.com';
        console.log(this.user.email);
        
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
