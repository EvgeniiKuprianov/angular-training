import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../users-module/interfaces/user-interface';
import { Router } from '@angular/router';
import { ButtonStatusComponent } from '../button-status/button-status.component';


@Component({
    selector: 'user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
    @ViewChild(ButtonStatusComponent)

    private changeButtonStatus: ButtonStatusComponent;

    @Input() user: User;
    @Input() index: number;


    constructor(private router: Router) { }

    ngOnInit(): void {
        this.user.id = this.index;
    }

    changeStatus(user: User): void {
        this.changeButtonStatus.changeStatus(user);        
    }

    editUser(user: User): void {
        this.router.navigate(['/edit-user'], { queryParams: { id: `${user.id}` } });
    }
}
