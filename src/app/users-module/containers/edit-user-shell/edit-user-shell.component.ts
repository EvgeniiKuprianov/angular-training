import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user-interface';
import { UserStateService } from '../../services/user-state.service';


@Component({
    selector: 'app-edit-user-shell',
    templateUrl: './edit-user-shell.component.html',
    styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit {

    user$: Observable<User>;
    userId: number;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private userStateService: UserStateService) {}

    ngOnInit(): void {
        this.route.params
            .subscribe(data => {                
                this.userId = data['id'];
                this.user$ = this.userStateService.getUserById(this.userId)
        });
    }

    autocompleteForm(userForm: FormGroup) {   
        this.user$.subscribe(userData => {
            userForm.setValue(userData)
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
