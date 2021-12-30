import { Component, Input, OnInit } from '@angular/core';
import { UserFromService } from '../../users-module/interfaces/user-interface';
import { UserStateService } from '../../users-module/services/user-state.service';


@Component({
    selector: 'status-button',
    template: `<button [ngClass]="{
              'user-active-status': user.dob.age >=18,
              'user-inactive-status': user.dob.age < 18,
              'showButton': user.status,
              'hideButton': !user.status
            }">Change status</button>`,
    styleUrls: ['./button-status.component.scss']
})

export class ButtonStatusComponent implements OnInit {

    @Input() user: UserFromService;

    constructor(private userStateService: UserStateService) { }

    ngOnInit(): void {
    }

    public changeStatus(user: UserFromService): void {
        if (user.dob.age >= 18) {
            user.status = !user.status;
            this.userStateService.changeUserData(user, user.id)
        }
    }
}
