import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user-interface';
import { UserStateService } from '../../user-state.service';


@Component({
  selector: 'status-button',
  template: `<button [ngClass]="{
              'user-active-status': user.age >=18,
              'user-inactive-status': user.age < 18,
              'showButton': user.status,
              'hideButton': !user.status
            }">Change status</button>`,
  styleUrls: ['./button-status-shell.component.scss']
})

export class ButtonStatusShellComponent implements OnInit {

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
