import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { UserStateService } from './../../users-module/services/user-state.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  @Output() sendForm = new EventEmitter<FormGroup>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userStateService: UserStateService) {}

  ngOnInit(): void {
    this.userForm = this.createUserForm();
  }

  public createUserForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.validateEmail], this.asyncValidator.bind(this)], 
      age: ['', [Validators.required, Validators.min(15), Validators.max(100)]],
      company: ['', [Validators.maxLength(35)]],
      department: ['', [Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      status: [true]
     })
  }

  public onSubmit(): void {
    this.sendForm.emit(this.userForm)
  }

  private validateEmail(control: AbstractControl): ValidationErrors | null {
    return control.value.endsWith('@gmail.com') ? null : { domain: true };
  }

  private asyncValidator(control: FormControl): Observable<ValidationErrors> {
    return this.userStateService.validateUniqueEmail(control.value);
  }
}
