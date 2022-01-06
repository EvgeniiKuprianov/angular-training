import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFormComponent } from 'src/app/shared-module/user-form/user-form.component';
import { UserFromService } from '../../interfaces/user-interface';
import { UserStateService } from '../../services/user-state.service';


@Component({
    selector: 'app-edit-user-shell',
    templateUrl: './edit-user-shell.component.html',
    styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit  {

    @ViewChild(UserFormComponent)
    public userForm: UserFormComponent;
    public user$: Observable<UserFromService>;
    public userId: number;
    public isSubmitted: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userStateService: UserStateService) {}

    ngOnInit(): void {
        this.route.params
            .subscribe(data => {                
                this.userId = data['id'];
                this.user$ = this.userStateService.getUserById(this.userId);
        });        
    }
 
    saveChangedUser(userForm: FormGroup) {
        const user = userForm.value;           
        
        if (userForm.valid) {
            this.userStateService.changeUserData(user, this.userId);
            this.router.navigate(["/users-list"]);
        } else {
            userForm.markAllAsTouched();
        }
    }
}
