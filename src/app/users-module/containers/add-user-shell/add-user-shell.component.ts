import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';
import { User } from '../../interfaces/user-interface';
import { Router  } from '@angular/router';


@Component({
  selector: 'add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {
  userForm: FormGroup;
  newUser: User;
  selectedFile: null;
  showError: boolean;

  constructor(private formBuilder: FormBuilder,
              private userStateService: UserStateService,
              private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, EmailValidate]], 
      userAge: ['', [Validators.required, Validators.min(15), Validators.max(100)]],
      userCompany: ['', [Validators.maxLength(35)]],
      userDepartment: ['', [Validators.minLength(6)]],
      gender: ['', [Validators.required]],
     })
  }

  onSubmit() {   
    const userProperties  = this.userForm.controls; 
      this.newUser = {
        name: userProperties['name'].value,
        email: userProperties['email'].value,
        age: userProperties['userAge'].value,
        company: userProperties['userCompany'].value,
        department: userProperties['userDepartment'].value,
        gender: userProperties['gender'].value,
        status: true
      }

      if (this.userForm.valid) {
        this.userStateService.addNewUser(this.newUser);
        this.router.navigate(["/users-list"]);
        this.showError = false;
      } else {
        this.showError = true;
      }
  }
}

function EmailValidate (control: AbstractControl) { 
  if (control.value.endsWith('@gmail.com')) {
    return true;
  }

  return false;
}