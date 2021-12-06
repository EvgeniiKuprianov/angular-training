import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';
import { User } from '../../interfaces/user-interface';
import { Router  } from '@angular/router';



@Component({
  selector: 'add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})

export class AddUserShellComponent implements OnInit {
  newUser: User;
  
  constructor(private router: Router,
              private userStateService: UserStateService) {}

  ngOnInit(): void {
  }

  public onSubmit(userForm: FormGroup): void {   
    this.newUser = userForm.value;      
  
      if (userForm.valid) {
        this.userStateService.addNewUser(this.newUser);
        this.router.navigate(["/users-list"]);
      } else {
        userForm.markAllAsTouched();
      }   
  }
}
