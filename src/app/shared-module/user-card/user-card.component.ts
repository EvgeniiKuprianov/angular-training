import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserFromService } from '../../users-module/interfaces/user-interface';
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
    
    @Input() user: UserFromService;
    @Input() index: number;

    constructor(private router: Router) { }

    ngOnInit(): void {}

    changeStatus(user: UserFromService): void {
        this.changeButtonStatus.changeStatus(user);        
    }

    editUser(user: UserFromService): void {        
        this.router.navigate(['/edit-user', user.id]);
    }

    userDetails(user: UserFromService) {
        this.router.navigate(['/user-details', user.id]);
    }
}
