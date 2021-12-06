import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../users-module/interfaces/user-interface';
import { UserStateService } from '../../users-module/services/user-state.service';


@Component({
  selector: 'status-button',
  template: `<button [ngClass]="{
              'user-active-status': user.age >=18,
              'user-inactive-status': user.age < 18,
              'showButton': user.status,
              'hideButton': !user.status
            }">Change status</button>`,
  styleUrls: ['./button-status.component.scss']
})

export class ButtonStatusComponent implements OnInit {

  @Input() user: User;

  constructor(private userStateService: UserStateService) { }
  
  public changeStatus(user: User): void {  
    if (user.age >= 18) {
      user.status = !user.status;
      this.userStateService.changeUserStatus(user)
    }
  }
  
  ngOnInit(): void {
  }

}
