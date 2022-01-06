import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';
import { UserFromService } from '../../interfaces/user-interface';
import { Router } from '@angular/router';


@Component({
    selector: 'add-user-shell',
    templateUrl: './add-user-shell.component.html',
    styleUrls: ['./add-user-shell.component.scss']
})

export class AddUserShellComponent implements OnInit {
    public newUser: UserFromService;

    constructor(private router: Router,
        private userStateService: UserStateService) { }

    ngOnInit(): void {
    }

    public onSubmit(userForm: FormGroup): void {
        this.newUser = userForm.value;
        this.newUser.location = userForm.controls['location'].value[0];       

        if (userForm.valid) {
            this.userStateService.addNewUser(this.newUser);
            this.router.navigate(["/users"]);
        } else {
            userForm.markAllAsTouched();
        }
    }
}
