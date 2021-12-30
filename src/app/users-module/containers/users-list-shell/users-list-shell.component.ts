import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserFromService } from '../../interfaces/user-interface';
import { UserStateService } from '../../services/user-state.service';
import { Observable, throwError, tap, of } from 'rxjs';


@Component({
    selector: 'users-list-shell',
    templateUrl: './users-list-shell.component.html',
    styleUrls: ['./users-list-shell.component.scss'],
})


export class UsersListShellComponent implements OnInit {
    public isShowAll: boolean = true;
    public disabledButton: boolean = this.userStateService.disabledButton;
    public usersArray: UserFromService[] = [];
    public allUsers: UserFromService[];
    public pageSlice: UserFromService[];

    constructor(private userStateService: UserStateService) {}

    ngOnInit(): void {
        this.userStateService.getUsers().pipe(
            tap((users: UserFromService[]) => {
                users.map((user, index) => {
                    user.status = true;
                    user.id = index;
                })
            })
        )
        .subscribe((users) => {
            this.usersArray = users;
            this.allUsers = this.usersArray;
            this.pageSlice = this.usersArray.slice(0, 10);
        })
    }

    showAndHide(): void {
        this.isShowAll = !this.isShowAll;
        this.usersArray = this.isShowAll ? this.allUsers : this.usersArray.filter(user => user.status);
        this.pageSlice = this.usersArray.slice(0, 10);
    }

    showNecessaryUsers(usersArray: UserFromService[]): void {
        this.usersArray = usersArray;
        this.pageSlice = this.usersArray.slice(0, 10);
    }

    deactivatePossibleUsers(): void {
        this.userStateService.changeDisableFlag();
        this.userStateService.getIsDisable().subscribe(disabled => this.disabledButton = disabled);
        this.usersArray.map(user => {
            if (user.status && user.dob.age >= 18) {
                user.status = !user.status;
            }
        })
    }

    onPageChange(event: PageEvent): void {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;

        if (endIndex > this.usersArray.length) {
            endIndex = this.usersArray.length
        }

        this.pageSlice = this.usersArray.slice(startIndex, endIndex);
    }
}
