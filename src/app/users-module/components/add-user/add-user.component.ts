import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';
import { User } from '../../interfaces/user-interface';
import { Router  } from '@angular/router';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  newUser: User;

  constructor(private formBuilder: FormBuilder,
              private userStateService: UserStateService,
              private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      "userName": '',
      "userSurname": '', 
      "userAge": '',
      "userCompany": '',
      "userDepartment": '',
      "gender": '',
      "image":''
     })
  }

  onSubmit(addUser: FormGroup) {   
    const userProperties  = addUser.controls; 
      this.newUser = {
        name: userProperties['userName'].value,
        surname: userProperties['userSurname'].value,
        age: userProperties['userAge'].value,
        company: userProperties['userCompany'].value,
        department: userProperties['userDepartment'].value,
        gender: userProperties['gender'].value,
        image: userProperties['image'].value,
        status: true
      }   

      this.userStateService.addNewUser(this.newUser);
      this.router.navigate(["/users-list"]);
    } 
}
